import SocialIcons from "./SocialIcons.jsx";
import { getAnimationClasses } from "../../helper/motionControl.js";

import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";
import './style.css';

const HorizontalCard = ({
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
    <div className="w-full">
      <div className="tshorizontal__border-color">
        <div
          className="flex items-start p-6 gap-6 tsteam-horizontalcard-container">
          <img
              id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
              src={imageUrl}
              alt={title}
              className={`tsteam-member__image w-24 h-24 object-cover shadow-lg ${
                  details ? "cursor-pointer" : ""
              }`}
          />
          {/* Content Section */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                {title && <TsMemberName>{title}</TsMemberName>}
                 {subtitle && (
                  <TsMemberDesignation> {subtitle} </TsMemberDesignation>
                )}
              </div>

              {/* Social Icons */}
              <div className="flex gap-1">
                <SocialIcons socialIcons={socialIcons} settings={settings} />
              </div>
            </div>

            {description && (
              <TsMemberDescription> {description} </TsMemberDescription>
            )}

            {details && <div className="mt-4">{details}</div>}
          </div>
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

export default HorizontalCard;
