import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {AiFillDelete} from 'react-icons/ai'
const AllStudent = () => {
    const { refetch, data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        },


    })
    return (
        <div className='w-full h-full'>
            <Helmet>
                <title>Summer Camp | Manage Student</title>
            </Helmet>
            <div className='flex justify-evenly text-xl my-8 font-bold uppercase'>
                <h1>Total Class Select: {users?.length || 0}</h1>

            </div>
            <div className='flex justify-center text-xl items-center w-full'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-xl text-black'>
                            <tr>
                                <th className='border-b-2'>
                                    #
                                </th>
                                <th className='border-b-2'>Student</th>
                                <th className='border-b-2'>Name</th>
                                <th className='border-b-2'>Email</th>
                                <th className='border-b-2'>Role</th>
                                <th className='border-b-2'>Role</th>
                                <th className='border-b-2'>Action</th>
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
                                        {user?.availableSit}
                                    </td>
                                    
                                    <td className=''>
                                        <button className="text-xl"> Enroll </button>
                                    </td>
                                    <td className=''>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost text-2xl bg-red-600 text-white"> <AiFillDelete></AiFillDelete> </button>
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