import { useEffect, useRef } from 'react';
import './assets/hover.css';
import './assets/style.css';
import Layout from './components/Layout.jsx';
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

function Frontend({ layout, view, data }) {
  const team_members = data.team_members;

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      {view === "carousel" ? (
        <div className='tsteam-container w-3/6'>
            <Carousel slidesPerRow={2} slidesToScroll={1} draggable centerMode autoplay afterChange={onChange}>
            {team_members && team_members.length > 0 ? (
              team_members.map((member, index) => (
                <div key={index}>
                  <Layout
                    layoutType={layout}
                    imageUrl={member.team_member_image || "https://qodeinteractive.com/qi-addons-for-elementor/wp-content/uploads/2021/01/team-img-28.jpg"} // Fallback image if none provided
                    title={member.title || "No Name"}
                    subtitle={member.subtitle || "No Subtitle"}
                    description={member.description || "No description available."}
                    socialIcons={member.socialIcons || []}
                  />
                </div>
              ))
            ) : (
              <p>No team members found.</p>
            )}
          </Carousel>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Frontend;