import { useState } from "react";
// icons
import { PiDotOutlineFill, PiFileDoc, PiHeadset, PiLink } from "react-icons/pi";
// constants, helper functions
import { NAVIGATION_ROUTES } from "../../../utils/constants";
// assets
import Logo from "../../../assets/svgs/logo.svg";
// styles
import "./Sidebar.css";
import NavItem from "../../atoms/nav-item/NavItem";

const Sidebar = () => {
  const [showRecent, setShowRecent] = useState<boolean>(false);

  const handleShowRecentToggle = () => setShowRecent(!showRecent);

  const LINKS = [
    {
      name: "Documentation",
      url: "/",
      icon: <PiFileDoc fontSize={"1.25rem"} />,
    },
    {
      name: "Help Center",
      url: "/",
      icon: <PiHeadset fontSize={"1.25rem"} />,
    },
  ];

  return (
    <nav className="flex flex-col gap-4 w-full min-w-[220px] lg:max-w-[15vw] p-5 ">
      {/* favourites & recent */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3
            onClick={handleShowRecentToggle}
            className={`hover:cursor-pointer hover:text-black dark:hover:text-white ${
              showRecent ? "text-gray-400" : "text-black dark:text-white"
            }`}
          >
            Favourites
          </h3>
          <h3
            onClick={handleShowRecentToggle}
            className={`hover:cursor-pointer hover:text-black dark:hover:text-white ${
              showRecent ? "text-black dark:text-white" : "text-gray-400"
            }`}
          >
            Recent
          </h3>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center justify-start gap-1 hover:cursor-pointer py-[0.15rem] hover:text-black  hover:bg-gray-200 rounded-md">
              <PiDotOutlineFill
                className="text-gray-400"
                fontSize={"1.25rem"}
              />
              <span>Get Started</span>
            </li>
            <li className="flex items-center justify-start gap-1 hover:cursor-pointer py-[0.15rem] hover:text-black  hover:bg-gray-200 rounded-md">
              <PiDotOutlineFill
                className="text-gray-400"
                fontSize={"1.25rem"}
              />
              <span>Transactions</span>
            </li>
          </ul>
        </div>
      </div>
      {/* pages */}
      <div>
        <h3 className="text-gray-400 mb-2">Pages</h3>
        <div className="flex flex-col gap-1">
          {NAVIGATION_ROUTES.map((navItem) => (
            <NavItem key={navItem.id} {...navItem} />
          ))}
        </div>
      </div>
      {/* docs & support */}
      <div>
        <h3 className="pl-4 text-gray-400 mb-2">Links</h3>
        <ul className="flex flex-col gap-1">
          {LINKS.map((link, index) => (
            <li
              key={`link-${index}`}
              className="flex items-center justify-start gap-1 hover:cursor-pointer py-[0.15rem] hover:text-black  hover:bg-gray-200 rounded-md  pl-2"
            >
              <PiLink fontSize={"1.25rem"} className="text-gray-400" />
              {link.icon}
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* logo */}
      <div className="my-auto">
        <img src={Logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Sidebar;
