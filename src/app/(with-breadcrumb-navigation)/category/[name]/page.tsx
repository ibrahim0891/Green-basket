'use client'

import Button from "@/app/Components/Button";
import { Slider } from "@/components/ui/slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductResultWrapper from "../ProductResult";
import ProductResultSection from "../server-components/ResultSection";
import CategoryRadioButtonList from "../categoryRadioButtonList";
import FilterButton from "../client-componets/FIlterButton";
import RatingStars from "@/app/Components/RatingStars";
import FieldTitle from "../server-components/FieldTitle";
import { ListPlusIcon } from "@phosphor-icons/react";



const Category = () => {
    let searchParams = useSearchParams()
    let router = useRouter()
    let pathname = usePathname()
    let id = searchParams.get('id')

    let categoryName = decodeURIComponent(pathname.split('/')[2])



    let [selected, setSelected] = useState(id)
    let [selectedCategoryName, setCategoryName] = useState(categoryName)
    let [resultCount, setResultCount] = useState<number>(0)
    let [categorySidebarOpen, setCategorySidebarOpen] = useState<boolean>(false)


    const handleCategoryChange = (newId: string, name: string) => {
        setSelected(newId);
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('id', newId);
        router.replace(`/category/${name}?${newSearchParams.toString()}`);
    }


    return <div className="min-h-screen">
        <div className="container-center py-10 ">

            <div className="grid  gap-8">

                <div className="flex items-center justify-between ">
                    <span className="p-4 rounded-md border border-gray-200 flex items-center gap-4 cursor-pointer active:scale-90 transition-all" onClick={() => setCategorySidebarOpen(!categorySidebarOpen)}>
                        <ListPlusIcon />
                        <span>
                            {selectedCategoryName}
                        </span>
                    </span>

                    <div> {resultCount} Result Found</div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-8 mt-5 relative">
                <aside className={`absolute sm:static z-10 bg-white overflow-hidden transition-all ${categorySidebarOpen ? 'w-full' : 'w-0 sm:w-auto'}`}>
                    <div>
                        <FieldTitle name="All Categories" />

                        <div className="flex flex-row  gap-6">
                            <CategoryRadioButtonList setCategorySidebarOpen={setCategorySidebarOpen} setCategoryName={setCategoryName} selected={selected} setSelected={handleCategoryChange} />
                        </div>
                    </div>

                    <div className="my-10 hidden">
                        <FieldTitle name="Price " />
                        <Slider min={0} max={100} step={2} defaultValue={[12, 32]} className="my-10"></Slider>

                    </div>

                    <div className="hidden">
                        <FieldTitle name="Rattings " />
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-amber-300">
                                <RatingStars starCount={5} />
                            </div>
                            <div className="flex items-center gap-3 text-amber-300">
                                <RatingStars starCount={4} />
                            </div>
                            <div className="flex items-center gap-3 text-amber-300">
                                <RatingStars starCount={3} />
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

                <div className="h-screen overflow-auto">
                    <ProductResultSection setResultCount={setResultCount} categoryId={selected} />
                </div>
            </div>
        </div>
    </div>
}

export default Category