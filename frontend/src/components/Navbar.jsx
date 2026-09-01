import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition"
        >
          AI Resume Analyzer
        </Link>

        <ul className="flex gap-8 font-medium items-center">

          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>

          <li>
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
          </li>

          <li>
            <Link
              to="/history"
              className="hover:text-blue-400 transition"
            >
              History
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="border border-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
            >
              Register
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;