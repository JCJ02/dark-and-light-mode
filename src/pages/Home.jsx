import React, { useState } from 'react';
import SwitchModeButton from '../components/SwitchModeButton';

const Home = ({switchMode}) => {
    const [theme, setTheme] = useState(false);
    const setMode = () => {
        setTheme(!theme);
        switchMode();
    };
  return (
    <div
        className="bg-[#FFFFFF] dark:bg-[#262626] flex flex-col justify-center items-center gap-[1rem] md:gap-[2rem] h-screen w-full"
    >
        <label
            className="font-mono font-bold text-3xl md:text-5xl lg:text-7xl text-[#262626] dark:text-[#FFFFFF]"
        >
            {theme ? "Dark Mode" : "Light Mode"}
        </label>
        <SwitchModeButton switchTheme={setMode}/>
    </div>
  )
}

export default Home