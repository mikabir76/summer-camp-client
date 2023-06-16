import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {AiFillDelete} from 'react-icons/ai'
import useAuth from '../../../Components/Hooks/useAuth';
import { FaUserCheck } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Components/Hooks/useAxiosSecure';
const AllStudent = () => {
    const {user} = useAuth()
    
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users')
            console.log(res.data)
            return res.data
        },


    });
    const handleDelete = user =>{
        //   console.log(item)
          Swal.fire({
            title: 'Are you delete User?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#01A79E',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/users/${user._id}`,{
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data =>{
                refetch()
                // console.log(data)
                if(data.deletedCount > 0){
                  Swal.fire(
                    'Deleted!',
                    'User has been deleted.',
                    'success'
                  )
                }
              })
            }
          })
        }
    const handleMakeAdmin = (user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is a Admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = (user)=>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is a Instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='w-full h-full'>
            <Helmet>
                <title>Summer Camp | Manage Student</title>
            </Helmet>
            <div className='flex justify-evenly text-xl my-8 font-bold uppercase'>
                <h1>Total Student: {users?.length || 0}</h1>

            </div>
            <div className='flex justify-center text-xl items-center w-full'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-xl text-black'>
                            <tr>
                                <th className='border-b-2 text-center px-2'>
                                    #
                                </th>
                                <th className='border-b-2 text-center px-2'>Student</th>
                                <th className='border-b-2 text-center px-2'>Name</th>
                                <th className='border-b-2 text-center px-2'>Email</th>
                                <th className='border-b-2 text-center px-2'>Role</th>
                                <th className='border-b-2 text-center px-2'>Role</th>
                                <th className='border-b-2 text-center px-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td className=''>
                                        {index + 1}
                                    </td>
                                    <td className=''>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={user?.photoURL} alt="Order Image" />
                                            </div>
                                        </div>

                                    </td>
                                    <td className=''>
                                        {user?.name}
                                    </td>
                                    <td className='' > {user?.email}</td>
                                    <td className=''>
                                       {user.role === 'admin' ? <button className='bg-green-500 btn btn-sm'>Admin</button> : <div className="tooltip tooltip-top" data-tip="Admin">
                                       <button  onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost text-2xl bg-gray-400 text-white"><FaUserCheck></FaUserCheck></button>
                                        </div>}
                                    </td>
                                    
                                    <td className=''>
                                    {user.role === 'instructor' ? <button className='bg-blue-500 btn btn-sm'>Instructor</button> : <div className="tooltip tooltip-top" data-tip="Instructor">
                                       <button  onClick={()=>handleMakeInstructor(user)} className="btn btn-ghost text-xl bg-gray-400 text-white"><ImPower></ImPower></button>
                                        </div>}
                                    </td>
                                    
                                    <td className=''>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost text-2xl bg-red-500 text-white"> <AiFillDelete></AiFillDelete> </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllStudent;

// 