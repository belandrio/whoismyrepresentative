import React, { memo, useContext } from "react";
import { Context } from "..";
import Dropdown from "./dropdown/Dropdown";
import { Option } from "../types";
import { statesData } from "../data/states";

const StateDropdown = () => {
  const { setState } = useContext(Context);

  return (
    <Dropdown
      isSearchable={true}
      placeholder="Search state:"
      options={statesData}
      onChange={(option) => setState(option.value)}
    />
  );
};
export default memo(StateDropdown);
