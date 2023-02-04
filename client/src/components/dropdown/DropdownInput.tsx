import React, { memo } from "react";
import { Option } from "../../types";
import ArrowIcon from "../../icons/arrowIcon";

type DropdownInputProps = {
  placeholder: string;
  selectedValue: Option | undefined;
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
};

const DropdownInput: React.FC<DropdownInputProps> = ({
  placeholder,
  selectedValue,
  showMenu,
  setShowMenu,
}) => {
  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  const getValue = () => {
    if (!selectedValue) {
      return placeholder;
    }
    return selectedValue.label;
  };

  return (
    <div className="grid grid-cols-2" onClick={handleInputClick}>
      <div className="p-4">
        {getValue()}
      </div>
      <div className="ml-auto m-4">
        <ArrowIcon />
      </div>
    </div>
  );
};

export default memo(DropdownInput);
