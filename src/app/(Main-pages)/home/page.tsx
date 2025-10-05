 'use client'
import Categories from "./components/categories"
import LeftCarousel from "./components/LeftCarousel"
import CategoryList from "./components/server/categoryList"
import { OrangeIcon } from "@phosphor-icons/react"

const Home = () => {
    return (
        <div className="container-center">
            <div className="lg:grid lg:grid-cols-[1fr_3fr] items-center  gap-8 py-8 md:py-14">
                <Categories>
                     <CategoryList Icon={OrangeIcon}/>
                </Categories>
                <LeftCarousel />
            </div>
           
        </div>
    )
}

export default Home