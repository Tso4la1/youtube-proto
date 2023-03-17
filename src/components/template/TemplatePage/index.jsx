import React, {useState} from "react";
import { SideBar } from "../../molecule/SideBar";
import { SubNav } from "../../molecule/SubNav";
import { Navbar } from "../../Organism/Navbar";
import { Icon } from "../../atoms/Icons";
import { Text } from '../../atoms/Text'

export const TemplatePage = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  const menuItem = [
    {
      key: "1",
      name: <Text side1="first" />,
      icon: <SideBar side="Home" />
    },

    // {
    //   key: "2",
    //   name: <Text side1="first" />,
    //   icon: <SideBar side="Home" />
    // },

    {
      key: "3",
      name: <Text side1="third" />,
      icon: <SideBar side="subscription" />
    },

    {
      key: "4",
      name: <Text side1="forth" />,
      icon: <SideBar side="library" />
    },

    {
      key: "5",
      name: <Text side1="fifth" />,
      icon: <SideBar side="clock" />
    },
    // {
    //   key: "6",
    //   name: <Text side1="first" />,
    //   icon: <SideBar side="Home" />
    // },

    {
      key: "7",
      name: <Text side1="seventh" />,
      icon: <SideBar side="time" />
    },

    {
      key: "8",
      name: <Text side1="eight" />,
      icon: <SideBar side="download" />
    },

    {
      key: "9",
      name: <Text side1="nine" />,
      icon: <SideBar side="like" />
    },

    {
      key: "10",
      name: <Text side1="ten" />,
      icon: <SideBar side="fire" />
    },

    // {
    //   key: "11",
    //   name: <Text side1="first" />,
    //   icon: <SideBar side="Home" />
    // },

    {
      key: "12",
      name: <Text side1="twelve" />,
      icon: <SideBar side="game" />
    },

    {
      key: "13",
      name:  <Text side1="thirteen" />,
      icon: <SideBar side="news" />
    },

    {
      key: "14",
      name: <Text side1="forteen" />,
      icon: <SideBar side="trophy" />
    },

    {
      key: "15",
      name: <Text side1="fifteen" />,
      icon: <SideBar side="setting" />
    },

    {
      key: "16",
      name: <Text side1="first" />,
      icon: <SideBar side="flag" />
    },

    {
      key: "17",
      name:  <Text side1="seventeen" />,
      icon: <SideBar side="help" />
    },

    {
      key: "18",
      name: <Text side1="eighteen" />,
      icon: <SideBar side="feed" />
    }


  ]

  const { gallery } = props;
  return (
    <>
      <div>
        <Navbar />
        <SubNav />
      </div>

      <div className="flex">
      <div className="container">
        <div className="sidebar" style={{width:isOpen ? "300px" : "50px"}}>
            <div className="top-section">
              <h1 className="Logo" style={{display:isOpen ? "block" : "none"}}> ok</h1>
              <div className="bars" style={{marginLeft:isOpen ? "50px" : "0px"}}> <Icon type="hamburger" onClick={toggle}/></div>
          </div>
        </div>
        {
          menuItem.map((item) =>
            <div key={item.id} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{ item.name }</div>
          </div>
          )
        }
      </div>

      {/* <div className="sidbar">
      
        
        
        
        
        
        <div></div>
       
        <div></div>
        <div></div>
        <div></div>
        
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
        </div> */}
      <div className="max1 flex fgrid rgap cgap">
        {gallery.map((gala) => (
          <div className="flex w-2 flex-dir " key={gala.id}>
           <div>{gala.thumbnail}</div> 
            <div className="flex info-p">
            <div>{gala.profile}</div>
            <div className="ml-2">
              {gala.title}
              <div>{gala.info}</div>
            </div>
          </div>
          </div>
        ))}
        </div>
        </div>
    </>
  );
};
