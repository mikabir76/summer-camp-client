import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/logo.jpg'
import Theme from './Theme';
import useAuth from '../Hooks/useAuth';
import useCamp from '../Hooks/useCamp';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const {user, logOut} = useAuth()
  const [classes] = useCamp()
  const [dataUser, setDataUser] = useState({})
  // const [isAdmin] = useAdmin();
  // console.log(isAdmin)
  // const [isInstructor] = useInstructor();
  // console.log(isInstructor)
  useEffect(()=>{
    fetch('https://summer-camp-school-server-wine.vercel.app/users')
    .then(res => res.json())
    .then(data=>{
      // console.log(data)
      setDataUser(data)
    })
  },[])
  // console.log(dataUser)
  // const person = dataUser.map(admin => admin.role === 'admin')
  // console.log(person)
  // console.log(user)
  const handleLogOut = ()=>{
    logOut().then(()=>{}).catch(err => console.log(err.message))
  }
    const navList = <>
    <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/'>Home</NavLink>
    <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/instructor'>Instructors</NavLink>
    <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/classes'>Classes</NavLink>
   <NavLink className={({ isActive}) => isActive ? " text-[#01A79E]" : "" } to='/dashboard'>Dashboard</NavLink>
    </>
    return (
       <div className='container'>
        <div className="navbar  border-4 fixed z-10 max-w-7xl bg-white shadow-lg  rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box text-xl w-52">
       {navList}
      </ul>
    </div>
    <Link to='/' className=" text-2xl font-bold"><img className='h-20 w-20 hover:scale-110 border-[#a1d8d5] border-2 rounded-full'  src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold gap-x-4">
     {navList}
    </ul>
  </div>
  <div className="navbar-end">
{
  user&& <div className="tooltip tooltip-left" data-tip={user?.displayName}>
  <img className='rounded-full me-4 w-12 h-12 border-2 border-black hover:scale-125' src={user?.photoURL} />
</div>
}
    <Theme></Theme>
    {user?.email ?  <Link onClick={handleLogOut} className='ml-4' to='/login'><button className='btn-style'>Log Out</button></Link>:
    <Link className='ml-4' to='/login'><button className='btn-style'>Login</button></Link>}
  </div>
</div>
       </div>
    );
};

export default Navbar;