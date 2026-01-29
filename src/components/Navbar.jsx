import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/CiviTrack-logo.png";

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-semibold transition ${
        isActive
          ? "text-blue-600"
          : "text-slate-600 hover:text-slate-900"
      }`
    }
  >
    {label}
  </NavLink>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="app-container flex items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-base font-semibold text-slate-900"
        >
          <img src={logo} alt="CiviTrack Logo" className="h-9 w-9" />
          <span className="text-lg font-semibold tracking-tight">
            CiviTrack
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <NavItem to="/issues" label="View Issues" />
          <NavItem to="/dashboard" label="Authority" />
          <Link to="/report" className="btn-primary">
            Report Issue
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200/80 bg-white md:hidden">
          <div className="app-container space-y-4 py-4">
            <div className="grid gap-3 text-sm font-semibold">
              <NavItem to="/issues" label="View Issues" />
              <NavItem to="/dashboard" label="Authority" />
            </div>
            <Link to="/report" className="btn-primary w-full">
              Report Issue
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
