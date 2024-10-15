import React, { useState, useEffect } from 'react';
import Layout from './layouts/Layout';

function StaticView({ team_members, settings }) {  
    return (
        <div 
        className='tsteam-container w-3/6'
        style={{
            width: `${settings?.containerSettings?.width?.default}px`,
            gridTemplateColumns: `repeat(${settings.columnSettings?.column?.default}, 1fr)`,
            gap: `${settings.columnSettings?.gap?.default}px`,
            marginTop: `${settings?.containerSettings?.margin_top}px`,
            marginRight: `${settings?.containerSettings?.margin_right}px`,
            marginBottom: `${settings?.containerSettings?.margin_bottom}px`,
            marginLeft: `${settings?.containerSettings?.margin_left}px`,
            paddingTop: `${settings?.containerSettings?.padding_top}px`,
            paddingRight: `${settings?.containerSettings?.padding_right}px`,
            paddingBottom: `${settings?.containerSettings?.padding_bottom}px`,
            paddingLeft: `${settings?.containerSettings?.padding_left}px`,
            borderTopLeftRadius: `${settings?.containerSettings?.borderRadius_top}px`,
            borderTopRightRadius: `${settings?.containerSettings?.borderRadius_right}px`,
            borderBottomLeftRadius: `${settings?.containerSettings?.borderRadius_bottom}px`,
            borderBottomRightRadius: `${settings?.containerSettings?.borderRadius_left}px`,
            backgroundColor: settings.containerSettings?.backgroundColor,
        }}
        >
            {team_members && team_members.length > 0 ? (
              team_members.map((member, index) => (
                <div key={index}>
                  <Layout
                    settings={settings}
                    layoutType={settings.layout}
                    imageUrl={member.team_member_image}
                    title={member.title}
                    subtitle={member.subtitle}
                    description={member.description}
                    socialIcons={member.socialIcons || []}
                  />
                </div>
              ))
            ) : (
              <p>No team members found.</p>
            )}
        </div>
    );
}

export default StaticView;