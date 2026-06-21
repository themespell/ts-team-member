import TsMemberName from "../__common/components/TsMemberName.jsx";
import TsMemberDesignation from "../__common/components/TsMemberDesignation.jsx";
import TsMemberDescription from "../__common/components/TsMemberDescription.jsx";
import './style.css';
const OverlayCard = ({
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
    <div className="w-full flex justify-center text-left">
      <article className="group relative overflow-hidden rounded-3xl aspect-[3/4] w-full max-w-sm bg-gradient-to-br from-[#7547D7] to-[#A146DB] shadow-md hover:shadow-lg transition-shadow duration-300 tsteam-tsoverlaycard">
        <img
          id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
          src={imageUrl}
          alt={title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            details ? "cursor-pointer" : ""
          }`}
        />
        {/* Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Card Content - Always visible at bottom, description expands on hover */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white text-left flex flex-col items-start z-10">
          {title && (
            <TsMemberName className="text-white text-left text-xl font-bold">
              {title}
            </TsMemberName>
          )}

          {subtitle && (
            <TsMemberDesignation className="text-white/80 text-left text-sm mt-0.5">
              {subtitle}
            </TsMemberDesignation>
          )}

          {description && (
            <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-90 overflow-hidden transition-all duration-500 ease-in-out mt-2 text-left">
              <TsMemberDescription className="text-white/75 text-xs">
                {description}
              </TsMemberDescription>
            </div>
          )}

          <div className="flex items-center justify-between gap-4 mt-4 w-full flex-wrap">
            {details && (
              <button
                id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
                className="tsteam-member-button__details inline-flex items-center gap-1 text-xs font-semibold opacity-90 hover:opacity-100 text-white bg-transparent border-none cursor-pointer p-0"
              >
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 ml-0.5 pointer-events-none"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            )}
          </div>
          {details}
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

export default OverlayCard;
