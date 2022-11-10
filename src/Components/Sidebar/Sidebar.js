import { NavLink } from "react-router-dom";
import MyStyle from "../../Components/Sidebar/Sidebar.module.css";
import { FaBars } from "react-icons/fa";
import { GiFarmer, GiArchiveRegister, GiBasket } from "react-icons/gi";
import { BiUserPlus } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
// import Logo from '../../assets/Imgs/logo.jpg';

const Sidebar = () => {
  const meueItems = [
    {
      path: "All_Areas",
      name: "Areas",
      icon: <GiArchiveRegister />,
      Whenhover: "Areas",
    },

    {
      path: "All_Farms",
      name: "Farms",
      icon: <GiFarmer />,
      Whenhover: "Farms",
    },

    {
      path: "All_PlantingBassins",
      name: "PlantingBassin",
      icon: <GiBasket />,
      Whenhover: "PlantingBassin",
    },
    // {
    //   path:"All_Crops",
    //   name:"Crops",
    //   icon:<GiPlantRoots/>,
    //   Whenhover:"Crops"

    // },

    {
      path: "All_Eng",
      name: "Engineers",
      icon: <BiUserPlus />,
      Whenhover: "Engineers",
    },
    {
      path: "Taskken",
      name: "Add_Eng_areas",
      icon: <MdAdd />,
      Whenhover: "Taskeen",
    },

    {
      path: "/",
      name: "Log Out",
      icon: <FiLogOut />,
      Whenhover: "Log out",
      actionn: "",
    },
  ];
  const Style = ({ isActive }) => {
    return isActive ? MyStyle.active : MyStyle.Link;
  };
  const [isOpen, setisOpen] = useState(true);
  const toggle = () => setisOpen(!isOpen);
  const logout = (index) => {
    if (index === 6) {
      console.log("logout");
      localStorage.clear();
      window.location.assign("/");
    }
  };
  return (
    <div className={MyStyle.Cotainer}>
      <div
        className={MyStyle.Sidebar}
        style={{ width: isOpen ? "150px" : "50px" }}
      >
        <div className={MyStyle.top_sectio}>
          <span
            className={MyStyle.Logo}
            style={{ display: isOpen ? "block" : "none" }}
          >
            Boss
          </span>

          <div
            className={MyStyle.Bars}
            style={{ marginLeft: isOpen ? "30px" : "0px" }}
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {meueItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            onClick={() => logout(index)}
            className={Style}
          >
            <div className={MyStyle.icon}>
              <abbr title={item.Whenhover}>{item.icon}</abbr>
            </div>
            <div
              className={MyStyle.Link_text}
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
