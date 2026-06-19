import React from "react";
import SocialIcons from "../Card/SocialIcons.jsx";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";
import "./style.css";

const AuraLive = ({
  settings,
  id,
  imageUrl,
  title,
  subtitle,
  description,
  socialIcons,
  details,
  animationConfig,
}) => {
  const renderContent = () => (
    <article className="tsteam-auralive-wrapper">
      <div className="tsteam-auralive-inner">
        <div className="tsteam-auralive-avatar-wrap">
          <img
            id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
            src={imageUrl}
            alt={title}
            className={`tsteam-member__image ${details ? "cursor-pointer" : ""}  `}
          />
        </div>
        {title && <TsMemberName>{title}</TsMemberName>}
        {subtitle && <TsMemberDesignation>{subtitle}</TsMemberDesignation>}
        <div className="tsteam-auralive-divider"></div>
        {description && (
          <TsMemberDescription>{description}</TsMemberDescription>
        )}
        <div className="tsteam-auralive-socials-wrapper">
          <SocialIcons socialIcons={socialIcons} settings={settings} />
        </div>
        {details && <div className="tsteam-auralive-details">{details}</div>}
      </div>
    </article>
  );

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

export default AuraLive;
