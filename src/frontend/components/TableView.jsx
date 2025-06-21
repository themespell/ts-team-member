import React, { useState, useEffect, useMemo } from "react";
import Layout from "./layouts/Layout";
import { getCommonStyles } from "./helper/commonStyle.js";
import { getResponsiveStyles } from "./helper/responsiveStyles.js";
import { getProLayout } from "./helper/getProLayout.js";
import {loadGoogleFont} from "./helper/loadGoogleFont.js";
import {getAnimationClasses} from "./helper/motionControl.js";

import Details from "./details/details.jsx";
import GenerateLayoutStyle from "./helper/generateLayoutStyle.js";

function TableView({ team_members, settings, viewport, isEditor }) {
    const [ProLayoutComponent, setProLayoutComponent] = useState(null);
    const commonStyles = getCommonStyles(settings);
    const [responsiveStyles, setResponsiveStyles] = useState(
        getResponsiveStyles(settings, viewport, isEditor),
    );

    // Load Google Fonts dynamically based on settings.typography
    useEffect(() => {
        if (settings?.typography) {
            const typographyKeys = ["name", "designation", "description"];

            typographyKeys.forEach((key) => {
                const fontFamily = settings.typography[key];
                if (fontFamily) {
                    loadGoogleFont(fontFamily);
                }
            });
        }
    }, [settings?.typography]);

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
            window.addEventListener("resize", updateResponsiveStyles);

            return () => {
                window.removeEventListener("resize", updateResponsiveStyles);
            };
        }
    }, [settings, isEditor, viewport]);

    const animationConfig = useMemo(() => {
        const hoverAnimation = settings?.hoverAnimation || "none";
        const config = getAnimationClasses(hoverAnimation);
        return config;
    }, [settings?.hoverAnimation]);

    return (
        <div
            className="tsteam-table-container"
            style={{
                ...commonStyles,
                ...responsiveStyles,
            }}
        >
            <GenerateLayoutStyle settings={settings} />
            {team_members && team_members.length > 0 ? (
                ProLayoutComponent ? (
                    <ProLayoutComponent
                        settings={settings}
                        team_members={team_members}
                        Details={Details}
                    />
                ) : (
                    <Layout
                        settings={settings}
                        layoutType={settings.selectedLayout.value}
                        team_members={team_members}
                        Details={Details}
                    />
                )
            ) : (
                <p>No team members found.</p>
            )}
        </div>
    );
}

export default TableView;