import React from 'react';
import google from '../../assets/google.png'
import useAuth from '../../Components/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
const {googleSignIn} = useAuth()
const navigate = useNavigate();
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then((result)=>{
            // console.log(result)
           const loggedUser = result.user;
           const saveUser = {name: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL, }
           fetch('https://summer-camp-school-server-wine.vercel.app/users',{
               method: "POST",
               headers:{
                   "Content-Type": "application/json"
               },
               body: JSON.stringify(saveUser)
           })
           .then(res => res.json())
           .then(() =>{
        
               navigate('/')
           })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className='mb-4'>
            <div onClick={handleGoogleSignIn} className='flex cursor-pointer justify-center items-center bg-white w-5/12 shadow-sm mx-auto p-2'>
                <img className='border-e-4' width={50} src={google} alt="" />
                <p className='text-xl font-semibold ml-2'>Login with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;