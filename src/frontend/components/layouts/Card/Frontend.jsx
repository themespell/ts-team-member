import React from "react";
import SocialIcons from "./SocialIcons.jsx";
// import { getAnimationClasses } from "../../helper/motionControl.js";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";

import './style.css';

const Card = ({
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

  // const animationConfig = getAnimationClasses(settings.hoverAnimation);
  console.log("Passing animationConfig to Card:", animationConfig);

  const renderContent = () => (
   <>
    <div className="w-full flex flex-col items-center">
      <img
        id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
        src={imageUrl}
        alt={title}
        className={`tsteam-member__image w-32 max-h-[8rem] rounded-xl -mb-12 z-10 relative shadow-2xl object-cover ${
          details ? "cursor-pointer" : ""
        }`}
      />
      <div
        className="w-full max-w-sm bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden tsteam-card-container "
      >
        <div className="px-5 pt-16 pb-5 text-center flex flex-col items-center">
          {title && <TsMemberName> {title} </TsMemberName>}

          {subtitle && <TsMemberDesignation> {subtitle} </TsMemberDesignation>}

          <hr className="tscard__separator"></hr>


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

export default Card;
