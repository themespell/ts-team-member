import React from "react";
import SocialIcons from "./SocialIcons.jsx";
import { getAnimationClasses } from "../../helper/motionControl.js";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";
import GenerateOverlayCardStyle from "./GenerateStyle.jsx";
const OverlayCard = ({
  settings,
  id,
  imageUrl,
  title,
  subtitle,
  description,
  socialIcons,
  details,
  animationConfig
}) => {

  const renderContent = () => (
   <>
   <GenerateOverlayCardStyle settings={settings} />
   
    <div className="relative group w-full aspect-square tsteam-tsoverlaycard">
      <img
        id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
        src={imageUrl}
        alt={title}
        className={`tsteam-member__image object-cover rounded-3xl ${
          details ? "cursor-pointer" : ""
        }`}
      />
      {/* Overlay Content - Hidden by default, visible on hover */}
      <div
        className={`tsteam-tsoverlaycard__overlay absolute inset-0 rounded-3xl flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`} >
        {title && <TsMemberName> {title} </TsMemberName>}

        {subtitle && <TsMemberDesignation> {subtitle} </TsMemberDesignation>}

        {description && (
          <TsMemberDescription> {description} </TsMemberDescription>
        )}

        {/* Social Icons with white color */}
        <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-150">
          <SocialIcons socialIcons={socialIcons} settings={settings} />
        </div>

        {details && (
          <>
            <button
              id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
              className="tsteam-member-button__details bg-white text-black p-3 mt-4 rounded-md border-none"
            >
              Details
            </button>
            <div className="mt-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-200">
              {details}
            </div>
          </>
        )}
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

export default OverlayCard;
