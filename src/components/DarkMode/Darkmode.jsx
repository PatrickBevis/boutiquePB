import React from "react";
import { useState } from "react";



const Darkmode = () => {

const [isDark, setIsDark] = useState(false);

const handleChangeColor = (e) => {
  setIsDark()
};

  return (
    <>
      <button
        className={
          isDark
            ? "btn btn-light text-black border border-black"
            : "btn btn-black text-white border border-black"
        }
        onChange={handleChangeColor}
      >
        Light
      </button>
    </>
  );
};

export default Darkmode;
