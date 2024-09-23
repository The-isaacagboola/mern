import { CiSquarePlus } from "react-icons/ci";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { SiMicrosoftstore } from "react-icons/si";
import { Link } from "react-router-dom";

type NavProps = {
  darkMode: boolean;
  toggleColorMode: () => void;
};
export default function Nav({ darkMode, toggleColorMode }: NavProps) {
  return (
    <nav className="flex justify-between mb-20 lg:min-w-[750px]">
      <Link to={"/"} className="flex items-center">
        <h1 className="mr-4 text-6xl font-inter ">My Product Store</h1>
        <SiMicrosoftstore size={50} />
      </Link>

      <div className="flex items-center gap-4">
        <Link to={"/create"}>
          <CiSquarePlus className="cursor-pointer" size={35} />
        </Link>

        <div onClick={toggleColorMode}>
          {!darkMode ? (
            <MdLightMode className="cursor-pointer" size={35} />
          ) : (
            <MdDarkMode className="cursor-pointer" size={35} />
          )}
        </div>
      </div>
    </nav>
  );
}
