import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import About from '../About/About';
import Review from '../Review/Review';
import UseReviews from '../UseReviews/UseReviews';

const Home = () => {
    const [about, setAbout] = useState([]);
    const handleAbout = () => {

    }
    const [reviews, setReviews] = UseReviews();
    return (
        <div className='mb-20'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 mx-20 mt-10'>
                <div>
                    <h1 className='text-5xl font-bold text-slate-600'><span className='text-lime-700 bold '>MOHU'S</span> DSLR GALLERY</h1>
                    <p className='font-mono  text-2xl'>We Have Accumulated A Price List Including Top DSLR Cameras Available In Bangladesh. Our Extensive Price List Allows You To Choose The Best DSLR Cameras As Per Your Requirements. Since Online Stores Run Sales And Discounts Almost On A Regular Basis, And Not All Sites Provide The Same Deal, The Prices Of DSLR Cameras Vary From Site To Site. To Help You Overcome This Problem, We Update Our DSLR Cameras Price Quite Frequently. This Ensures That You Are Aware Of Which Website Is Providing You With The Best Deal.</p>
                    <button onClick={handleAbout} className='bg-lime-700 px-4 py-2 m-4 hover:bg-white hover:border border-2 border-lime-700'>EXPLORE MORE</button>
                </div>
                
                <div style={{ width: '100%', marginLeft: '40px' }}>
                    <img src="images\camera.avif" alt="" />
                </div>
                </div>
                <h2 className='text-3xl text-green-700 font-bold'>Customer Reviews</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  mx-20 mt-10'>
                    {
                        reviews.slice(0,3).map(review => <Review review={review} key={reviews.id}></Review>)
                    }
                  
                </div>
               
                <button className='text-green-600 font-bold m-5'>see more...</button>
               
        </div>

    );
};

export default Home;