//@ts-nocheck
import React from "react";
import clsx from "clsx";

function Tab({
  item,
  selected,
  handleSelect,
}: {
  item: string[];
  selected: string;
  handleSelect;
}) {
  return (
    <nav className="flex flex-row">
      {item.map((menu, index) => {
        return (
          <div
            className={clsx(
              menu === selected
                ? "border-b-2 border-primary"
                : "border-b border-gray-200"
            )}
            key={index}
          >
            <button
              className={clsx(
                "block px-5 py-2 text-sm hover:text-primary focus:outline-none",
                menu === selected
                  ? "font-bold text-primary"
                  : "font-medium text-gray-500"
              )}
              onClick={() => handleSelect(menu)}
            >
              {menu}
            </button>
          </div>
        );
      })}
      <div className="flex-1 border-b border-gray-200"></div>
    </nav>
  );
}

export default Tab;
