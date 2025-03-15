import React, { useState, useEffect, useMemo } from 'react';
import Marquee from "react-fast-marquee";
import Layout from './layouts/Layout';
import { getCommonStyles } from "./helper/commonStyle.js";
import { getResponsiveStyles } from "./helper/responsiveStyles.js";
import {getProLayout} from "./helper/getProLayout.js";
import {getMarqueeStyles} from "./helper/marqueeStyles.js";

import Details from "./details/details.jsx";
import GenerateLayoutStyle from "./helper/generateLayoutStyle.js";

function MarqueeView({ team_members, settings, viewport, isEditor }) {
    const [ProLayoutComponent, setProLayoutComponent] = useState(null);
    const commonStyles = getCommonStyles(settings);
    const [responsiveStyles, setResponsiveStyles] = useState(
        getResponsiveStyles(settings, viewport, isEditor)
    );

    const [marqueeStyles, setMarqueeStyles] = useState(
        getMarqueeStyles(settings, viewport, isEditor)
    );

    useMemo(() => {
        setProLayoutComponent(() => getProLayout(settings));
    }, [settings?.selectedLayout?.type, settings?.selectedLayout?.value]);

    useEffect(() => {
        const updateResponsiveStyles = () => {
            setMarqueeStyles(getMarqueeStyles(settings, viewport, isEditor));
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
            className=""
            style={{
                ...commonStyles,
                ...responsiveStyles,
            }}
        >
            <GenerateLayoutStyle settings={settings} />
            <Marquee
                speed={marqueeStyles.speed}
                autoFill={marqueeStyles.infinite}
                pauseOnClick={marqueeStyles.pauseOnClick}
                pauseOnHover={marqueeStyles.pauseOnHover}
                direction={marqueeStyles.direction}
                delay={0}
                style={{
                    width: '100%'
                }}
            >
            {team_members && team_members.length > 0 ? (
                team_members.map((member, index) => (
                    <div key={index} style={{ marginRight: marqueeStyles.columnGap }}>
                        {ProLayoutComponent ? (
                            <ProLayoutComponent
                                settings={settings}
                                imageUrl={member.meta_data.image}
                                id={member.post_id}
                                title={member.title}
                                subtitle={member.meta_data.designation}
                                description={member.description}
                                socialIcons={member.socialIcons || []}
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
            </Marquee>
        </div>
    );
}

export default MarqueeView;