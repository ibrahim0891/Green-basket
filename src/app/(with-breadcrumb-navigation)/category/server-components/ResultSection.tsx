import axiosInstance from "@/app/lib/axios"
import ProductCard, { Product } from "@/app/(Main-pages)/products/components/ProductCard";



let res = await axiosInstance.get('/api/products')
let productList = res.data;

const ProductResultSection = ({ categoryId }) => {
    let products: Product[] = productList?.products

    let selectedProduct = products.filter(item => item.categoryId == categoryId)
    console.log(categoryId);
    return <div className='v space-y-6'>

        {
            selectedProduct.length == 0 ?
                <div className="w-full aspect-video flex items-center justify-center text-3xl font-semibold ">
                    <p> No product Found</p>
                </div>
                :
                <div className='grid grid-cols-3 gap-6 my-8'>
                    {
                        selectedProduct?.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })
                    }
                </div>
        }
    </div>
}

export default ProductResultSection