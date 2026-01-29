import { Link, NavLink } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import logo from "../assets/CiviTrack-logo.png";

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-semibold ${
        isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
      }`
    }
  >
    {label}
  </NavLink>
);

const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <img src={logo} alt="CiviTrack Logo" className="h-20 w-250"/>
          {/* <span>CiviTrack</span> */}

        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavItem to="/report" label="Report Issue" />
          <NavItem to="/issues" label="Public Issues" />
          <NavItem to="/dashboard" label="Authority Dashboard" />
          <NavItem to="/verify" label="Citizen Verification" />
        </nav>
        <Link
          to="/report"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
        >
          Report Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
