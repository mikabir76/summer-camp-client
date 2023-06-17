import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import CustomersReviews from './CustomersReviews/CustomersReviews';
import InstructorClass from '../../../Components/InstructorClass/InstructorClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <InstructorClass></InstructorClass>
            <CustomersReviews></CustomersReviews>
        </div>
    );
};

export default Home;