import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// icons
import { PiCaretDownBold, PiCaretRightBold } from "react-icons/pi";

const getActiveState = (
  currentPath: string,
  activePath: string,
  isSubNav: boolean,
  strictCheck = false
) => {
  if (strictCheck) {
    return currentPath === activePath;
  }

  let parentPath = "";
  if (isSubNav) {
    parentPath = activePath.split("/")[2];
  } else {
    parentPath = activePath.split("/")[1];
  }

  const childPath = currentPath.split("/")[1];

  if (parentPath === childPath) {
    return true;
  }
  return false;
};

type NavItemProps = {
  id: string;
  name: string;
  path: string;
  icon?: React.ReactNode;
  subRoutes: NavItemProps[];
};

const NavItem = (props: NavItemProps) => {
  const { id, icon, name, path, subRoutes } = props;
  const location = useLocation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(true);

  //   subRoutes toggle fn
  const handleToggleSubMenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  useEffect(() => {
    getActiveState(path, location.pathname, false, false)
      ? setIsSubmenuOpen(true)
      : setIsSubmenuOpen(false);
  }, []);

  return (
    <>
      {!subRoutes?.length ? (
        <Link
          key={id}
          to={path}
          className={`flex items-center justify-start gap-2 hover:cursor-pointer py-[0.15rem] hover:font-semibold  hover:bg-gray-200 hover:dark:text-gray-800 rounded-md p-2 pl-3 nav-item pl-5 ${
            getActiveState(path, location.pathname, false)
              ? " font-semibold nav-item bg-gray-200 dark:text-gray-800"
              : ""
          }`}
        >
          {/* <icon /> */}
          <span>{name}</span>
        </Link>
      ) : (
        <div className={`flex flex-col`}>
          <div
            className={` ${isSubmenuOpen ? "bg-inherit" : ""}`}
            onClick={handleToggleSubMenu}
          >
            <div
              className={`flex items-center justify-start gap-2 hover:cursor-pointer py-[0.15rem] hover:font-semibold  hover:bg-gray-200 hover:dark:text-gray-800 rounded-md p-2 pl-3 nav-item ${
                isSubmenuOpen ? " font-semibold " : ""
              }`}
            >
              {isSubmenuOpen ? (
                <PiCaretDownBold fontSize={"1rem"} className="text-gray-400" />
              ) : (
                <PiCaretRightBold fontSize={"1rem"} className="text-gray-400" />
              )}
              {icon && <icon />}
              <span>{name}</span>
            </div>
          </div>
          <div className={`${!isSubmenuOpen ? "hidden" : ""}`}>
            {subRoutes?.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`${path}${item.path}`}
                  className={`flex items-center justify-start gap-2 hover:cursor-pointer py-[0.15rem] hover:font-semibold  hover:bg-gray-200 hover:dark:text-gray-800 rounded-md p-2 pl-12 nav-item ${
                    getActiveState(item.path, location.pathname, true)
                      ? "font-semibold nav-item bg-gray-200 dark:text-gray-800"
                      : ""
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default NavItem;
