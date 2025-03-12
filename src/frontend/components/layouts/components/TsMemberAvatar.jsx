import React from "react";

const TsMemberAvatar = ({ imgSrc = "", id, details }) => {
  return (
    <img
      src={imgSrc}
      alt="tsteam member avatar"
      id={id}
      className={`tsteam-member__image w-24 h-24 object-cover shadow-lg ${
        details ? "cursor-pointer" : ""
      }`}
    />
  );
};

export default TsMemberAvatar;
