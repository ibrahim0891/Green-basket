'use client'

import Button from "@/app/Components/Button";
import { Slider } from "@/components/ui/slider"; 
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ProductResultWrapper from "../ProductResult";
import ProductResultSection from "../server-components/ResultSection";
import CategoryRadioButtonList from "../categoryRadioButtonList";
import FilterButton from "../client-componets/FIlterButton";
import RatingStars from "@/app/Components/RatingStars";
import FieldTitle from "../server-components/FieldTitle";



const Category = ({ params }: { params: { name: string } }) => {
    let searchParams = useSearchParams()
    let router = useRouter()
    let pathname = usePathname()
    let id = searchParams.get('id')


    let [selected, setSelected] = useState(id)
    let [resultCount ,setResultCount] = useState<number>(0)

    const handleCategoryChange = (newId: string) => {
        setSelected(newId);
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('id', newId);
        router.replace(`${pathname}?${newSearchParams.toString()}`);
    }


    return <div className="min-h-screen">
        <div className="container-center py-10 ">

            <div className="grid grid-cols-[1fr_3fr] gap-8">
                <div>
                    <FilterButton />
                </div>
                <div className="flex items-center justify-between">

                    <div>
                        <span> Sort by: </span>
                        <select className="border  px-4 py-2 border-gray-200">
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                    <div> {resultCount} Result Found</div>
                </div>
            </div>

            <div className="grid grid-cols-1 grid-cols-[1fr_3fr] gap-8 mt-5">
                <aside>
                    <div>
                        <FieldTitle name="All Categories" />

                        <div className="flex flex-row  gap-6">
                            <CategoryRadioButtonList selected={selected} setSelected={handleCategoryChange} />
                        </div>
                    </div>

                    <div className="my-10">
                        <FieldTitle name="Price " />
                        <Slider min={0} max={100} step={2} defaultValue={[12, 32]} className="my-10"></Slider>

                    </div>

                    <div>
                        <FieldTitle name="Rattings " />
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-amber-300">
                                <RatingStars starCount={5}/>
                            </div>
                            <div className="flex items-center gap-3 text-amber-300">
                                <RatingStars starCount={4}/>
                            </div>
                            <div className="flex items-center gap-3 text-amber-300">
                              <RatingStars starCount={3}/>
                            </div>

                        </div>
                    </div>
                    <div>
                        <FieldTitle name="Popular tags" />
                        <div className="">
                            <span className="bg-green-500 text-green-50 px-3 py-1 rounded-full m-2 inline-block"> Meat </span>
                            <span className="bg-green-500 text-green-50 px-3 py-1 rounded-full m-2 inline-block"> vegetabel </span>
                            <span className="bg-green-500 text-green-50 px-3 py-1 rounded-full m-2 inline-block"> Soft drinks </span>
                            <span className="bg-green-500 text-green-50 px-3 py-1 rounded-full m-2 inline-block"> Cleaning items </span>
                            <span className="bg-green-500 text-green-50 px-3 py-1 rounded-full m-2 inline-block"> Food </span>
                            <span className="bg-green-500 text-green-50 px-3 py-1 rounded-full m-2 inline-block"> Grocery </span>
                        </div>
                    </div>
                </aside>

                <div>
                    <ProductResultWrapper>
                        <ProductResultSection setResultCount={setResultCount} categoryId={selected} />
                    </ProductResultWrapper>
                </div>
            </div>
        </div>
    </div>
}

export default Category