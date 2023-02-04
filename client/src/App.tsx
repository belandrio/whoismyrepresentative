import React, { useEffect, useState } from "react";
import { Context } from ".";
import Error from "./components/Error";
import List from "./components/List";
import StateDropdown from "./components/StateDropdown";
import TypeDropdown from "./components/TypeDropdown";
import { Person } from "./types";

const App = () => {
  const [state, setState] = useState<string>("");
  const [typeOfPerson, setTypeOfPerson] = useState<string>("");
  const [list, setList] = useState<Person[]>([]);
  const [error, setError] = useState<boolean>(false);
  const stateContext = { state, setState, typeOfPerson, setTypeOfPerson };

  useEffect(() => {
    if (state && typeOfPerson) {
      const fetchData = async () => {
        const data = await fetch(`/getAll${typeOfPerson}ByState/${state}`);
        const json = await data.json();
        setList(json.results);
      };

      fetchData().catch((err) => {
        console.log(err);
        setError(true);
      });
    }
  }, [state, typeOfPerson]);

  return (
    <Context.Provider value={stateContext}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-morf-color mt-24">
          Who is my representative ?
        </h1>
        <h1 className="text-m font-bold text-black my-4">
          Select from the dropdowns below, the type of person you are searching
          ( senator or representative ) and the state!
        </h1>
        <div className="grid grid-cols-2 gap-10">
          <TypeDropdown />
          <StateDropdown />
        </div>
        {list && <List list={list} />}
        {error && <Error setError={setError} />}
      </div>
    </Context.Provider>
  );
};

export default App;
