import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const SwitchModeButton = ({switchTheme}) => {
  const [darkMode, setDarkMode] = useState(false);
  const swtichMode = () => {
    setDarkMode(!darkMode);
    switchTheme();
  };

  return (
    <>
      <button
        className="bg-[#262626] text-[#FFFFFF] dark:bg-[#FFFFFF] dark:text-[#262626] font-mono text-2xl p-[1rem] rounded-full"
        onClick={swtichMode}
      >
        {darkMode ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </>
  )
}

export default SwitchModeButton