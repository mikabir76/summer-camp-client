import React, { useState } from 'react';
import { FaLock } from "react-icons/fa";
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [state, setState] = useState(false);
    const toggle = ()=>{
        setState(prevState => !prevState)
    }
    return (
        
        <div className='container flex justify-center min-h-screen items-center'>
        <Helmet>
            <title>Summer School | Login</title>
        </Helmet>
            <div className='w-1/2 card shadow-lg bg-base-200'>
               
                <div className=' relative'>
                <img className='w-full rounded-lg' src="https://img.freepik.com/free-photo/green-texture_1160-721.jpg?size=626&ext=jpg&ga=GA1.1.1654759242.1680368383&semt=ais" alt="" />
                <div className="absolute h-full bg-gradient-to-r from-[#0bd6cc] to-[#151515] w-full transform -translate-y-1/2 rounded-xl top-[214px] ">
<div className='text-white space-y-4 mt-40 pl-16'>
    <h1 className='text-5xl font-bold'>Welcome to the website</h1>
  
 <div className=''>
 <Link className='text-3xl' to='/register'>Create a account</Link>
 </div>
    </div>
</div>
                </div>
                <div className='w-2/4 mx-auto py-8'>
                    <div className='flex justify-center items-center gap-x-3'>
                    <h1 className='text-center text-3xl font-semibold'>User Login </h1>
                   <h3 className='flex justify-center text-3xl'> <FaLock></FaLock></h3>
                    </div>
                <div className="form-control my-8 text-white">
         
          <input type="text" placeholder="email" className="input input-bordered text-white text-xl rounded-full bg-[#0bd6cc]" />
        </div>
        <div className="form-control">
         
          <input type={state? "text" : "password"} placeholder="password" className="input input-bordered text-white text-xl relative rounded-full bg-[#0bd6cc]" />
          <button onClick={toggle} className='text-2xl absolute right-[165px] mt-3'>
            {
                state? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>
            }
          </button>
        </div>
        <div className='flex justify-between px-4 pt-4'>
            <p>Remember</p>
            <p className='cursor-pointer'>Forget Password</p>
        </div>
                </div>
                <button className='btn-style w-36 mb-8 hover:bg-[#0fbdb4] mx-auto'>Login</button>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
