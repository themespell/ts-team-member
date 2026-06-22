import SocialIcons from "./SocialIcons.jsx";
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
    <div className="w-full flex justify-center text-left">
      <article className="group relative flex items-start gap-5 p-5 w-full max-w-2xl rounded-2xl tshorizontal-card-wrapper tsteam-horizontalcard-container text-left">
        <div className="shrink-0 h-28 w-28 rounded-xl overflow-hidden bg-gradient-to-br from-[#7547D7] to-[#A146DB]">
          <img
            id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
            src={imageUrl}
            alt={title}
            className={`h-full w-full object-cover ${
              details ? "cursor-pointer" : ""
            }`}
          />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <div className="flex justify-between items-start gap-3 flex-wrap text-left">
            <div className="min-w-0 text-left">
              {title && <TsMemberName className="text-left">{title}</TsMemberName>}
              {subtitle && <TsMemberDesignation className="text-left">{subtitle}</TsMemberDesignation>}
            </div>
            <div className="shrink-0">
              <SocialIcons socialIcons={socialIcons} settings={settings} />
            </div>
          </div>
          {description && (
            <div className="mt-2 text-left">
              <TsMemberDescription className="text-left">{description}</TsMemberDescription>
            </div>
          )}
          {details && <div className="mt-4 text-left">{details}</div>}
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

export default HorizontalCard;
