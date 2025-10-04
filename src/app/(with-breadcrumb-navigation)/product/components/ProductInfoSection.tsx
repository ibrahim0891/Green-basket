'use client'

import { ReactNode, useState } from "react";  

type Tabs = { reviewSection: ReactNode, descriptionSection: ReactNode, additionalInformation: ReactNode }

const ProductInfoSection = ({ reviewSection, descriptionSection, additionalInformation }: Tabs) => {
    type Nav = 'des' | 'addition' | 'review'

    let [selectedTab, setSelectedTab] = useState<Nav>('des')
    return (
        <div>
            <div className="my-10">
                <div className="border-b border-gray-200 flex items-center justify-start sm:justify-center w-full overflow-x-auto no-scrollbar">
                    <button onClick={() => setSelectedTab('des')} className={`${selectedTab == 'des' && 'tab-active'} py-6 px-8 border-b-4 border-transparent hover:bg-gray-100 whitespace-nowrap`}>
                        Description
                    </button>
                    <button onClick={() => setSelectedTab('addition')} className={`${selectedTab == 'addition' && 'tab-active'} py-6 px-8 border-b-4 border-transparent hover:bg-gray-100 whitespace-nowrap`}>
                        Additional Information
                    </button>
                    <button onClick={() => setSelectedTab('review')} className={`${selectedTab == 'review' && 'tab-active'} py-6 px-8 border-b-4 border-transparent hover:bg-gray-100 whitespace-nowrap`}>
                        Customer Feedback
                    </button>
                </div>
                {selectedTab == 'des' && descriptionSection}
                {selectedTab == 'addition' && additionalInformation}
                {selectedTab == 'review' && reviewSection}
            </div>
        </div >
    );
};

export default ProductInfoSection;