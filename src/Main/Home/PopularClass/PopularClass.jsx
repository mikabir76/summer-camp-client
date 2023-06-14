import React from 'react';
import useClass from '../../../Components/Hooks/useClass';
import {TiTick} from 'react-icons/ti'
import {FaDollarSign} from 'react-icons/fa'
const PopularClass = () => {

    const [popularClass] = useClass();
    console.log(popularClass)
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <div>
                <h1 className='text-4xl font-semibold text-center'>Popular Classes of our website</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-x-4 gap-y-8'>
                {
                    popularClass.map(classes => <div key={classes.id}>

                        <div className="card w-[400px] bg-base-100 border-x-2 border-[#01A79E] shadow-xl">
                            <figure className="">
                                <img  src={classes.img} alt="Shoes" className="rounded-t-xl h-64 w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-3xl font-semibold text-center">{classes.title}</h2>
                                <h2 className=" text-2xl font-semibold text-center">{classes.instructorName}</h2>
                              <div className='flex justify-between'>
                                <div>
                                    <p className='flex items-center text-xl'> <TiTick className='text-green-600'></TiTick> Available Sit {classes.availableSit}</p>
                                    <p className='flex mt-4 items-center text-xl'> <TiTick className='text-green-600'></TiTick> Enrolled Student {classes.enrolledStudents}</p>
                                </div>
                                <div>
                                    <p className='flex items-center text-xl'> Class Fee <FaDollarSign className='text-orange-400'></FaDollarSign> {classes.price}</p>
                                    <button className='border-[#01A79E] border-2 p-2 rounded-md text-xl font-semibold hover:bg-[#01A79E] hover:text-white mt-4 w-full'>Select</button>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default PopularClass;