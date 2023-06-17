import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Components/Hooks/useAuth';

const INstructorCamp = () => {

    const[ classes, setClasses] = useState([])
    const {user} = useAuth()
    console.log(user.email);
    useEffect(() =>{
        fetch(`https://summer-camp-school-server-wine.vercel.app/classes/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setClasses(data)
        })
    },[user])
    return (
        <div>
            <div>
            <h2 className="text-4xl text-center my-8">My Classes:{classes.length}</h2>
            <div className="overflow-x-auto">
                <table className="table ">
                    
                    <thead className="border border-cyan-500">
                        <tr className="border border-cyan-500">
                            <th>#</th>
                            
                            <th>ClassName</th>
                           
                            <th>Available Seats</th>
                            <th>Total Enroll Student</th>
                            
                            <th>Status</th>
                            <th className="text-center">Action</th>
                            

                        </tr>
                    </thead>
                    <tbody className="border border-cyan-500">
                        {
                            classes.map((item, index) => <tr className="border border-cyan-500"
                                key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                
                                <td>{item.className}</td>
                                
                                <td className="text-center">{item.availableSeats}</td>
                                <td className="text-center">{item.totalEnrolledStudent}</td>
                                
                                <td className="text-end">{item.status}</td>
                                <td className="text-center"><button className="btn btn-accent">Update & Feedback</button></td>
                                
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
        </div>
    );
};

export default INstructorCamp;