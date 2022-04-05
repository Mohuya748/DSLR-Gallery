import React from 'react';
import Review from '../Review/Review';
import UseReviews from '../UseReviews/UseReviews';

const Reviews = () => {
    const [reviews, setReviews] = UseReviews();
    return (
        <div className='mb-20'>
            <h2 className='text-3xl text-green-700 font-bold'>Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  mx-20 mt-10'>
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }

            </div>
        </div>
    )


};

export default Reviews;