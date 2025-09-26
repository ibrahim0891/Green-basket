'use client'
import { ArrowRightIcon, OrangeIcon } from "@phosphor-icons/react"
import Categories from "./components/categories"
import OurFeatures from "./sections/OurFeatures"
import ShopByCategory from "./sections/ShopByCategory"
import Sponsor from "./sections/Sponsor"


const LeftCarousel = () => {
    return <div className={`bg-[url('/assets/Rectangle52.png')] text-white w-full h-full bg-cover p-12 space-y-5 bg-no-repeat flex flex-col justify-center items-start`}>
        <h1 className="text-5xl font-semibold "> Fresh & Healthy <br />
            Organic Food </h1>
        <p className="pl-6 border-l border-l-gray-400">
            Sale Up to <br />
            <b> 48% </b> off
        </p>
        <button className="flex bg-green-600 items-center gap-2 px-6 py-2 rounded-full"> Shop Now <ArrowRightIcon /> </button>
    </div>
}


const Home = () => {
    return (
        <div className="container-center">
            <div className="grid grid-cols-[1fr_3fr] items-center  gap-8 py-8">
                <Categories Icon={OrangeIcon} />
                <LeftCarousel />
            </div>
            <OurFeatures />
            <ShopByCategory/>
            <Sponsor/>
        </div>
    )
}

export default Home