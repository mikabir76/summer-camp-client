import React from 'react';
import banner1 from '../../../assets/banner1.png'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'
const Banner = () => {
    return (
        
        <div className="carousel container flex w-full mt-12">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} className="w-full h-[600px] rounded-xl" />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full transform -translate-y-1/2 rounded-xl top-2/4">
                <div className='text-white w-1/2 space-y-4 mt-40 pl-16'>
                    <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn-style border-0 font-semibold mr-4">Discover More</button>
                        <button className="border-2 py-2 px-4 font-semibold rounded-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 right-5 flex justify-end bottom-0">
                <a href="#slide4" className="btn btn-circle btn-style ">❮</a>
                <a href="#slide2" className="btn btn-circle btn-style  ml-4">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} className="w-full h-[600px] rounded-xl " />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full transform -translate-y-1/2 rounded-xl top-2/4">
                <div className='text-white w-1/2 space-y-4 mt-40 pl-16'>
                    <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn-style border-0 font-semibold mr-4">Discover More</button>
                        <button className="border-2 py-2 px-4 font-semibold rounded-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 right-5 flex justify-end bottom-0">
                <a href="#slide1" className="btn btn-circle btn-style ">❮</a>
                <a href="#slide3" className="btn btn-circle btn-style  ml-4">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} className="w-full h-[600px] rounded-xl" />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full transform -translate-y-1/2 rounded-xl top-2/4">
                <div className='text-white w-1/2 space-y-4 mt-40 pl-16'>
                    <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn-style border-0 font-semibold mr-4">Discover More</button>
                        <button className="border-2 py-2 px-4 font-semibold rounded-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 right-5 flex justify-end bottom-0">
                <a href="#slide2" className="btn btn-circle btn-style ">❮</a>
                <a href="#slide4" className="btn btn-circle btn-style  ml-4">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src={banner4} className="w-full h-[600px] rounded-xl" />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full transform -translate-y-1/2 rounded-xl top-2/4">
                <div className='text-white w-1/2 space-y-4 mt-40 pl-16'>
                    <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn-style border-0 font-semibold mr-4">Discover More</button>
                        <button className="border-2 py-2 px-4 font-semibold rounded-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 right-5 flex justify-end bottom-0">
                <a href="#slide3" className="btn btn-circle btn-style ">❮</a>
                <a href="#slide5" className="btn btn-circle btn-style  ml-4">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
            <img src={banner2} className="w-full h-[600px] rounded-xl" />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full transform -translate-y-1/2 rounded-xl top-2/4">
                <div className='text-white w-1/2 space-y-4 mt-40 pl-16'>
                    <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn-style border-0 font-semibold mr-4">Discover More</button>
                        <button className="border-2 py-2 px-4 font-semibold rounded-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 right-5 flex justify-end bottom-0">
                <a href="#slide4" className="btn btn-circle btn-style ">❮</a>
                <a href="#slide6" className="btn btn-circle btn-style  ml-4">❯</a>
            </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
            <img src={banner3} className="w-full h-[600px] rounded-xl" />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full transform -translate-y-1/2 rounded-xl top-2/4">
                <div className='text-white w-1/2 space-y-4 mt-40 pl-16'>
                    <h1 className='text-5xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                    <p>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn-style border-0 font-semibold mr-4">Discover More</button>
                        <button className="border-2 py-2 px-4 font-semibold rounded-lg">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute transform -translate-y-1/2 left-5 right-5 flex justify-end bottom-0">
                <a href="#slide5" className="btn btn-circle btn-style ">❮</a>
                <a href="#slide1" className="btn btn-circle btn-style  ml-4">❯</a>
            </div>
        </div>
    </div>
          
    );
};

export default Banner;