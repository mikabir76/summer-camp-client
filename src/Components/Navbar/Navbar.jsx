import React from 'react';
import Container from '../Container';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/logo.jpg'
import Theme from './Theme';

const Navbar = () => {
    const navList = <>
    <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/'>Home</NavLink>
    <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/instructors'>Instructors</NavLink>
    <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/login'>Classes</NavLink>
    <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/dashboard'>Dashboard</NavLink>
    </>
    return (
       <div className='container'>
        <div className="navbar border-x-2 fixed z-10 max-w-7xl bg-white shadow-lg  rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box text-xl w-52">
       {navList}
      </ul>
    </div>
    <Link to='/' className=" text-2xl font-bold"><img width='130' src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold gap-x-4">
     {navList}
    </ul>
  </div>
  <div className="navbar-end">
    <Theme></Theme>
    <Link className='ml-4' to='/login'><button className='btn-style'>Login</button></Link>
  </div>
</div>
       </div>
    );
};

export default Navbar;