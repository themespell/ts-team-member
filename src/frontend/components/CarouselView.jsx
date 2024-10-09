import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import Layout from './Layout';

function CarouselView({ team_members, settings }) {
    return (
        <div className=''
          style={{
            width: `${settings?.containerSettings?.width?.default}px`,
            // // display: 'grid',
            gridTemplateColumns: `repeat(${settings.columnSettings?.column?.default}, 1fr)`,
            gap: `${settings.columnSettings?.gap?.default}px`,
        }}
        >
            <Carousel 
            slidesPerRow={settings.carouselSettings.slidesToShow?.default} 
            slidesToScroll={settings.carouselSettings.slidesToScroll?.default} 
            draggable={settings.carouselSettings?.draggable === 'true' ? true : false}
            centerMode={settings.carouselSettings?.centerSlide === 'true' ? true : false}
            autoplay={settings.carouselSettings?.autoPlay === 'true' ? true : false}
            >
            {team_members && team_members.length > 0 ? (
              team_members.map((member, index) => (
                <div key={index}>
                  <Layout
                    settings={settings}
                    layoutType={settings.layout}
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