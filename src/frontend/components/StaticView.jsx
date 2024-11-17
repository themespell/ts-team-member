import React, { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import {getCommonStyles} from "./helper/commonStyle.js";
import {getResponsiveStyles} from "./helper/responsiveStyles.js";

function StaticView({ team_members, settings, viewport, isEditor }) {
    const commonStyles = getCommonStyles(settings);
    const [responsiveStyles, setResponsiveStyles] = useState(
        getResponsiveStyles(settings, viewport, isEditor)
    );

    useEffect(() => {
        const updateResponsiveStyles = () => {
            setResponsiveStyles(getResponsiveStyles(settings, viewport, isEditor));
        };

        if (isEditor) {
            updateResponsiveStyles();
        } else {
            updateResponsiveStyles();
            window.addEventListener('resize', updateResponsiveStyles);

            return () => {
                window.removeEventListener('resize', updateResponsiveStyles);
            };
        }
    }, [settings, isEditor, viewport]);

    return (
        <div
            className="tsteam-container"
            style={{
                ...commonStyles,
                ...responsiveStyles,
            }}
        >
            {team_members && team_members.length > 0 ? (
                team_members.map((member, index) => (
                    <div key={index}>
                        <Layout
                            settings={settings}
                            layoutType={settings.layout}
                            imageUrl={member.meta_data.image}
                            title={member.title}
                            subtitle={member.meta_data.designation}
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