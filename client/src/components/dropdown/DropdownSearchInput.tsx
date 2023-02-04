import React, { memo } from "react";

type DropdownSearchInputProps = {
  setSearchValue: (e: string) => void;
  searchValue: string;
};

const DropdownSearchInput: React.FC<DropdownSearchInputProps> = ({
  setSearchValue,
  searchValue,
}) => {
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-2 mt-1">
      <input
        className="w-full border-1 rounded-lg p-2"
        onChange={onSearch}
        value={searchValue}
      />
    </div>
  );
};

export default memo(DropdownSearchInput);
