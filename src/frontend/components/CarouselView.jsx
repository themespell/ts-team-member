import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import StaticView from './StaticView';

function CarouselView({ team_members, layout }) {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    
    return (
        <div className='tsteam-container w-3/6'>
            <Carousel slidesPerRow={2} slidesToScroll={1} draggable centerMode autoplay afterChange={onChange}>
            {team_members && team_members.length > 0 ? (
              team_members.map((member, index) => (
                <div key={index}>
                  <StaticView
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
    );
}

export default CarouselView;