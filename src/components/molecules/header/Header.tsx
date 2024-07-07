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

const Header = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="flex gap-3 justify-start items-center">
        <PiRocketLaunch fontSize={"1.5rem"} className="hover:cursor-pointer" />
        <PiStarDuotone fontSize={"1.125rem"} className="hover:cursor-pointer" />
        <div>
          Pages / <span className="font-semibold">Overview</span>
        </div>
      </div>
      <div className="flex gap-3 justify-end items-center">
        <SearchBar />
        {true ? (
          <PiSunDuotone
            fontSize={"1.125rem"}
            className="hover:cursor-pointer"
          />
        ) : (
          <PiMoonDuotone
            fontSize={"1.125rem"}
            className="hover:cursor-pointer"
          />
        )}

        <PiClockCounterClockwiseDuotone
          fontSize={"1.125rem"}
          className="hover:cursor-pointer"
        />
        <PiBellDuotone fontSize={"1.125rem"} className="hover:cursor-pointer" />
        <PiSidebarDuotone
          fontSize={"1.125rem"}
          className="hover:cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Header;
