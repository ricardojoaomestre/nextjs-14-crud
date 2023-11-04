import React from "react";

const SideNav = ({ children }) => {
  return (
    <div className="h-full hidden sm:flex flex-col bg-slate-100 w-1/3 max-w-xs flex-shrink-0">
      {children}
    </div>
  );
};

export default SideNav;
