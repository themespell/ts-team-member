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

const showcaseElements = document.querySelectorAll('.tsteam-showcase');

showcaseElements.forEach(element => {
  const id = element.getAttribute('data-id');

  createRoot(element).render(
    <StrictMode>
      <Frontend
        id={id}
      />
    </StrictMode>
  );
});

function Frontend({ id }) {
  const isPro = tsteam_settings.is_pro
  const [teamMembers, setTeamMembers] = useState([]);
  const [settings, setSettings] = useState({});
  const devMode = Boolean(tsteam_settings.devmode);

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

  return (
      <>
        <div
            className={`${devMode ? 'group border-[1px] border-transparent hover:border-purple-500 transition-all duration-300' : ''}`}
        >
          {settings?.selectedView?.value === "flex" ? (
              <FlexView
                  team_members={teamMembers}
                  settings={settings}
              />
          ) : settings?.selectedView?.value === "carousel" ? (
              <CarouselView
                  team_members={teamMembers}
                  settings={settings}
              />
          ) : settings?.selectedView?.value === "marquee" && isPro ? (
              <MarqueeView
                  team_members={teamMembers}
                  settings={settings}
              />
          ) : settings?.selectedView?.value === "table" && isPro ? (
              <TableView
                  team_members={teamMembers}
                  settings={settings}
              />
          ) : settings?.selectedView?.value === "confetti" && isPro ? (
              <ConfettiView
                  team_members={teamMembers}
                  settings={settings}
              />
          ) : (

               <StaticView
                  team_members={teamMembers}
                  settings={settings}
              />
          )}

          {devMode && (
              <div className="hidden group-hover:flex justify-center items-center mt-4">
                <button className="tsteam__frontend-button" onClick={handleCopySettings}>Copy Design</button>
              </div>
          )}
        </div>
      </>
  );
}

export default Frontend;