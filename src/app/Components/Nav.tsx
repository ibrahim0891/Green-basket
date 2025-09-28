'use client'

import { CaretDownIcon, HeartIcon, ListIcon, MagnifyingGlassIcon, PhoneCallIcon, PlantIcon, ShoppingBagIcon } from '@phosphor-icons/react';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
    name: string, link: string, downArray: boolean
}

const navData: NavItem[] = [
    { name: "Home", link: "/", downArray: true },
    { name: "Shop", link: "/product", downArray: true },
    { name: "Pages", link: "/pages", downArray: true },
    { name: "Blogs", link: "/blogs", downArray: true },
    { name: "Login", link: "/auth/login", downArray: false },
    { name: "About Us", link: "/about", downArray: false },
];


const Nav = () => {
    const pathname = usePathname()

    return (
        <div className='bg-white shadow'>
            <div className='container-center p-3  '>
                <div className='flex items-center justify-between  mb-2'>

                    {/* logo */}
                    <Logo />
                    {/* search bar  */}
                    <div className=''>
                        <div className='flex items-center border border-gray-200 rounded-lg overflow-hidden'>
                            <MagnifyingGlassIcon className='mx-3' />
                            <input type="search" placeholder='search' className='focus:outline-none py-2' />
                            <button className='bg-green-500 text-white px-6 py-2'> Search </button>
                        </div>
                    </div>

                    {/* cart option and wishlist  */}
                    <Link href={'/shopping-cart'}>
                        <div className='flex items-center justify-between gap-4 text-3xl'>
                            <HeartIcon /> <span className='text-gray-300'> | </span> <ShoppingBagIcon />
                            <div className=''>
                                <p className='text-sm text-gray-600'> Shopping Cart </p>
                                <p className='text-base'> $57.00 </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <span className='p-3 mr-4 hover:bg-gray-800 hover:text-white duration-200 rounded-lg '>
                            <ListIcon size={30} />
                        </span>
                        <div className='flex  gap-7 '>
                            {navData.map((item, index) => {
                                const isActive = pathname == item.link
                                return (
                                    <div
                                        className={`${isActive && 'text-green-600 font-semibold'} space-x-2 text-gray-600 flex items-center gap-2`}
                                        key={index}
                                    >
                                        <Link href={item.link}> {item.name}</Link>
                                        {item.downArray ? (
                                            <CaretDownIcon size={16} />
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='gap-5'>
                        <button className='flex items-center gap-2'>
                            <PhoneCallIcon size={32} />
                            <span className='text-gray-600'>
                                +880 1735 699781
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;