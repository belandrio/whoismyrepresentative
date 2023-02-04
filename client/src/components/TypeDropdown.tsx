import React, { memo, useContext } from "react";
import { Context } from "..";
import Dropdown from "./dropdown/Dropdown";

const TypeDropdown = () => {
  const { setTypeOfPerson } = useContext(Context);

  return (
    <Dropdown
      isSearchable={false}
      placeholder="Search by type of position:"
      options={[
        { value: "Reps", label: "Representative" },
        { value: "Sens", label: "Senator" },
      ]}
      onChange={(option) => setTypeOfPerson(option.value)}
    />
  );
};
export default memo(TypeDropdown);
