"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

interface ThemeSwitcherProps {
  value: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ value }) => {

  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      onClick={toggleTheme}
      className={`flex justify-center items-center text-black dark:text-gray-300 border border-black dark:border-[#545DA1] cursor-pointer rounded-xl ${value}`}
    >
      <Button className=" bg-transparent shadow-none text-black dark:text-white hover:bg-transparent">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
    // <div
    //   onClick={toggleTheme}
    //   className="flex justify-center items-center text-black dark:text-gray-300 bor2 cursor-pointer rounded-xl"
    // >
    //   {/* Theme Switcher */}
    //   {theme === "light" ? (
    //     <MoonStar className="w-8 h-8" />
    //   ) : (
    //     <SunMedium className="w-8 h-8" />
    //   )}
    // </div>
  );
};

export default ThemeSwitcher;
