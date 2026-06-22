import { useState, useEffect } from 'react';
import { hideAdminElements } from './utils/utils.js';
import { fetchData } from '../common/services/fetchData.js';
import { TsLoader } from '../common/components/controls/tsControls.js';
import {getTranslations} from "../common/utils/translations.js";

import editorLocal from "./states/editorLocal.js";
import editorStore from './states/editorStore.js';
import editorFunction from './states/editorFunction.js';
import {handleCopySettings, handlePasteSettings} from "./utils/copyPasteLayout.js";
import proLayouts from "../pro_support/proLayouts.js";

import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import './components/assets/editorStyle.css';
import './components/assets/editorHover.css';

import CarouselView from '../frontend/components/CarouselView.jsx';
import StaticView from '../frontend/components/StaticView.jsx';
import FlexView from "../frontend/components/FlexView.jsx";
import MarqueeView from "../frontend/components/MarqueeView.jsx";
import TableView from "../frontend/components/TableView.jsx";
import ConfettiView from "../frontend/components/ConfettiView.jsx";
import FilterableView from "../frontend/components/FiltarableView.jsx";

function Editor() {
  const translations = getTranslations();
  const isPro = tsteam_settings.is_pro;
  const { isEditor, viewport, setViewport } = editorLocal();
  const { postType, undo, redo, canUndo, canRedo } = editorStore();
  const allSettings = editorStore();
  const { saveSettings, hydrateSettings } = editorFunction();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    hideAdminElements();
    setIsLoading(true);

    const queryParams = new URLSearchParams(window.location.search);
    const postIdFromUrl = queryParams.get('post_id');
    const postTypeFromUrl = queryParams.get('type');

    saveSettings('postID', postIdFromUrl);
    saveSettings('postType', postTypeFromUrl);

    if (postIdFromUrl) {
      fetchData(`tsteam/${postTypeFromUrl}/fetch/single`, (response) => {
        if (response && response.success) {
          setPostData(response.data.meta_data);
          setCategoryData(response.data.meta_data.member_categories);
          const showcaseSettings = JSON.parse(response.data.meta_data.showcase_settings);
          hydrateSettings({
            postID: postIdFromUrl,
            postType: postTypeFromUrl,
            ...showcaseSettings,
          });

          setTimeout(() => {
            setIsLoading(false);
            proLayouts();
          }, 1000);
        } else {
          console.error("Error fetching post data:", response);
          setIsLoading(false);
        }
      }, { post_id: postIdFromUrl });
    } else {
      console.error("No post_id found in the URL");
      setIsLoading(false);
    }
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar state
  };

  if (isLoading || postData === null) {
    return (
        <TsLoader
            label={translations.loadingEditor}
        />
    );
  }

  return (
      <>
      <Topbar
      type={postType}
      viewport={viewport}
      setViewport={setViewport}
      onUndo={undo}
      onRedo={redo}
      canUndo={canUndo}
      canRedo={canRedo}
      onCopySettings={() => handleCopySettings(allSettings)}
      onPasteSettings={() => handlePasteSettings(saveSettings)}
      />
      <div className="ts-editor-shell">
        <Sidebar
            isOpen={isSidebarOpen}
            selectedLayout={allSettings.selectedLayout.value}
            layoutType={allSettings.selectedLayout.type}
            onToggleSidebar={handleToggleSidebar}
        />
        <div className="ts-editor-main">
          <div className="ts-editor-canvas">
            <div className="ts-editor-preview-frame">
              <div className="ts-editor-preview-chrome">
                <span></span>
                <span></span>
                <span></span>
                <div className="ts-editor-preview-address"></div>
              </div>

              <div className="ts-editor-preview-surface">
                <div className={`editor-container editor-hover viewport-${viewport}`}>
                  {allSettings.selectedView.value === "flex" ? (
                          <FlexView
                              team_members={postData.team_members}
                              settings={allSettings}
                              viewport={viewport}
                              isEditor={isEditor}
                          />
                      ) : allSettings.selectedView.value === "carousel" ? (
                      <CarouselView
                          team_members={postData.team_members}
                          settings={allSettings}
                          viewport={viewport}
                          isEditor={isEditor}
                      />
                  ) : allSettings.selectedView.value === "marquee" && isPro ? (
                      <MarqueeView
                          team_members={postData.team_members}
                          settings={allSettings}
                          viewport={viewport}
                          isEditor={isEditor}
                      />
                  ) : allSettings.selectedView.value === "table" && isPro ? (
                          <TableView
                              team_members={postData.team_members}
                              settings={allSettings}
                              viewport={viewport}
                              isEditor={isEditor}
                          />
                  ) : allSettings.selectedView.value === "confetti" && isPro ? (
                      <ConfettiView
                          team_members={postData.team_members}
                          settings={allSettings}
                          viewport={viewport}
                          isEditor={isEditor}
                      />
                  ) : allSettings.selectedView.value === "filterable" && isPro ? (
                      <FilterableView
                      team_members={postData.team_members}
                      settings={allSettings}
                      category={categoryData}
                      viewport={viewport}
                      isEditor={isEditor}
                    />
                  ) : (
                      <StaticView
                          team_members={postData.team_members}
                          settings={allSettings}
                          viewport={viewport}
                          isEditor={isEditor}
                      />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Editor;
