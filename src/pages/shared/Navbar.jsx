import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/job-logo.png';

const Navbar = () => {
  const {user, signOutUser}=useContext(AuthContext);

  const handleSignout=()=>{
    signOutUser()
    .then(()=>{
      console.log('successful signout')
    })
    .catch(error=>{
      console.log('Failed sign out. stay here dont leave me alone')
    })
  }
    const links = <>
            <li className='text-purple-950 font-semibold text-lg'><NavLink to='/'>Home</NavLink></li>
            <li className='text-purple-950 font-semibold text-lg'><NavLink to='/profile'>Profile</NavLink></li>
            <li className='text-purple-950 font-semibold text-lg'><NavLink to='/myApplications'>My Applications</NavLink></li>
            <li className='text-purple-950 font-semibold text-lg'><NavLink to='/berecruiter'>Be a Recruiter</NavLink></li>
            <li className='text-purple-950 font-semibold text-lg'><NavLink to='/addjobs'>Add Jobs</NavLink></li>
           
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl text-purple-950 font-semibold"><img className='w-12'src={logo} alt="" />
    <h3>Hunt For Hire</h3>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    {
      user? <>
      <button onClick={handleSignout} className='btn'>Sign Out</button>
      </> : <>
      <Link className='btn btn-primary bg-purple-700' to='/register'>Register</Link>
    <Link className='btn btn-primary bg-purple-700' to='/signin'>Sign In</Link>
    
      </>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;