import SocialIcons from "./SocialIcons.jsx";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";
import "./style.css";

const Spotlight = ({
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
    <>
      <div className="w-full tsteam-spotlight__item">
        <div className="tsteam-spotlight">
          <div className="tsteam-spotlight__media">
            <img
              id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
              src={imageUrl}
              alt={title}
              className="tsteam-member__image"
            />
            {socialIcons ? (
              <div className="tsteam-spotlight__overlay">
                <SocialIcons socialIcons={socialIcons} settings={settings} />
              </div>
            ) : null}
          </div>

          <div className="tsteam-spotlight__body">
            {title ? (
              <TsMemberName className="tsteam-spotlight__name">
                {title}
              </TsMemberName>
            ) : null}

            {subtitle ? (
              <TsMemberDesignation className="tsteam-spotlight__designation">
                {subtitle}
              </TsMemberDesignation>
            ) : null}

            {description ? (
              <TsMemberDescription className="tsteam-spotlight__description">
                {description}
              </TsMemberDescription>
            ) : null}

            {details && (
              <div className="tsteam-spotlight__details">{details}</div>
            )}
          </div>
        </div>
      </div>
    </>
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

export default Spotlight;
