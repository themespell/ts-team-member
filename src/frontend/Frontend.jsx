import { useEffect, useRef } from 'react';
import './assets/hover.css';
import './assets/style.css';
import Layout from './components/Layout.jsx';

function Frontend({ layout, data }) {
  const team_members = data.team_members;
  return (
    <>
      <div className="tsteam-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-3/6">
        {team_members && team_members.length > 0 ? (
          team_members.map((member, index) => (
            <Layout
              key={index}
              layoutType={layout}
              imageUrl={member.team_member_image || "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/team-img-28.jpg"} // Fallback image if none provided
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
    </>
  );
}

export default Frontend;