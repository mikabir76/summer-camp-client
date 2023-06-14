import React from 'react';
import {FaHome, FaCalendarDay, FaShoppingCart, FaBook, FaUsersCog, } from 'react-icons/fa'
import {MdPayment} from 'react-icons/md'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {GrMenu} from 'react-icons/gr'
import {AiFillShopping} from 'react-icons/ai'
import {ImSpoonKnife} from 'react-icons/im';
import {MdManageSearch} from 'react-icons/md'
import { NavLink, Outlet } from 'react-router-dom';



const Dashboard = () => {
  
  

  // TODO: admin is dynamicly Added
//   const isAdmin = true;
    return (
     
       <div className='max-w-7xl mx-auto'>
         <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">

          
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div> 
        <div className="drawer-side bg-[#01A79E]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-xl text-base-content">
            
          
            <li><NavLink to='/#' className={({ isActive}) =>isActive ? "text-white" : ""}> <FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to='/reservation' className={({ isActive}) =>isActive ? "text-white" : ""}> <FaCalendarDay></FaCalendarDay> Reservation</NavLink></li>
            <li><NavLink to='/history' className={({ isActive}) =>isActive ? "text-white" : ""}> <MdPayment></MdPayment> Payment History</NavLink></li>
            <li><NavLink to='/dashboard/myCart' className={({ isActive}) =>isActive ? "text-white" : ""}> <FaShoppingCart></FaShoppingCart> My Cart<span className="badge badge-secondary"> </span></NavLink></li>
            <li><NavLink to='/bookings' className={({ isActive}) =>isActive ? "text-white" : ""}> <BsFillJournalBookmarkFill></BsFillJournalBookmarkFill> My Bookings</NavLink></li>
             
           
            <div className="divider"></div>
            <li><NavLink to='/' className={({ isActive}) =>isActive ? "text-white" : ""}> <FaHome></FaHome> Home</NavLink></li>
            <li><NavLink to='/' className={({ isActive}) =>isActive ? "text-white" : ""}> <GrMenu></GrMenu> Menu</NavLink></li>
            <li><NavLink to='/' className={({ isActive}) =>isActive ? "text-white" : ""}> <AiFillShopping></AiFillShopping> Order</NavLink></li>
            <li><NavLink to='/' className={({ isActive}) =>isActive ? "text-white" : ""}>Contact</NavLink></li>
          </ul>
        
        </div>
      </div>
       </div>
    );
};

export default Dashboard;

/* 







  <> <li><NavLink to='/#' className={({ isActive}) =>isActive ? "text-white" : ""}> <FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to='/reservation' className={({ isActive}) =>isActive ? "text-white" : ""}> <ImSpoonKnife></ImSpoonKnife> Add Items </NavLink></li>
            <li><NavLink to='/history' className={({ isActive}) =>isActive ? "text-white" : ""}> <MdManageSearch></MdManageSearch> Manage Items</NavLink></li>
            <li><NavLink to='/history' className={({ isActive}) =>isActive ? "text-white" : ""}> <FaBook></FaBook> Manage Bookings </NavLink></li>
            <li><NavLink to='/dashboard/allUsers' className={({ isActive}) =>isActive ? "text-white" : ""}> <FaUsersCog></FaUsersCog> All users </NavLink></li></>
*/