import React from 'react';
import { Helmet } from 'react-helmet-async';
import {AiFillDelete} from 'react-icons/ai'
import Swal from 'sweetalert2';
import useCamp from '../../../Components/Hooks/useCamp';


const MySelectClass = () => {
    const [classes, refetch] = useCamp()
    // console.log(classes)
    const handleDelete = myClass =>{
    //   console.log(item)
      Swal.fire({
        title: 'Are you delete your class?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#01A79E',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/myclass/${myClass._id}`,{
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data =>{
            refetch()
            // console.log(data)
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your Class has been deleted.',
                'success'
              )
            }
          })
        }
      })
    }
    // Accumulator
    // const total = cart.reduce((acc, item)=> item.price + acc , 0)
       const total = classes.reduce((acc, item)=> item.price + acc, 0)
    //    console.log(total)
    return (
        <div className='w-full h-full'>
             <Helmet>
      <title>Summer Camp | My Select Class</title>
  </Helmet>
           <div className='flex justify-evenly text-xl my-8 font-bold uppercase'>
            <h1>Total Class Select: {classes?.length || 0}</h1>
            <h1>Total Class Fee ${total}</h1>
           </div>
           <div className='flex justify-center text-xl items-center w-full'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-xl text-black'>
      <tr>
        <th className='border-e-2'>
         #
        </th>
        <th className='border-e-2'>Class IMG</th>
        <th className='border-e-2'>Title</th>
        <th className='border-e-2'>Name</th>
        <th className='border-e-2'>Available</th>
        <th className='border-e-2'>Price</th>
        <th className='border-e-2'>Payment</th>
        <th className='border-e-2'>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        classes.map((myClass, index) => <tr key={myClass._id}>
            <td className='border-2'>
             {index + 1}
            </td>
            <td className='border-2'>
                <div className="avatar">
                  <div className="mask mask-squircle w-16 h-16">
                    <img src={myClass?.img} alt="Order Image" />
                  </div>
                </div>
    
            </td>
            <td className='border-2'>
            {myClass?.title}
            </td>
            <td className='border-2' > {myClass?.instructorName}</td>
            <td className='border-2'>
            {myClass?.availableSit}
            </td>
            <td className='border-2' >
            {myClass?.price}
            </td>
            <td className='border-2'>
              <button className="text-xl"> Enroll </button>
            </td>
            <td className='border-2'>
              <button onClick={()=>handleDelete(myClass)} className="btn btn-ghost text-2xl bg-red-600 text-white"> <AiFillDelete></AiFillDelete> </button>
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

export default MySelectClass;