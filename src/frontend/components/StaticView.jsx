import React, { useState, useEffect, useMemo } from 'react';
import Layout from './layouts/Layout';
import { getCommonStyles } from "./helper/commonStyle.js";
import { getResponsiveStyles } from "./helper/responsiveStyles.js";
import {getProLayout} from "./helper/getProLayout.js";

import Details from "./details/details.jsx";

function StaticView({ team_members, settings, viewport, isEditor }) {
    const [ProLayoutComponent, setProLayoutComponent] = useState(null);
    const commonStyles = getCommonStyles(settings );
    const [responsiveStyles, setResponsiveStyles] = useState(
        getResponsiveStyles(settings, viewport, isEditor)
    );

    useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
    }, [settings?.selectedLayout?.type, settings?.selectedLayout?.value]);

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
        {ProLayoutComponent ? (
                            <ProLayoutComponent
                                settings={settings}
                                imageUrl={member.meta_data.image}
                                id={member.post_id}
                                title={member.title}
                                subtitle={member.meta_data.designation}
                                description={member.meta_data.description}
                                socialIcons={member.meta_data.socialLinks || []}
                                details={<Details
                                    settings={settings}
                                    member={member}
                                />}
                            />
                        ) : (
                            <Layout
                                settings={settings}
                                layoutType={settings.selectedLayout.value}
                                id={member.post_id}
                                imageUrl={member.meta_data.image}
                                title={member.title}
                                subtitle={member.meta_data.designation}
                                description={member.meta_data.description}
                                socialIcons={member.meta_data.socialLinks || []}
                                details={<Details
                                    settings={settings}
                                    member={member}
                                />}
                            />
                        )}
                    </div>
                ))
            ) : (
                <p>No team members found.</p>
            )}
        </div>
    );
}

export default StaticView;