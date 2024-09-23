import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { SiMicrosoftstore } from "react-icons/si";
export default function Nav() {
  const [colorMode, setColorMode] = useState("light");

  function toggleColorMode() {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  }

  return (
    <nav className="flex justify-between mb-20">
      <div className="flex items-center">
        <h1 className="font-inter text-6xl mr-4">My Product Store</h1>
        <SiMicrosoftstore size={50} />
      </div>

      <div className="flex items-center gap-4">
        <CiSquarePlus className="cursor-pointer" size={35} />

        <div onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <MdLightMode className="cursor-pointer" size={35} />
          ) : (
            <MdDarkMode className="cursor-pointer" size={35} />
          )}
        </div>
      </div>
    </nav>
  );
}
