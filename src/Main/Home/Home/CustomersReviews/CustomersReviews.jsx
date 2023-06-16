import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomersReviews = () => {
    return (
        <div className='mb-16 max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center font-bold mb-8'>-Students Review-</h1>
            <p className='text-center mt-4'>-Happy Client-</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 '>
            <div className="card hover:bg-black/30 cursor-pointer border w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-28 rounded-full">
    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1683282544~exp=1683283144~hmac=379d91f4819091ea0f9ec75542f0f560f24b60aac8e7d1061c1bcb5e6457a549" />
  </div>
</div>
  </figure>
  <div className="card-body  items-center text-center">
    <h2 className="card-title">Shelley M. Moss</h2>
    <p className='flex text-orange-600'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
    <p>"Good quality and service unbeatable. Highly recommended!."</p>

  </div>
</div>
            <div className="card hover:bg-black/30 cursor-pointer border w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-28 rounded-full">
    <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15569.jpg?size=626&ext=jpg&ga=GA1.2.1654759242.1680368383&semt=sph" />
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">John Barlin</h2>
    <p className='flex text-orange-600'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
    <p>"Good quality and service unbeatable. Highly recommended!."</p>

  </div>
</div>
            <div className="card hover:bg-black/30 cursor-pointer border w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-28 rounded-full">
    <img src="https://img.freepik.com/free-photo/waistup-shot-bothered-pissed-goodlooking-african-man-with-afro-hairstyle-frowning-from-irrita_1258-55206.jpg?size=626&ext=jpg&ga=GA1.1.1654759242.1680368383&semt=sph" />
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Sonya Wenzel</h2>
    <p className='flex text-orange-600'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
    <p>"Good quality and service unbeatable. Highly recommended!."</p>

  </div>
</div>
            <div className="card border hover:bg-black/30 cursor-pointer w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div className="avatar">
  <div className="w-28 rounded-full">
    <img src="https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?size=626&ext=jpg&ga=GA1.1.1654759242.1680368383&semt=sph" />
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Minanda W.</h2>
    <p className='flex text-orange-600'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
    <p>"Good quality and service unbeatable. Highly recommended!."</p>

  </div>
</div>
            </div>
        </div>
    );
};

export default CustomersReviews;