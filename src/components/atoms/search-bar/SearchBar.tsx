// icons
import { useState } from "react";
// icons
import { PiCommand, PiMagnifyingGlass, PiXBold } from "react-icons/pi";

type SearchBarProps = {
  extraClassName?: string;
  handleChange?: (arg: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const { extraClassName, handleChange } = props;

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleOnChange = (e) => {
    e.stopPropagation();
    setSearchQuery(e.target.value);
    handleChange && handleChange(e.target.value);
  };

  const handleReset = () => {
    setSearchQuery("");
    handleChange && handleChange("");
  };

  return (
    <div
      className={`relative rounded-md overflow-hidden flex  items-center dark:text-gray-400 ${extraClassName}`}
    >
      <PiMagnifyingGlass className="absolute left-2" fontSize={"1rem"} />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        className="pl-7  py-1 text-sm rounded-md w-full focus:outline-none"
        onChange={handleOnChange}
      />
      <span
        className="absolute right-2 flex items-center text-sm"
        onClick={handleReset}
      >
        {searchQuery ? (
          <PiXBold
            fontSize={"1rem"}
            className="hover:cursor-pointer hover:text-red-500"
          />
        ) : (
          <>
            <PiCommand fontSize={"1rem"} />/
          </>
        )}
      </span>
    </div>
  );
};

export default SearchBar;
