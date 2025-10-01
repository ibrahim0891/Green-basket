import Home from "./products/page";
import DiscountAds from "./products/sections/DiscountAds";
import FeaturedProduct from "./products/sections/FeaturedProduct";
import OurFeatures from "./products/sections/OurFeatures";
import ShopByCategory from "./products/sections/ShopByCategory";
import Sponsor from "./products/sections/Sponsor";

 

export default function App() {
    return <div>
        <Home></Home>
        <OurFeatures />
        <DiscountAds />
        <ShopByCategory />
        <FeaturedProduct/>
        <Sponsor />
    </div>
}   
