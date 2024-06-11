/* eslint-disable react/prop-types */
import { Fragment } from "react";

export const Block = ({ value }) => {
  return (
    <Fragment>
      <ul className="flex font-sans flex-wrap gap-1">
        {value.map((item, index) => (
          <div
            key={item.id}
            className="flex border-2 border-gray-400 p-2 rounded-md cursor-pointer hover:text-black"
          >
            <li key={index} className="text-md font-medium w-36 text-center">
              {item.task}
            </li>
          </div>
        ))}
      </ul>
    </Fragment>
  );
};
