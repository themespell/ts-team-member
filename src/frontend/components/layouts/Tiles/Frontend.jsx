import React from "react";
import SocialIcons from "./SocialIcons.jsx";
import { loadGoogleFont } from "../../helper/loadGoogleFont.js";
import { getAnimationClasses } from "../../helper/motionControl.js";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";
import GenerateTilesStyle from "./GenerateStyle.jsx";
const Tiles = ({
  settings,
  id,
  imageUrl,
  title,
  subtitle,
  description,
  socialIcons,
  details,
}) => {
  // Load fonts if specified
  if (settings?.typography?.name) {
    loadGoogleFont(settings.typography.name);
  }
  if (settings?.typography?.designation) {
    loadGoogleFont(settings.typography.designation);
  }
  if (settings?.typography?.description) {
    loadGoogleFont(settings.typography.description);
  }
  const animationConfig = getAnimationClasses(settings.hoverAnimation);

  const renderContent = () => (
    <>
      <GenerateTilesStyle settings={settings} />

      <div className="relative group transition-all rounded-lg w-full flex flex-col max-w-sm min-h-[440px] p-6 items-center justify-center gap-2 bg-white hover:bg-[#6F3ED7] tsteam-tiles-container">
        <img
          id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
          src={imageUrl}
          alt={title}
          className={` object-cover w-[216px] h-[216px] block rounded-full tsteam-member__image ${
            details ? "cursor-pointer" : ""
          }`}
        />
        {/* Overlay Content - Hidden by default, visible on hover */}
        {title && (
          <TsMemberName className="group-hover:text-white text-[22px] ">
            {title}
          </TsMemberName>
        )}
        {subtitle && (
          <TsMemberDesignation className="group-hover:text-white text-sm">
            {subtitle}
          </TsMemberDesignation>
        )}

        {details && (
          <div className="mt-2 flex items-center justify-center">{details}</div>
        )}
        <div className="flex gap-1 my-4 ">
          <SocialIcons socialIcons={socialIcons} settings={settings} />
        </div>
      </div>
    </>
  );

  // Handle different animation types
  if (!animationConfig) {
    return renderContent();
  }

  if (animationConfig.type === "single") {
    return <div className={animationConfig.class}>{renderContent()}</div>;
  }

  if (animationConfig.type === "wrapper") {
    return (
      <div className={animationConfig.parent}>
        <div className={animationConfig.wrapper}>{renderContent()}</div>
      </div>
    );
  }

  return renderContent();
};

export default Tiles;
