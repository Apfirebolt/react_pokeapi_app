import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-700">
      <nav className="container mx-auto flex justify-between items-center h-12">
        <div className="text-white text-lg font-bold">PokeAPI App</div>
        <ul className="flex h-full">
          <li className="h-full flex items-center">
            <Link
              to="/"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
            >
              Home
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/about"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
            >
              About
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/pokemon"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
            >
              Pokemon
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/move"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
            >
              Move
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/item"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
            >
              Item
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/location"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
            >
              Location
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/machine"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
            >
              Machine
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link
              to="/type"
              className="bg-orange-500 text-white px-3 py-2 transition duration-300 ease-in-out hover:bg-orange-700 h-full flex items-center"
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
