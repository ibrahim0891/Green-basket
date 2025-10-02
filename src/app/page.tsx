import Home from "./(Main-pages)/products/page";
import DiscountAds from "./(Main-pages)/products/sections/DiscountAds";
import FeaturedProduct from "./(Main-pages)/products/sections/FeaturedProduct";
import OurFeatures from "./(Main-pages)/products/sections/OurFeatures";
import ShopByCategory from "./(Main-pages)/products/sections/ShopByCategory";
import Sponsor from "./(Main-pages)/products/sections/Sponsor";



export default function App() {
    return <div>
        <Home></Home>
        <OurFeatures />
        <DiscountAds />
        <ShopByCategory />
        <FeaturedProduct />
        <Sponsor />
    </div>
}   
