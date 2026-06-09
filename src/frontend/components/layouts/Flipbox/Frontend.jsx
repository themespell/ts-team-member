import React from "react";
import SocialIcons from "../Card/SocialIcons.jsx";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";
import "./style.css";

const Flipbox = ({
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
    <article className="tsteam-flipbox-card">
      <div className="tsteam-flipbox-inner">
        {/* Front Side */}
        <div className="tsteam-flipbox-front">
          <div className="tsteam-flipbox-avatar-wrap">
            <img
              id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}-front`}
              src={imageUrl}
              alt={title}
              className="tsteam-flipbox-image"
            />
          </div>
          {title && <TsMemberName>{title}</TsMemberName>}
          {subtitle && <TsMemberDesignation>{subtitle}</TsMemberDesignation>}
          {description && (
            <TsMemberDescription>{description}</TsMemberDescription>
          )}
          {details && <div className="tsteam-flipbox-details">{details}</div>}
        </div>

        {/* Back Side */}
        <div className="tsteam-flipbox-back">
          <div className="tsteam-flipbox-back-top">
            {title && <TsMemberName>{title}</TsMemberName>}
            {subtitle && <TsMemberDesignation>{subtitle}</TsMemberDesignation>}
            {description && (
              <TsMemberDescription>{description}</TsMemberDescription>
            )}
          </div>
          <div className="tsteam-flipbox-back-bottom">
            <div className="tsteam-flipbox-socials-wrapper">
              <SocialIcons socialIcons={socialIcons} settings={settings} />
            </div>
          </div>
        </div>
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

export default Flipbox;
