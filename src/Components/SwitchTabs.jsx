import React, { useState } from "react";

const SwitchTabs = ({ data, onTabFunction }) => {
  const [btnPosition, setBtnPosition] = useState("right");
  const setBtnPos = () => {
    if (btnPosition === "right") {
      setBtnPosition("left");
    } else {
      setBtnPosition("right");
    }
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-around items-center relative ">
      <span
        className={`w-[50%] min-h-[100%] bg-white absolute ${btnPosition}-0 top-0 rounded-md`}
      ></span>
      {data.map((tab, index) => {
        return (
          <button
            className="rounded-md w-[50%] min-h-[50%] text-lg z-50 p-2 text-pink-400 "
            key={index}
            onClick={() => {
              onTabFunction(tab, index), setBtnPos(btnPosition);
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default SwitchTabs;
