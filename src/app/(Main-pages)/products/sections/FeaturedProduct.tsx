
import SectionHeader from '../components/SectionHeader';
import axiosInstance from '@/app/lib/axios'; 
import ProductCard, { Product } from '../components/ProductCard';


const FeaturedProduct = async () => {
    let res = await axiosInstance.get('/api/products')
    let productList = res.data

    let products : Product[] = productList?.products
    console.log(products);
    return (
        <div>
            <div className='container-center py-6 space-y-6'>
                <SectionHeader smallText='Featured' title='Our Featured Product' />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-8'>
                    {/* <FeaturedProductSection product={res.data}/> */}
                    {products?.slice(0, 5).map((product) => {
                        return <ProductCard key={product.id} product={product}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;