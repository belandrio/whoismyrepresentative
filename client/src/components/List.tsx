import React, { memo, useState } from "react";
import { Person } from "../types";

type ListProps = {
  list: Person[];
};

const List: React.FC<ListProps> = ({ list }) => {
  const [openCardName, setOpenCardName] = useState<string>("");
  return (
    <div className="mt-10">
      {list.map((person) => {
        const openCard = openCardName === person.name;
        const { party, office, phone, district, link, name } = person;
        return (
          <div
            key={phone}
            className="grid grid-cols-2 border-2 border-morf-color rounded-md p-4 my-2"
          >
            <div>
              {name}
              <h4 className="text-gray-400">{party}</h4>

              {openCard && (
                <div className="text-gray-400">
                  <h4> District: {district}</h4>
                  <h4>{phone}</h4>
                  <a
                    href={`https://www.google.com/maps/place/${office}`}
                    className="underline"
                    target={"_blank"}
                  >
                    {office}
                  </a>
                  <br />
                  <a href={link} className="underline" target={"_blank"}>
                    {link}
                  </a>
                </div>
              )}
            </div>

            {openCard ? (
              <button
                className="rounded-lg bg-white text-black font-bold text-sm ml-auto px-4"
                onClick={() => setOpenCardName("")}
              >
                Read less
              </button>
            ) : (
              <button
                className="rounded-lg bg-morf-color text-white font-bold text-sm ml-auto px-4"
                onClick={() => setOpenCardName(name)}
              >
                Read more →
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default memo(List);
