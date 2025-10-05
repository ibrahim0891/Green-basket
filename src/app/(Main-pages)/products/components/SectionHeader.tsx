


import React from 'react';

const SectionHeader = ({ smallText, title }: { smallText: string, title: string }) => {
    return (
        <div className='space-y-2 text-center'>
            <p className='text-green-500 capitalize text-sm '> {smallText} </p>
            <h2 className='text-xl md:text-4xl font-semibold'> {title} </h2>
        </div>
    );
};

export default SectionHeader;