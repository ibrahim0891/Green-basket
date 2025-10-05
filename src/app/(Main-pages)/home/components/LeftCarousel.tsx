'use client'
import { ArrowRightIcon } from "@phosphor-icons/react"
const LeftCarousel = () => {
    return <div className={`bg-[url('/assets/Rectangle52.png')] text-white w-full md:h-full bg-cover p-10 axpect-video md:aspect-auto lg:py-16 rounded-2xl space-y-5 bg-no-repeat flex flex-col justify-center items-start`}>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold "> Fresh & Healthy <br />
            Organic Food </h1>
        <p className="pl-6 border-l border-l-gray-400">
            Sale Up to <br />
            <b> 48% </b> off
        </p>
        <button className="flex bg-green-600 items-center gap-2 px-6 py-2 rounded-full"> Shop Now <ArrowRightIcon /> </button>
    </div>
}

export default LeftCarousel