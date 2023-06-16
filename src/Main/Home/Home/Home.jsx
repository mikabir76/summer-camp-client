import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import CustomersReviews from './CustomersReviews/CustomersReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <CustomersReviews></CustomersReviews>
        </div>
    );
};

export default Home;