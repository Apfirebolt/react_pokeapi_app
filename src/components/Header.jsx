import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-700">
      <nav className="container mx-auto flex justify-between items-center h-12">
        <div className="text-white text-lg font-bold w-1/2">PokeAPI App</div>
        <ul className="flex h-full w-1/2">
          <li className="h-full flex items-center">
            <Link
              to="/"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              Home
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/about"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              About
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/pokemon"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              Pokemon
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/move"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              Move
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/item"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              Item
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/location"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              Location
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/machine"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              Machine
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/type"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center justify-center min-w-[80px]"
            >
              Type
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
