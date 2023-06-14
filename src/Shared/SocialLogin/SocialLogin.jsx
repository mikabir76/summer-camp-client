import React from 'react';
import google from '../../assets/google.png'
import useAuth from '../../Components/Hooks/useAuth';
const SocialLogin = () => {
const {googleSignIn} = useAuth()

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(()=>{

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