'use client'

import Button from "@/app/Components/Button";
import { CaretDownIcon, SlidersHorizontalIcon } from "@phosphor-icons/react";
import { useSearchParams } from "next/navigation";

const Category = ({ params }: { params: { name: string } }) => {
    let categoryName = decodeURIComponent(params.name)
    let searchParams = useSearchParams()
    let id = searchParams.get('id')

    return <div className="min-h-screen">
        <div className="container-center py-10 ">

            <div className="grid grid-cols-[1fr_3fr] gap-8">
                <div>
                    <Button label="Filter" className="px-8 flex items-center gap-4"> <SlidersHorizontalIcon />  </Button>
                </div>
                <div className="flex items-center justify-between">

                    <div>
                        <span> Sort by: </span>
                        <select className="border  px-4 py-2 border-gray-200">
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                    <div> 53 Result Found</div>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_3fr] gap-8  h-screen mt-5">
                <div>
                
                     <div className="flex items-center justify-between pb-4">
                        <h1 className="text-2xl font-semibold"> All Categories </h1>
                        <span>
                   h-scre          <CaretDownIcon size={20}/>
                        </span>
                     </div>

                     <div className="flex items-center justify-between pb-4">
                        <h1 className="text-2xl font-semibold"> Price </h1>
                        <span>
                            <CaretDownIcon size={20}/>
                        </span>
                     </div>

                     <div className="flex items-center justify-between pb-4">
                        <h1 className="text-2xl font-semibold"> Rating </h1>
                        <span>
                            <CaretDownIcon size={20}/>
                        </span>
                     </div>
                     <div className="flex items-center justify-between pb-4">
                        <h1 className="text-2xl font-semibold"> Popular tag </h1>
                        <span>
                            <CaretDownIcon size={20}/>
                        </span>
                     </div>
                </div>
                <div>
                    prodcut display section
                </div>
            </div>
        </div>
    </div>
}

export default Category