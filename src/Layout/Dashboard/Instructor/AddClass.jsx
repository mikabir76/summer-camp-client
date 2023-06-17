import React from 'react';
import Swal from 'sweetalert2';

import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Components/Hooks/useAuth';
const img_hosting_token= import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
console.log(img_hosting_token)
const AddClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
const {user} = useAuth();
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.img[0])
// console.log(formData)

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {title, price, instructorName, enrolledStudents, email, availableSit, img} = data;
                const newClass = {title, price:parseFloat(price), instructorName, enrolledStudents, email: user?.email, availableSit, img: imgURL, status: 'pending'}
                console.log(newClass)
                axiosSecure.post('/classes', newClass)
                .then(data => {
                    // console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
              
            }
        })

    };
    
    return (
        <div className="w-full px-10">
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Class Name*</span>
                </label>
                <input type="text" placeholder="Class Name"
                    {...register("title", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
            </div>
            <div className="flex my-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Name*</span>
                    </label>
                    <input defaultValue={user?.displayName} readOnly type="text" placeholder="Class Name"
                    {...register("instructorName", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
            </div>
            <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Available sit*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                    {...register("availableSit", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
                </div>
            <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Email*</span>
                    </label>
                    <input defaultValue={user?.email}  type="text" placeholder="email"
                    {...register("email", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
                </div>
            <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Enrolled Student*</span>
                    </label>
                    <input type="text" placeholder="Enrolled Student"
                    {...register("enrolledStudents", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
                </div>
            <div className="form-control w-full my-4">
                <label className="label">
                    <span className="label-text">Item Image*</span>
                </label>
                <input type="file" {...register("img", { required: true })} className="file-input file-input-bordered w-full " />
            </div>
           <div className='flex text-center'>
           <button className='btn-style mx-auto w-2/4 hover:bg-black'>Add Class</button>
           </div>
        </form>
    </div>
    );
};

export default AddClass;