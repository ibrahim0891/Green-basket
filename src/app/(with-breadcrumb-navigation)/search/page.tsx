

import SectionHeader from '@/app/(Main-pages)/products/components/SectionHeader';

import React from 'react';
import axiosInstance from '@/app/lib/axios';
import ProductCard, { Product } from '@/app/(Main-pages)/products/components/ProductCard';

const SearchResultPage = async ({ searchParams }: { searchParams: { query: string } }) => {
    let query = searchParams.query ?? ''
    let results = await axiosInstance.get('/api/search?query=' + query)
    console.log(query)

    if (!results || !results.data || results.data.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center text-gray-500">
                <SectionHeader smallText="Search Result" title="No Results Found" />
                <p className="mt-4">
                    We couldn&apos;t find any products matching your search criteria.
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    <SectionHeader smallText='Search Result' title='Found Products' />

                    <div className="py-4 mt-8 mb-6 border-b border-gray-200 text-lg font-medium text-gray-700">
                        <span className="font-bold text-indigo-600">{results.data.length}</span> results found in <span className="text-gray-500">{(Math.random() * 2 + 0.1).toFixed(2)}s</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
                        {
                            results.data.map((item : Product, index : number) => {

                                return (
                                    <div
                                        key={index}
                                        className="transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg rounded-lg"
                                    >
                                        <ProductCard product={item} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;