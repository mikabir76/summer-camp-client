import React from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.jpg'

const Navbar = () => {
    const navList = <>
    <Link to='/'>Home</Link>
    <Link to='/'>Instructors</Link>
    <Link to='/'>Classes</Link>
    <Link to='/'>Dashboard</Link>
    </>
    return (
       <Container>
         <div className="navbar border-x-2 fixed z-10 max-w-7xl shadow-lg">
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
    <Link><button className='btn-style'>Login</button></Link>
  </div>
</div>
       </Container>
    );
};

export default Navbar;