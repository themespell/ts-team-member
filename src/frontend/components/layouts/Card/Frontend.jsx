import React from "react";
import SocialIcons from "./SocialIcons.jsx";
import { loadGoogleFont } from "../../helper/loadGoogleFont.js";
import { getAnimationClasses } from "../../helper/motionControl.js";
import TsMemberName from "../components/TsMemberName";
import TsMemberDesignation from "../components/TsMemberDesignation.jsx";
import TsMemberDescription from "../components/TsMemberDescription.jsx";
import TsMemberAvatar from "../components/TsMemberAvatar.jsx";
const Card = ({
  settings,
  id,
  imageUrl,
  title,
  subtitle,
  description,
  socialIcons,
  details,
}) => {
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
    <div className="w-full flex flex-col items-center">
      <img
        id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
        src={imageUrl}
        alt={title}
        className={`tsteam-member__image w-32 h-32 rounded-xl -mb-12 z-10 relative shadow-2xl object-cover ${
          details ? "cursor-pointer" : ""
        }`}
      />
      <div
        className="w-full max-w-sm bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden"
        style={{
          backgroundColor: settings?.layout?.color?.background,
          borderStyle: "solid",
          borderWidth: settings?.layout?.borderWidth ?? "0px",
          borderRadius: settings?.layout?.borderRadius ?? "0px",
          borderColor: settings?.layout?.color?.border ?? "0px",
        }}
      >
        <div className="px-5 pt-16 pb-5 text-center flex flex-col items-center">
          {title && <TsMemberName> {title} </TsMemberName>}

          {subtitle && <TsMemberDesignation> {subtitle} </TsMemberDesignation>}

          <hr
            style={{
              backgroundColor: settings?.tscard?.color?.separator,
            }}
            className="h-1 w-16 bg-red-500 mt-2 mb-4 rounded-2xl"
          ></hr>

          {description && (
            <TsMemberDescription> {description} </TsMemberDescription>
          )}

          {details && (
            <div className="mt-2 flex items-center justify-center">
              {details}
            </div>
          )}

          <SocialIcons socialIcons={socialIcons} settings={settings} />
        </div>
      </div>
    </div>
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

export default Card;
