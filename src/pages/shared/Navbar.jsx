import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/job-logo.png';
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user?.email) {
        try {
          const res = await fetch(`http://localhost:3000/users?email=${user.email}`);
          const data = await res.json();
          setUserRole(data[0]?.role || 'user');
        } catch (error) {
          console.error('Failed to fetch user role', error);
        }
      }
    };
    fetchUserRole();
  }, [user]);

  const handleSignout = () => {
    signOutUser()
      .then(() => console.log('Successful signout'))
      .catch(() => console.log('Failed sign out. Stay here, don’t leave me alone'));
  };

  const links = (
    <>
      <li className="text-purple-950 font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      
      <li className="text-purple-950 font-semibold text-lg">
        <NavLink to="/myApplications">My Applications</NavLink>
      </li>
      
      {user && userRole === 'recruiter' && (
        <li className="text-purple-950 font-semibold text-lg">
          <NavLink to="/addjobs">Add Jobs</NavLink>
        </li>
      )}
      {user && userRole !== 'recruiter' && (
        <li className="text-purple-950 font-semibold text-lg">
          <NavLink to="/berecruiter">Be a Recruiter</NavLink>
        </li>
      )}
      <li className="text-purple-950 font-semibold text-lg">
        <NavLink to="/jobmatcher">Test Your Skill</NavLink>
      </li>
      <li className="text-purple-950 font-semibold text-lg">
        <ScrollLink to="about">About</ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
            {!user ? (
              <>
                <li className="mt-2">
                  <Link className="btn btn-sm bg-purple-700 text-white w-full" to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="btn btn-sm bg-purple-700 text-white w-full" to="/signin">
                    Sign In
                  </Link>
                </li>
              </>
            ) : (
              <li className="mt-2">
                <button onClick={handleSignout} className="btn btn-sm w-full">
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-2">
          <img className="w-10 sm:w-12" src={logo} alt="Job logo" />
<h3 className="text-xl sm:text-4xl text-purple-950 font-semibold whitespace-nowrap">
  Hunt For Hire
</h3>        </Link>
      </div>

      {/* Center menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right buttons for large screens */}
      <div className="navbar-end gap-2 hidden lg:flex">
        {user ? (
          <button onClick={handleSignout} className="btn">
            Sign Out
          </button>
        ) : (
          <>
            <Link className="btn btn-primary bg-purple-700" to="/register">
              Register
            </Link>
            <Link className="btn btn-primary bg-purple-700" to="/signin">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
