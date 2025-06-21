import "./style.css";
import SocialIcons from "./SocialIcons.jsx";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";

const Tiles = ({
  settings,
  id,
  imageUrl,
  title,
  subtitle,
  socialIcons,
  details,
  animationConfig,
}) => {
  const renderContent = () => (
    <div className=" group tsteam-tiles-container ">
      <img
        id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
        src={imageUrl}
        alt={title}
        className={` object-cover w-[216px] h-[216px] block !rounded-full tsteam-member__image mb-5 bg-white ${
          details ? "cursor-pointer" : ""
        }`}
      />
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
