import React, { memo, useEffect, useState } from "react";
import DropdownOption from "./DropdownOption";
import DropdownInput from "./DropdownInput";
import { Option } from "../../types";
import DropdownSearchInput from "./DropdownSearchInput";

type DropdownProps = {
  placeholder: string;
  options: Option[];
  isSearchable: boolean;
  onChange: (option: Option) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  options,
  isSearchable,
  onChange,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Option>();
  const [searchValue, setSearchValue] = useState<string>("");
  
  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue?.toLowerCase()) >= 0
    );
  };

  useEffect(() => {
    setSearchValue("");
  }, [showMenu]);

  return (
    <div className="border-2 rounded-lg border-gray-400 relative">
      <DropdownInput
        placeholder={placeholder}
        selectedValue={selectedValue}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      {showMenu && (
        <div className="bg-white absolute border-2 rounded-md border-gray-400 mt-4 w-full">
          {isSearchable && (
            <DropdownSearchInput
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          )}

          {getOptions().map((option) => (
            <DropdownOption
              option={option}
              onChange={onChange}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              setShowMenu={setShowMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Dropdown);
