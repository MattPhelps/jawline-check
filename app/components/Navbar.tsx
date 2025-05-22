
import { trackEvent } from "../libs/amplitude";

export default function Navbar() {

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Hamburger menu for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            
          </ul>
        </div>

        {/* Logo */}
        <a
          className="btn btn-ghost font-heading text-2xl flex items-center gap-2"
          href="/"
        >
          <img
            src="/favicon.ico"
            alt="Roast Generator Logo"
            className="w-6 h-6"
          />
          Jawline Check
        </a>

        {/* Desktop Menu with Spacing */}
        <ul className="menu menu-horizontal gap-4 text-lg px-1 hidden lg:flex ml-12">
            
          </ul>
      </div>

      {/* Navbar End */}
      {/* Optional: Uncomment this for a Login button */}
      {/**
      <div className="navbar-end pr-4 hidden lg:flex">
        <a className="btn text-lg ml-auto font-normal" href="/login">Login</a>
      </div>
      */}
    </div>
  );
}