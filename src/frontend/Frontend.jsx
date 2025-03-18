import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/hover.css';
import './assets/style.css';
import './assets/entrance.css';
import StaticView from './components/StaticView.jsx';
import FlexView from "./components/FlexView.jsx";
import CarouselView from './components/CarouselView.jsx';
import MarqueeView from './components/MarqueeView.jsx';
import TableView from "./components/TableView.jsx";
import ConfettiView from "./components/ConfettiView.jsx";
import { fetchData } from '../common/services/fetchData.js';
import {toastNotification} from "../common/utils/toastNotification.js";
import {elementorLoader} from "./utils/elementorLoader.js";
import {gutenbergLoader} from "./utils/gutenbergLoader.js";

function initializeReact(element) {
  const id = element.getAttribute('data-id');
  if (!id) {
    console.error("No data-id found for element:", element);
    return;
  }

  createRoot(element).render(
      <StrictMode>
        <Frontend id={id} />
      </StrictMode>
  );
}

function initializeAllWidgets() {
  const showcaseElements = document.querySelectorAll('.tsteam-showcase');
  showcaseElements.forEach((element) => {
    initializeReact(element);
  });
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
  // Handle Elementor's edit mode
  if (window.elementorFrontend && window.elementorFrontend.isEditMode()) {
    elementorLoader(initializeReact);
  }

  // Handle Gutenberg editor
  if (window.wp && window.wp.data && window.wp.data.select) {
    const isGutenbergEditor = !!window.wp.data.select('core/edit-post') || !!window.wp.data.select('core/editor');
    if (isGutenbergEditor) {
      gutenbergLoader(initializeReact);
    }
  }

  // Handle frontend
  if (
      !(window.elementorFrontend && window.elementorFrontend.isEditMode()) &&
      !(window.wp && window.wp.data && window.wp.data.select)
  ) {
    initializeAllWidgets();
  }
});

function Frontend({ id }) {
  const isPro = tsteam_settings.is_pro
  const [teamMembers, setTeamMembers] = useState([]);
  const [settings, setSettings] = useState({});
  const devMode = Boolean(tsteam_settings.devmode);
  const [isHovering, setIsHovering] = useState(false);


  useEffect(() => {
    if (id) {
      fetchData(`tsteam/team_showcase/fetch/single`, (response) => {
        if (response && response.success) {
          setTeamMembers(response.data.meta_data.team_members);
          const showcaseSettings = JSON.parse(response.data.meta_data.showcase_settings);
          setSettings(showcaseSettings);
        } else {
          console.error("Error fetching post data:", response);
        }
      }, { post_id: id });
    } else {
      console.error("No post_id found");
    }
  }, [id]);

  // Function to copy settings to the clipboard
  const handleCopySettings = async () => {
    try {
      const { postID, ...settingsToCopy } = settings;
      const serializedSettings = JSON.stringify(settingsToCopy);
      await navigator.clipboard.writeText(serializedSettings);
      toastNotification('success', `Design Copied`, `The design has copied successfully`);
    } catch (error) {
      console.error("Failed to copy settings to clipboard:", error);
    }
  };


  const renderViewComponent = () => {
    if (settings?.selectedView?.value === "flex") {
      return <FlexView team_members={teamMembers} settings={settings} />;
    } else if (settings?.selectedView?.value === "carousel") {
      return <CarouselView team_members={teamMembers} settings={settings} />;
    } else if (settings?.selectedView?.value === "marquee" && isPro) {
      return <MarqueeView team_members={teamMembers} settings={settings} />;
    } else if (settings?.selectedView?.value === "table" && isPro) {
      return <TableView team_members={teamMembers} settings={settings} />;
    } else if (settings?.selectedView?.value === "confetti" && isPro) {
      return <ConfettiView team_members={teamMembers} settings={settings} />;
    } else {
      return <StaticView team_members={teamMembers} settings={settings} />;
    }
  };

  return (
      <>
        {devMode ? (
            <div className="relative">
              <div
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
              >
                {renderViewComponent()}

                <div
                    id="tsteam__copy-design"
                    style={{
                      opacity: isHovering ? '1' : '0',
                      visibility: isHovering ? 'visible' : 'hidden',
                    }}
                >
                  <button
                      className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg z-50"
                      onClick={handleCopySettings}
                  >
                    <span>Copy Design</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        ) : (
            renderViewComponent()
        )}
      </>
  );

  // return (
  //     <>
  //       <div className="relative">
  //         <div
  //             onMouseEnter={() => {
  //               const copyButton = document.getElementById('tsteam__copy-design');
  //               if (copyButton) {
  //                 copyButton.style.opacity = '1';
  //                 copyButton.style.visibility = 'visible';
  //               }
  //             }}
  //             onMouseLeave={() => {
  //               const copyButton = document.getElementById('tsteam__copy-design');
  //               if (copyButton) {
  //                 copyButton.style.opacity = '0';
  //                 copyButton.style.visibility = 'hidden';
  //               }
  //             }}
  //         >
  //           {settings?.selectedView?.value === "flex" ? (
  //               <FlexView
  //                   team_members={teamMembers}
  //                   settings={settings}
  //               />
  //           ) : settings?.selectedView?.value === "carousel" ? (
  //               <CarouselView
  //                   team_members={teamMembers}
  //                   settings={settings}
  //               />
  //           ) : settings?.selectedView?.value === "marquee" && isPro ? (
  //               <MarqueeView
  //                   team_members={teamMembers}
  //                   settings={settings}
  //               />
  //           ) : settings?.selectedView?.value === "table" && isPro ? (
  //               <TableView
  //                   team_members={teamMembers}
  //                   settings={settings}
  //               />
  //           ) : settings?.selectedView?.value === "confetti" && isPro ? (
  //               <ConfettiView
  //                   team_members={teamMembers}
  //                   settings={settings}
  //               />
  //           ) : (
  //               <StaticView
  //                   team_members={teamMembers}
  //                   settings={settings}
  //               />
  //           )}
  //
  //           {/* Side button that appears on hover */}
  //           {devMode && (
  //               <div id="tsteam__copy-design">
  //                 <button
  //                     className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg z-50"
  //                     onClick={handleCopySettings}
  //                 >
  //                   <span>Copy Design</span>
  //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
  //                   </svg>
  //                 </button>
  //               </div>
  //           )}
  //         </div>
  //       </div>
  //     </>
  // );
}

export default Frontend;