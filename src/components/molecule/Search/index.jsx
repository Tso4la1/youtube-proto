import React from "react";
import { Icon } from "../../atoms/Icons";

export const Search = () => {
  return (
    <div className="flex flex-center ">
      <input type="text" className="input-bar fw-2" placeholder="Search" />
      <button className=" search-icon w-4 flex flex-align flex-center mr-1 h-3 border-1"><Icon type="search" width="13px" /></button>
      
    </div>
  );
};
