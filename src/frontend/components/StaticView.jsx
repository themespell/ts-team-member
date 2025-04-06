import React, { useState, useEffect, useMemo, Fragment } from "react";
import Layout from "./layouts/Layout";
import { getCommonStyles } from "./helper/commonStyle.js";
import { getResponsiveStyles } from "./helper/responsiveStyles.js";
import { getProLayout } from "./helper/getProLayout.js";
import {loadGoogleFont} from "./helper/loadGoogleFont.js";
import {getAnimationClasses} from "./helper/motionControl.js";

import Details from "./details/details.jsx";
import GenerateLayoutStyle from "./helper/generateLayoutStyle.js";

function StaticView({ team_members, settings, viewport, isEditor }) {
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
      className="tsteam-container"
      style={{
        ...commonStyles,
        ...responsiveStyles,
      }}
    >
      <GenerateLayoutStyle settings={settings} />
      {team_members && team_members.length > 0 ? (
        team_members.map((member, index) => (
          <Fragment key={index}>
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
        <p>No team members found.</p>
      )}
    </div>
  );
}

export default StaticView;
