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
  const renderContent = () => (
    <div className="w-full flex justify-center">
      <article className="group relative w-full max-w-sm tsteam-card-layout">
        <div className="relative mx-auto -mb-14 w-44 h-44 rounded-2xl overflow-hidden ring-4 ring-white transition-transform duration-500 group-hover:-translate-y-2 bg-gradient-to-br from-[#7547D7] to-[#A146DB] z-10 tsteam-image-glow">
          <img
            id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
            src={imageUrl}
            alt={title}
            className={` tsteam-member__image w-full h-full object-cover ${
              details ? "cursor-pointer" : ""
            }`}
          />
        </div>
        <div className="rounded-2xl bg-white pt-20 pb-7 px-6 text-center border border-solid border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 tsteam-card-container">
          {title && (
            <TsMemberName>
              <span className="name-underline inline-block">{title}</span>
            </TsMemberName>
          )}

          {subtitle && <TsMemberDesignation>{subtitle}</TsMemberDesignation>}

          <hr className="tscard__separator" />

          {description && (
            <TsMemberDescription>{description}</TsMemberDescription>
          )}

          {details && (
            <div className="mt-2 flex items-center justify-center">
              {details}
            </div>
          )}

          <div className="mt-5">
            <SocialIcons socialIcons={socialIcons} settings={settings} />
          </div>
        </div>
      </article>
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
