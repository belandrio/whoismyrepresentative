import React, { memo } from "react";
import { Option } from "../../types";

type DropdownOptionProps = {
  option: Option;
  onChange: (newValue: Option) => void;
  selectedValue: Option | undefined;
  setSelectedValue: (newValue: Option) => void;
  setShowMenu: (showMenu: boolean) => void;
};

const DropdownOption: React.FC<DropdownOptionProps> = ({
  option,
  onChange,
  selectedValue,
  setSelectedValue,
  setShowMenu,
}) => {
  const { label, value } = option;

  const onItemClick = (option: Option) => {
    setSelectedValue(option);
    onChange(option);
    setShowMenu(false)
  };

  const isSelected = (option: Option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <div
      onClick={() => onItemClick(option)}
      key={value}
      className={`p-4 rounded-lg hover:bg-gray-200 ${
        isSelected(option) && "bg-gray-200"
      }`}
    >
      {label}
    </div>
  );
};
export default memo(DropdownOption);
