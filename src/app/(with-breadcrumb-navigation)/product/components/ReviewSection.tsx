
import RatingStars from '@/app/Components/RatingStars';
import React from 'react';
import { Review } from '../[id]/page';

const ReviewSection = ({ reviewData }: { reviewData: Review[] }) => {
    return (
        <div className="my-8">
            {reviewData.map((review, index) => {
                const { id, user, rating, comment, date } = review;
                return <div key={index} className='border-b border-gray-200 mb-4 py-6'>
                    <div className='flex items-center gap-4 '>
                        <img src="https://t4.ftcdn.net/jpg/02/92/17/33/360_F_292173322_iGYOpBVC52OwTfw9SsZ015geEbNXaWk8.jpg" className='w-10 rounded-full aspect-square object-cover' alt="" />
                        <div className='py-3 space-y-2'>
                            <p className='font-semibold text-xl '>{user}</p>
                            <RatingStars starCount={rating} />
                        </div>
                    </div>
                    <div className='text-gray-400 text-xl'>
                        {comment}
                    </div>

                </div>
            })}
        </div>
    );
};

export default ReviewSection;