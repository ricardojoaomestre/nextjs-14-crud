/* eslint-disable @next/next/no-img-element */

import React from "react";

const Avatar = ({ user, size = "sm" }) => {
  if (!user) return null;

  const variants = {
    sm: "w-8",
    md: "w-10",
    lg: "w-12",
    xl: "w-16",
  };
  const fontVariants = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-xl",
    xl: "text-3xl",
  };

  return user.imageUrl ? (
    <div className="avatar">
      <div className={`${variants[size]} rounded`}>
        <img src={user.imageUrl} alt="user profile image" />
      </div>
    </div>
  ) : (
    <div className="avatar placeholder">
      <div
        className={`bg-neutral-focus text-neutral-content rounded ${variants[size]}`}
      >
        <span className={`${fontVariants[size]} uppercase`}>
          {user.email[0]}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
