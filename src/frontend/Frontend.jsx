import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/hover.css';
import './assets/style.css';
import StaticView from './components/StaticView.jsx';
import CarouselView from './components/CarouselView.jsx';
import { fetchData } from '../common/services/fetchData.js';

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
  const [teamMembers, setTeamMembers] = useState([]);
  const [settings, setSettings] = useState({});

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

  return (
    <>
      {settings.selectedView?.value === "carousel" ? (
        <CarouselView
          team_members={teamMembers}
          settings={settings}
        />
      ) : (
        <StaticView
          team_members={teamMembers}
          settings={settings}
        />
      )}
    </>
  );
}

export default Frontend;