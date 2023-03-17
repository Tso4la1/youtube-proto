import React from "react";
import { Icon } from "../../atoms/Icons";
import { Search } from "../../molecule/Search";
import { Text } from "../../atoms/Text";
import { Images } from "../../atoms/Images";

export const Navbar = () => {
  return (
    <>
      <div className="post-2  z-2">
      <div className="flex flex-align pt-1 pb-1 flex-Bt col-1 ">
        <div className=" flex flex-align post-1 w-1 mr-1 ">
          <Icon type="hamburger" />
          <Icon type="youtube" fill="red" width="30px"  />
          <Text text="logoName" />
          <Text super="super" />
        </div>

        <div className="flex flex-align flex-gap1 post-1 ml-1 mr-2 ">
          <Search />
          <Icon type="audio" width="12px" className=" ml-2 mb-1" />
        </div>

        <div className=" float flex post-1 w-3 ml-3 ">
          <Icon type="video" width="15px" className="m4" />
          <div className="m4 post-1 flex">
            <Icon type="bell" width="15px" />
            <div className="post-3 L Bt">
              <Text inter="single" />
            </div>
          </div>
          <Images name="image" width="30px" className="m4 Br" />
        </div>
      </div>
      </div>
    </>
  );
};
