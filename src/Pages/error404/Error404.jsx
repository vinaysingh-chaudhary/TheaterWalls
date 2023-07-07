import React from "react";
import { BiMessageError } from "react-icons/bi";

const Error404 = () => {
  return (
    <div className="w-[100%] h-[93vh] bg-black flex justify-center items-center">
      <div className="flex justify-center items-center gap-3 pb-8">
        <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
          Error...
        </div>
        <div className="w-[100%] min-h-[100%] flex justify-center items-center text-white text-4xl">
          <BiMessageError />
        </div>
      </div>
    </div>
  );
};

export default Error404;
