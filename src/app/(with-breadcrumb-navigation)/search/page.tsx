'use client'


import SectionHeader from '@/app/(Main-pages)/products/components/SectionHeader';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SearchResultPage = () => {
    const params = useSearchParams()
    const query : string  = params.get('query')
    
    return (
        <div>
            <div className="container-center py-10">
                <SectionHeader smallText='Search Result' title='Search Result'/>
            </div>
        </div>
    );
};

export default SearchResultPage;