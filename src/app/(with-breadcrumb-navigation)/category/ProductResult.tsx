
 
const ProductResultWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/* <Suspense fallback='Loading...'> */}
            {children}
            {/* </Suspense > */}
        </>
    )
}
export default ProductResultWrapper