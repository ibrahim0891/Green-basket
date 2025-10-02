'use client'

import { StarIcon } from "@phosphor-icons/react"


import React from 'react';

const RatingStars = ({ starCount }: { starCount: number }) => {
    return (
        <div className="flex items-center gap-1 ">
            {
                new Array(5).fill('').map((value, index) => {
                    return <div className='text-amber-400' key={index}>
                        <StarIcon weight={Math.floor(starCount) < index + 1 ? 'regular' : 'fill'} />
                    </div>
                })
            }
        </div>
    );
};

export default RatingStars;