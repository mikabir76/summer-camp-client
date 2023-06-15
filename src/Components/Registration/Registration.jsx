import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const Registration = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const {createUser, profileUpdate} = useContext(AuthContext)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        
        if(data.password !== data.confirm){
            setError('Password is invalid')
            return
        }
        else{
            setError(' ')
        }
        
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
           

            profileUpdate(data.name, data.photoURL)
            .then(()=>{
                const saveUser = {name: data.name, email: data.email, photoURL: data.photoURL }
                fetch('http://localhost:5000/users',{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire(
                            'Good job!',
                            'User Register Successfully!',
                            'success'
                          )
                    }
                })
            })
            .catch(err =>{
                console.log(err.message)
            })
           toast(`${data.name} Register Successfully!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false})
        //    navigate('/')
            reset()
        })
        .catch(err=>{
            console.log(err.message)
        })

    };
    return (
        <div className='container flex justify-center min-h-screen items-center'>
        <Helmet>
            <title>Summer School | Register</title>
        </Helmet>
            <div className='w-1/2 card shadow-lg bg-base-200'>
        
                <div className=' relative'>
                <img className='w-full rounded-lg' src="https://img.freepik.com/free-photo/green-texture_1160-721.jpg?size=626&ext=jpg&ga=GA1.1.1654759242.1680368383&semt=ais" alt="" />
                <div className="absolute h-full bg-gradient-to-r from-[#0bd6cc] to-[#151515] w-full transform -translate-y-1/2 rounded-xl top-[214px] ">
<div className='text-white space-y-4 mt-40 pl-16'>
    <h1 className='text-5xl font-bold'>Welcome to the website</h1>
  
 <div className=''>
 <Link className='text-3xl' to='/login'>Already Have an account</Link>
 </div>
    </div>
</div>
                </div>
               <form onSubmit={handleSubmit(onSubmit)}>
               <div className='w-full mx-auto pt-8'>
                    <div className='flex justify-center items-center gap-x-3'>
                    <h1 className='text-center text-3xl font-semibold'>User Registration</h1>
                    </div>
              <div className='flex justify-center  gap-x-5'>
              <div className="form-control mt-8 text-white">
        <h3 className='text-2xl text-gray-700 ml-4 font-semibold mb-2'>Name</h3>
         <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered text-white text-xl rounded-full bg-[#0bd6cc]" />
         {errors.name && <span className='text-error'>* Name Field is Required</span>}
       </div>
               <div className="form-control mt-8 text-white">
               <h3 className='text-2xl text-gray-700 ml-4 font-semibold mb-2'>Email</h3>
         <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered text-white text-xl rounded-full bg-[#0bd6cc]" />
         {errors.email && <span className='text-error'>* Email Field is Required</span>}
       </div>
              </div>
              <div className=' my-4'>
       <div className="form-control px-12">
       <h3 className='text-2xl text-gray-700 ml-4 font-semibold mb-2'>Photo URL</h3>
         <input {...register("photoURL", { required: true })} type='text' placeholder="Photo URL" className="input input-bordered text-white text-xl relative rounded-full  bg-[#0bd6cc]" />
         {errors.photoUrl && <span className='text-error'>*Photo URL Field is Required</span>}
       </div>
       </div>
       <div className='flex justify-center  gap-x-5'>
       <div className="form-control">
       <h3 className='text-2xl text-gray-700 ml-4 font-semibold mb-2'>Password</h3>
         
         <input {...register("password", { required: true, minLength: 6,  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/ })} type='password' placeholder="******" className="input input-bordered text-white text-xl relative rounded-full bg-[#0bd6cc]" />
         {errors.password?.type === 'pattern' && <p className='text-error'>* Password must be One uppercase</p>}
         {errors.password?.type === 'pattern' && <p className='text-error'>* Password must be one Special Character</p>}
         {errors.password && <span className='text-error'>* Password at least six character</span>}
       </div>
       <div className="form-control">
       <h3 className='text-2xl text-gray-700 ml-4 font-semibold mb-2'>Confirm Password</h3>
         <input {...register("confirm", { required: true })} type='password' placeholder="******" className="input input-bordered text-white text-xl relative rounded-full bg-[#0bd6cc]" />
         {errors.confirm && <span className='text-error'>*Confirm Password Field is Required</span>}
        {
            error && <p className='text-error'> {error}</p>
        }
       </div>
       </div>
      
       <div className='px-12 mt-8'>
        <ToastContainer/>
       <button className='btn-style w-full  mb-8 hover:bg-[#111d1d]'>Register</button>
       </div>
                </div>
               
            <SocialLogin></SocialLogin>
               </form>
            </div>
        </div>
    );
};

export default Registration;