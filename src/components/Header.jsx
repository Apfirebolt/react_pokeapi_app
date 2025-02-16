import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">PokeAPI App</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/pokemon" className="text-white hover:text-gray-200">
              Pokemon
            </Link>
          </li>
          <li>
            <Link to="/move" className="text-white hover:text-gray-200">
              Move
            </Link>
          </li>
          <li>
            <Link to="/item" className="text-white hover:text-gray-200">
              Item
            </Link>
          </li>
          <li>
            <Link to="/location" className="text-white hover:text-gray-200">
              Location
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
