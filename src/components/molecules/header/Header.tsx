// context
import { useThemeContext, useUserContext } from "../../../context";
import { THEME_CONTEXT_ACTIONS } from "../../../context/theme-context/action.types";
// components
import SearchBar from "../../atoms/search-bar/SearchBar";
// icons
import {
  PiBellDuotone,
  PiClockCounterClockwiseDuotone,
  PiRocketLaunch,
  PiSidebarDuotone,
  PiStarDuotone,
  PiSunDuotone,
  PiMoonDuotone,
} from "react-icons/pi";
// constants
import { THEMES } from "../../../utils/constants";
// assets
import user6 from "../../../assets/images/user6.png";
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {
  handleAlertSectionToggle: () => void;
  handleSidebarToggle: () => void;
};

const Header = (props: HeaderProps) => {
  const { handleAlertSectionToggle, handleSidebarToggle } = props;
  const location = useLocation();
  const path = location.pathname?.split("/");

  const { currentTheme, dispatch } = useThemeContext();

  const { businessName } = useUserContext();

  const handleThemeToggle = (theme: THEMES) => {
    dispatch({
      type: THEME_CONTEXT_ACTIONS.TOGGLE_THEME,
      payload: theme,
    });
  };
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center w-full px-4 pt-4">
      {/* profile */}
      <Link
        to={"/settings"}
        className="flex justify-start items-center text-center gap-2 text-nowrap pb-4 pr-4 md:w-[280px]"
      >
        <img src={user6} alt="profile" className="min-w-6 h-6" />
        <span className="font-semibold">{businessName}</span>
      </Link>
      {/* header */}
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center w-full px-4 pb-4 border-b dark:border-gray-500/40">
        {/* left */}
        <div className="flex gap-3 justify-start items-center">
          <PiRocketLaunch
            fontSize={"1.5rem"}
            className="hover:cursor-pointer"
          />
          <PiStarDuotone
            fontSize={"1.125rem"}
            className="hover:cursor-pointer"
          />
          <div>
            Pages /{" "}
            {path.length > 1 && (
              <span className="font-semibold">
                {path[1].charAt(0).toUpperCase() + path[1].slice(1)}
              </span>
            )}
          </div>
        </div>
        {/* right */}
        <div className="flex gap-3 justify-end items-center">
          <SearchBar />
          {currentTheme === "dark" ? (
            <PiSunDuotone
              fontSize={"1.125rem"}
              className="hover:cursor-pointer"
              onClick={() => handleThemeToggle(THEMES.LIGHT)}
            />
          ) : (
            <PiMoonDuotone
              fontSize={"1.125rem"}
              className="hover:cursor-pointer"
              onClick={() => handleThemeToggle(THEMES.DARK)}
            />
          )}

          <PiClockCounterClockwiseDuotone
            fontSize={"1.125rem"}
            className="hover:cursor-pointer"
          />
          <PiBellDuotone
            fontSize={"1.125rem"}
            className="hover:cursor-pointer"
            onClick={handleAlertSectionToggle}
          />
          <PiSidebarDuotone
            fontSize={"1.125rem"}
            className="hover:cursor-pointer"
            onClick={handleSidebarToggle}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
