import { useState, useEffect } from 'react';
import useStore from '../store.js';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Frontend from '../frontend/Frontend.jsx';
import { hideAdminElements } from './utils/utils.js';
import './components/assets/editorStyle.css';
import { fetchData } from '../common/services/fetchData.js';
import { TsLoader } from '../common/components/controls/tsControls.js';

import editorStore from './states/editorStore.js';
import editorFunction from './states/editorFunction.js';

import CarouselView from '../frontend/components/CarouselView.jsx';
import StaticView from '../frontend/components/StaticView.jsx';

function Editor() {
  const { postType } = editorStore();
  const allSettings = editorStore();
  const { saveSettings } = editorFunction();
  
  const [theme, setTheme] = useState('Theme One');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState(null);

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
          
          const showcaseSettings = JSON.parse(response.data.meta_data.showcase_settings);
          Object.keys(showcaseSettings).forEach((key) => {
            const value = showcaseSettings[key];
            saveSettings(key, value);
          });

          setTimeout(() => {
            setIsLoading(false);
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

  useEffect(() => {
    const handleClick = () => setIsSidebarOpen(true);
    const editorPanel = document.getElementById('editorPanel');
    if (editorPanel) {
      editorPanel.addEventListener('click', handleClick);
    }
    return () => {
      if (editorPanel) {
        editorPanel.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (isLoading || postData === null) {
    return (
      <TsLoader
      label="Loading Editor"
      />
    );
  }

  return (
    <>
      <Topbar
      type={postType}
      />
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        theme={theme}
        setTheme={setTheme}
      />
      <div className='editor-container'>
      {allSettings.view === "carousel" ? (
        <CarouselView
          team_members={postData.team_members}
          settings={allSettings}
        />
      ) : (
        <StaticView
          team_members={postData.team_members}
          settings={allSettings}
        />
      )}
      </div>
    </>
  );
}

export default Editor;