import React from "react";
import SocialIcons from "./SocialIcons.jsx";
import TsMemberName from "../__common/components/TsMemberName.jsx";
import "./style.css";

const CornerFrame = ({
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
  const getFirstLast = (name) => {
    if (!name) return { first: "", last: "" };
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return { first: parts[0], last: "" };
    return { first: parts[0], last: parts.slice(1).join(" ") };
  };

  const { first, last } = getFirstLast(title);

  const CardComponent = () => (
    <article className="tsteam-cornerframe-card  ">
      <span class="tsteam-cornerframe-card__corner tsteam-cornerframe-card__top-left"></span>
      <span class="tsteam-cornerframe-card__corner tsteam-cornerframe-card__top-right"></span>
      <span class="tsteam-cornerframe-card__corner tsteam-cornerframe-card__bottom-left"></span>
      <span class="tsteam-cornerframe-card__corner tsteam-cornerframe-card__bottom-right"></span>
      <img
        id={`${title?.replace(/\s+/g, "-").toLowerCase()}-${id}`}
        src={imageUrl}
        alt={title}
        className={`tsteam-member__image ${details ? "cursor-pointer" : ""} `}
      />
      <div className="tsteam-cornerframe-info">
        <TsMemberName>
          {first && <div className="tsteam-cornerframe-first">{first}</div>}
          {last && <div className="tsteam-cornerframe-last">{last}</div>}
        </TsMemberName>
        {subtitle && <div className="tsteam-cornerframe-role">{subtitle}</div>}
        <SocialIcons socialIcons={socialIcons} settings={settings} />
        {details && <div className="tsteam-cornerframe-details">{details}</div>}
      </div>
    </article>
  );

  if (!animationConfig) return <CardComponent />;

  if (animationConfig.type === "single") {
    return (
      <div className={animationConfig.class}>
        <CardComponent />
      </div>
    );
  }

  if (animationConfig.type === "wrapper") {
    return (
      <div className={animationConfig.parent}>
        <div className={animationConfig.wrapper}>
          <CardComponent />
        </div>
      </div>
    );
  }

  return <CardComponent />;
};

export default CornerFrame;
