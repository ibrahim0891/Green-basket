import Home from "./(Main-pages)/home/page";
import DiscountAds from "./(Main-pages)/home/sections/DiscountAds";
import FeaturedProduct from "./(Main-pages)/home/sections/FeaturedProduct";
import OurFeatures from "./(Main-pages)/home/sections/OurFeatures";
import ShopByCategory from "./(Main-pages)/home/sections/ShopByCategory";
import Sponsor from "./(Main-pages)/home/sections/Sponsor";
import Testimonial from "./(Main-pages)/home/sections/Testimonial";

import app from "./lib/firebaseClient";
export default function App() {
     
    return <div>
        <Home></Home>
        <OurFeatures />
        <DiscountAds />
        <ShopByCategory />
        <FeaturedProduct />
        <Testimonial/>
        <Sponsor />
    </div>
}   
