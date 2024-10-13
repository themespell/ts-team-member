import React, { useState, useEffect } from 'react';
import Layout from './layouts/Layout';

function StaticView({ team_members, settings }) {  
    return (
        <div 
        className='tsteam-container w-3/6'
        style={{
            width: `${settings?.containerSettings?.width?.default}px`,
            // // display: 'grid',
            gridTemplateColumns: `repeat(${settings.columnSettings?.column?.default}, 1fr)`,
            gap: `${settings.columnSettings?.gap?.default}px`,
        }}
        >
            {team_members && team_members.length > 0 ? (
              team_members.map((member, index) => (
                <div key={index}>
                  <Layout 
                  // settings={settings}
                  layoutType={settings.layout}
                  />
                  {/* <Layout
                    settings={settings}
                    layoutType={settings.layout}
                    imageUrl={member.team_member_image}
                    title={member.title}
                    subtitle={member.subtitle}
                    description={member.description}
                    socialIcons={member.socialIcons || []}
                  /> */}
                </div>
              ))
            ) : (
              <p>No team members found.</p>
            )}
        </div>
    );
}

export default StaticView;