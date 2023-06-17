import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Components/Hooks/useAuth';

const ManageClasses = () => {
    const { data: classes = [] , refetch} = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-camp-school-server-wine.vercel.app/classes')
        return res.json();
    })
    // const {user} = useAuth()
    const handleUpdate = (status, id,email) =>{
        console.log(status, id, email);
        fetch(`https://summer-camp-school-server-wine.vercel.app/classes/${id}`, {
            method: "PATCH",
            headers: {
              status: status,
              email: email,
            }
            
          })
         .then( res => res.json())
         .then( data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({

                    position: 'top-end',
                    icon: 'success',
                    title: `This class is ${status}  by admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
         })
        }
    return (
        <div className="ml-8 border-b-cyan-500">
           
              <div className="my-4">
                
                <h2 className="text-center text-5xl font-bold  ">-All Classes Added by Instructor-</h2>
                <div className="divider px-20 divide-emerald-400"></div>
            </div>
            <div className="overflow-x-auto">
            <table className="table">
                
                <thead className="border-b-cyan-500">
                <tr className="border-b-cyan-500">
                            
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>

                        </tr>
                </thead>
                <tbody className="border-b-cyan-500">
                {
                            classes.map((classItem) =><tr className="border-b-cyan-500"
                            key={classItem._id}
                            >
                                
                                <td><img className="w-10 h-10 rounded-xl border-4 mx-auto" src={classItem.classImage} alt="" /></td>
                                <td></td>
                                <td>{classItem.title}</td>
                                <td>{classItem.email}</td>
                                <td>{classItem.availableSit}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem.status}</td>
                                <td className="flex gap-2">
                                     <button onClick={() =>handleUpdate("approved", classItem._id,classItem.instructorEmail)}  className={`${classItem.status == "pending" ? "btn btn-info": "btn btn-disabled" }` }>Approve</button>
                                    <button onClick={() =>handleUpdate("Deny", classItem._id,classItem.instructorEmail)}  className={`${classItem.status == "pending" ? "btn btn-info": "btn btn-disabled" }` }>Deny</button> 

                                </td>
                            </tr>)
                        }

                    
                </tbody>
                
            </table>
        </div>  
        </div>
    );
};

export default ManageClasses;

