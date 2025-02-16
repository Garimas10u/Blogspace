import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            BlogSpace
          </Link>

          
          <div className="hidden md:flex flex-grow mx-2 md:mx-10">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>

          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-900 dark:text-white hover:text-violet-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 dark:text-white hover:text-violet-600">
              About
            </Link>
            <Link to="/projects" className="text-gray-900 dark:text-white hover:text-violet-600">
              Projects
            </Link>

            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <FiSun className="w-6 h-6 text-yellow-400" /> : <FiMoon className="w-6 h-6 text-gray-800" />}
            </button>

            
            <Link to="/sign-in" className="px-4 py-2  bg-violet-950 text-white rounded-lg hover:bg-violet-900">
              Sign In
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              {menuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 shadow-md">
          <Link to="/" className="block py-2 text-gray-900 dark:text-white hover:text-violet-500">
            Home
          </Link>
          <Link to="/about" className="block py-2 text-gray-900 dark:text-white hover:text-violet-600">
            About
          </Link>
          <Link to="/projects" className="block py-2 text-gray-900 dark:text-white hover:text-violet-600">
            Projects
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-center py-2 bg-gray-200 dark:bg-gray-700 rounded-lg mt-2"
          >
            {darkMode ? <FiSun className="w-6 h-6 text-yellow-400" /> : <FiMoon className="w-6 h-6 text-gray-800" />}
          </button>


          <Link to="/sign-in" className="block text-center py-2 mt-2 bg-violet-950 text-white rounded-lg hover:bg-violet-700">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
