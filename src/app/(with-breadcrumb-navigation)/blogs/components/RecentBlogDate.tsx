
'use client'
import { CalendarBlankIcon } from '@phosphor-icons/react';
import React from 'react';

const RecentBlogDate = ({date} : {date : {day: string , month : string}}) => {
    let {day , month } = date
    return ( 
            <div className='flex items-center gap-2 text-xs '>
                <span> <CalendarBlankIcon /> </span>
                <span> {day} {month} 2025</span>
           
        </div>
    );
};

export default RecentBlogDate;