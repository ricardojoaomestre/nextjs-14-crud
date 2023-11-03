/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProfilePicture = ({ user }) => {
  if (!user) return null;
  return (
    <div className="rounded-full bg-slate-200">
      {!user.name && (
        <img className="w-28" src={user.imageUrl} alt="profile picture" />
      )}
      {user.name && (
        <div className="flex justify-center items-center w-28 h-28">
          <span className="text-5xl text-slate-800">{user.name[0]}</span>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
