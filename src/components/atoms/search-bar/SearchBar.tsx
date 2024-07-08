// icons
import { PiCommand, PiMagnifyingGlass } from "react-icons/pi";

const SearchBar = () => {
  return (
    <form className="relative rounded-md overflow-hidden flex  items-center dark:text-gray-400">
      <PiMagnifyingGlass className="absolute left-2" fontSize={"1rem"} />
      <input
        type="text"
        placeholder="Search"
        className="pl-7  py-1 text-sm rounded-md w-full"
      />
      <span className="absolute right-2 flex items-center text-sm">
        <PiCommand fontSize={"1rem"} />/
      </span>
    </form>
  );
};

export default SearchBar;
