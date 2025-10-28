import React, { useState, useEffect, useMemo, Fragment } from "react";
import Layout from "./layouts/Layout";
import { getCommonStyles } from "./helper/commonStyle.js";
import { getResponsiveStyles } from "./helper/responsiveStyles.js";
import { getProLayout } from "./helper/getProLayout.js";
import { loadGoogleFont } from "./helper/loadGoogleFont.js";
import { getAnimationClasses } from "./helper/motionControl.js";
import Details from "./details/details.jsx";
import GenerateLayoutStyle from "./helper/generateLayoutStyle.js";

function FilterableView({ team_members, settings, category, viewport, isEditor }) {
    const [ProLayoutComponent, setProLayoutComponent] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");
    const commonStyles = getCommonStyles(settings);
    const [responsiveStyles, setResponsiveStyles] = useState(
        getResponsiveStyles(settings, viewport, isEditor),
    );

    // Extract unique categories from team members
    const categories = useMemo(() => {
        const categoryMap = new Map();

        team_members?.forEach(member => {
            member.categories?.forEach(cat => {
                if (!categoryMap.has(cat.slug)) {
                    categoryMap.set(cat.slug, cat.name);
                }
            });
        });

        return Array.from(categoryMap, ([slug, name]) => ({ slug, name }));
    }, [team_members]);

    // Filter team members based on active category
    const filteredMembers = useMemo(() => {
        if (activeCategory === "all") {
            return team_members;
        }
        return team_members?.filter(member =>
            member.categories?.some(cat => cat.slug === activeCategory)
        );
    }, [team_members, activeCategory]);

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
        <div className="tsteam-filterable-wrapper">
            {/* Category Tabs */}
            {categories.length > 0 && (
                <div className="tsteam-category-tabs" style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '30px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <button
                        className={`tsteam-tab ${activeCategory === "all" ? "active" : ""}`}
                        onClick={() => setActiveCategory("all")}
                        style={{
                            padding: '10px 20px',
                            border: activeCategory === "all" ? '2px solid #007bff' : '1px solid #ddd',
                            background: activeCategory === "all" ? '#007bff' : '#fff',
                            color: activeCategory === "all" ? '#fff' : '#333',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: activeCategory === "all" ? 'bold' : 'normal',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.slug}
                            className={`tsteam-tab ${activeCategory === cat.slug ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat.slug)}
                            style={{
                                padding: '10px 20px',
                                border: activeCategory === cat.slug ? '2px solid #007bff' : '1px solid #ddd',
                                background: activeCategory === cat.slug ? '#007bff' : '#fff',
                                color: activeCategory === cat.slug ? '#fff' : '#333',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: activeCategory === cat.slug ? 'bold' : 'normal',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Team Members Container */}
            <div
                className="tsteam-container"
                style={{
                    ...commonStyles,
                    ...responsiveStyles,
                }}
            >
                <GenerateLayoutStyle settings={settings} />
                {filteredMembers && filteredMembers.length > 0 ? (
                    filteredMembers.map((member, index) => (
                        <Fragment key={member.post_id || index}>
                            {ProLayoutComponent ? (
                                <ProLayoutComponent
                                    settings={settings}
                                    imageUrl={member.meta_data.image}
                                    id={member.post_id}
                                    title={member.title}
                                    subtitle={member.meta_data.designation}
                                    description={member.meta_data.description}
                                    socialIcons={member.meta_data.socialLinks || []}
                                    details={<Details settings={settings} member={member} />}
                                    animationConfig={animationConfig}
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
                                    details={<Details settings={settings} member={member} />}
                                    animationConfig={animationConfig}
                                />
                            )}
                        </Fragment>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                        No team members found in this category.
                    </p>
                )}
            </div>
        </div>
    );
}

export default FilterableView;