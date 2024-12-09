import React, { useState, useEffect, useMemo } from 'react';
import Layout from './layouts/Layout';
import confettiModule from 'canvas-confetti';
import { getCommonStyles } from "./helper/commonStyle.js";
import { getResponsiveStyles } from "./helper/responsiveStyles.js";
import {getProLayout} from "./helper/getProLayout.js";

import Details from "./details/details.jsx";

function ConfettiView({ team_members, settings, viewport, isEditor }) {
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

    useEffect(() => {
        const end = Date.now() + 60 * 1000; // Run for 15 seconds
        const colors = ['#bb0000', '#ffffff']; // Red and White confetti colors

        function frame() {
            confettiModule({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confettiModule({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            // Repeat until 15 seconds have passed
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }

        frame(); // Start the confetti animation

    }, []); // Empty dependency array means it runs once on mount

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
                                id={member.post_id}
                                imageUrl={member.meta_data.image}
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
                                description={member.description}
                                socialIcons={member.socialIcons || []}
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

export default ConfettiView;