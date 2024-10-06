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
  const layoutType = element.getAttribute('data-layout-type');

  createRoot(element).render(
    <StrictMode>
      <Frontend
        layout={layoutType || 'Overlay'}
        id={id}
      />
    </StrictMode>
  );
});

function Frontend({ layout, view, id, data }) {
  const [team_members, setTeamMembers] = useState(data?.team_members || null);

  useEffect(() => {
    if (!team_members && id) {
      fetchData(`tsteam/team_showcase/fetch/single`, (response) => {
        if (response && response.success) {
          setTeamMembers(response.data.meta_data.team_members);
        } else {
          console.error("Error fetching post data:", response);
        }
      }, { post_id: id });
    } else if (!id) {
      console.error("No post_id found");
    }
  },);

  return (
    <>
      {view === "carousel" ? (
        <CarouselView
          team_members={team_members}
          layout={layout}
        />
      ) : (
        <div 
        // style={{
        //   gridTemplateColumns: 'repeat(4, 1fr)',
        //   gap: '50px',             // Adjust gap between grid items (optional)
        // }}
        className="tsteam-container">
          {team_members && team_members.length > 0 ? (
            team_members.map((member, index) => (
              <StaticView
                key={index}
                layoutType={layout}
                imageUrl={member.team_member_image}
                title={member.title || "No Name"}
                subtitle={member.subtitle || "No Subtitle"}
                description={member.description || "No description available."}
                socialIcons={member.socialIcons || []}
              />
            ))
          ) : (
            <p>No team members found.</p>
          )}
        </div>
      )}
    </>
  );
}

export default Frontend;