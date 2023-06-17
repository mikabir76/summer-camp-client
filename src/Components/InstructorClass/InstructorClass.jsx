import React from 'react';
import useUser from '../Hooks/useUser';

const InstructorClass = () => {

    const [users] = useUser()
    // console.log(users)
    // console.log(users)
    const instructor = users.filter(instructorId => instructorId.role == 'instructor');

    // console.log(instructor)
    return (
      <div className='max-w-7xl mx-auto my-16'>
        <h1 className='text-4xl text-center mb-8'>All Popular Instructor</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 mb-8'>
        {
            instructor.map(person =>  <div key={person._id} className="card cursor-pointer border w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
            <div className="avatar">
            <div className="w-28 rounded-full">
              <img src={person?.photoURL} />
            </div>
          </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{person?.name}</h2>
              <p className='flex text-orange-600'></p>
              <p>{person?.email}</p>
          
            </div>
          </div>)
        }
       </div>
      </div>
    );
};

export default InstructorClass;