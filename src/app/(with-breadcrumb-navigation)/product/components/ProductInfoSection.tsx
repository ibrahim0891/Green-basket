'use client'

import { ReactNode, useState } from "react";  

type Tabs = { reviewSection: ReactNode, descriptionSection: ReactNode, additionalInformation: ReactNode }

const ProductInfoSection = ({ reviewSection, descriptionSection }: Tabs) => {
    type Nav = 'des' | 'addition' | 'review'

    let [selectedTab, setSelectedTab] = useState<Nav>('des')
    return (
        <div>
            <div className="my-10">
                <div className="border-b border-gray-200 flex items-center md:items-start justify-start sm:justify-center w-full overflow-x-auto no-scrollbar">
                    <button onClick={() => setSelectedTab('des')} className={`${selectedTab == 'des' && 'tab-active'} py-2 px-4 mr-4 md:py-3 md:px-8 border-b-4 border-transparent hover:bg-gray-100 whitespace-nowrap`}>
                        Description
                    </button>
                    
                    <button onClick={() => setSelectedTab('review')} className={`${selectedTab == 'review' && 'tab-active'} py-2 px-4 mr-4 md:py-3 md:px-8 border-b-4 border-transparent hover:bg-gray-100 whitespace-nowrap`}>
                        Review
                    </button>
                </div>
                {selectedTab == 'des' && descriptionSection}
                {selectedTab == 'review' && reviewSection}
            </div>
        </div >
    );
};

export default ProductInfoSection;