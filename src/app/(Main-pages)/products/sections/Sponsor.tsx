/* eslint-disable @next/next/no-img-element */
const Sponsor = () => {
    return (

        <div className="my-8">

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center py-8 my-8 container-center gap-6'>

                <img
                    src='/images/Sponsors/Vector.png'
                    alt='Vector Image'
                    className="mx-auto w-auto max-h-12 opacity-75"
                />
                <img
                    src='/images/Sponsors/bookoff-corporation-logo.png'
                    alt='Bookoff Corporation Logo'
                    className="mx-auto w-auto max-h-12 opacity-75"
                />
                <img
                    src='/images/Sponsors/food.png'
                    alt='Food Image'
                    className="mx-auto w-auto max-h-12 opacity-75"
                />
                <img
                    src='/images/Sponsors/Group.png'
                    alt='Group Image'
                    className="mx-auto w-auto max-h-12 opacity-75"
                />
                <img
                    src='/images/Sponsors/Group-1.png'
                    alt='Group Image 1'
                    className="mx-auto w-auto max-h-12 opacity-75"
                />
                <img
                    src='/images/Sponsors/mango-1.png'
                    alt='Mango Image 1'
                    className="mx-auto w-auto max-h-12 opacity-75"
                />
            </div>
        </div>
    );
};

export default Sponsor;
