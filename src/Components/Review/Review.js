import React from 'react';
import './Review.css'
import { StarIcon } from '@heroicons/react/solid'


const Review = (props) => {
    const {name,image,rating,review} =props.review
    return (
        <div className='review'>
            <img src={image} alt="" />
            <h4 className='text-green-700 font-bold ml-auto'>Name: {name}</h4>
            <p>{review}</p>
            <p className='flex items-center'>Rating:
            <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
            <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
            <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
            <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
            <StarIcon className="h-5 w-5 text-yellow-500"></StarIcon>
            {rating}</p>
            

        </div>
    );
};

export default Review;