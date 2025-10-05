'use client'

import { CaretDownIcon, HeartIcon, ListIcon, MagnifyingGlassIcon, PhoneCallIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, XIcon } from '@phosphor-icons/react';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type NavItem = {
    name: string, link: string, downArray: boolean
}

const navData: NavItem[] = [
    { name: "Home", link: "/", downArray: true },
    { name: "Blogs", link: "/blogs", downArray: true },
    { name: "Login", link: "/auth/login", downArray: false },
    { name: "About Us", link: "/about", downArray: false },
];


const Nav = () => {
    const pathname = usePathname()
    const router = useRouter()
    let [isNavOpen, setIsNavOpen] = useState<boolean>(true)
    let [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    let [recentSearch, setRecentSearch] = useState<string[]>([])


    function handleNavToggle() {
        setIsNavOpen(!isNavOpen)
    }

    let handleSearchToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((e.target as HTMLElement).id === 'search-popup-bg') {
            setIsSearchOpen(false)
        } else {
            setIsSearchOpen(true)
        }
    }

    let handleRecentSearchClick = (query: string) => {
        setTimeout(() => {
            setIsSearchOpen(false)
        }, 0);
        router.push('/search?query=' + query)
    }

    let handleRecentSearchClear = () => {
        localStorage.removeItem('recent-search')
        setRecentSearch([])
    }


    return (
        <div className='bg-white shadow sticky top-0 z-10 '>
            <div className='m-auto   md:pt-4  py-2 container-center  '>
                <div className='flex items-center justify-between  mb-2 '>

                    <span className='p-3 text-xl md:text-2xl md:hidden border border-gray-100 active:scale-95 duration-200 rounded-sm ' onClick={handleNavToggle}>
                        <ListIcon />
                    </span>

                    {/* logo */}
                    <Logo />
                    {/* search bar  */}
                    <div className={`${isSearchOpen ? 'h-screen' : 'h-0 md:h-auto'} duration-500 md:h-auto fixed md:static bg-black/30 backdrop-blur-sm md:bg-transparent  overflow-hidden top-0 left-0 z-10`} onClick={(e) => handleSearchToggle(e)} id='search-popup-bg'>
                        <SearchBar setIsSearchOpen={setIsSearchOpen} recentSearch={recentSearch} setRecentSearch={setRecentSearch} />
                        <div className='bg-white p-6 rounded-sm text-xs m-5 mt-2 sm:hidden'>
                            <h2 className='text-xl mb-3 flex items-center justify-between'> <span>Recent Search</span> <span onClick={() => handleRecentSearchClear()}><TrashIcon color='red' /></span> </h2>
                            <div className=' space-x-2'>
                                {recentSearch.length == 0 ? <span> Nothing searched yet</span> : recentSearch.map((item, index) => {
                                    return <button key={index} onClick={() => handleRecentSearchClick(item)} >
                                        {item}
                                    </button>
                                })}
                            </div>

                        </div>
                    </div>

                    {/* cart option and wishlist  */}
                    <div className='flex items-center justify-between gap-4 text-xl md:text-2xl'>
                        <MagnifyingGlassIcon onClick={(e) => handleSearchToggle(e)} className='lg:hidden' />
                        <HeartIcon className='hidden lg:block cursor-not-allowed' />
                        <span className='text-gray-300'> | </span>
                        <Link href={'/shopping-cart'} className='flex items-center gap-4'>
                            <ShoppingCartIcon />
                        </Link>
                    </div>
                </div>

                <div className=' hidden md:flex items-center justify-between pb-3'>
                    <div className='flex items-center'>
                        <div className='flex  gap-7 py-2'>
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
                            <a href="tel:+880 1735 699781">
                                <span className='text-gray-600'>
                                    +880 1735 699781
                                </span>
                            </a>
                        </button>
                    </div>
                </div>


                {/* mobile side nav  */}
                <div className={`flex  lg:hidden flex-col justify-between fixed top-0 left-0 bg-white h-screen w-2/3 p-6 border-r border-gray-200 transition-all ${isNavOpen ? '-translate-x-full' : 'translate-0'}`}>
                    <div className='w-full'>
                        <div className='flex items-center justify-between pb-4 mb-4 border-b border-gray-200'>
                            <Logo />
                            <XIcon size={24} className='cursor-pointer text-gray-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50' onClick={() => handleNavToggle()} />
                        </div>
                        <div className='flex  w-full'>
                            <div className='flex  gap-2 py-2 flex-col w-full'>
                                {navData.map((item, index) => {
                                    const isActive = pathname == item.link
                                    return (
                                        <div
                                            className={`${isActive ? 'text-green-600 font-semibold bg-green-50 border-l-4 border-green-600' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50 border-l-4 border-transparent'} w-full space-x-2 flex items-center gap-2 px-3 py-2 rounded-r-lg transition-colors duration-150`}
                                            key={index}
                                            onClick={handleNavToggle}
                                        >
                                            <Link href={item.link} className='flex-grow'> {item.name}</Link>
                                            {item.downArray ? (
                                                <CaretDownIcon size={16} className='text-gray-400' />
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='gap-5 pt-4 border-t border-gray-200'>
                        <button className='flex items-center gap-2 p-3 w-full rounded-lg hover:bg-blue-50 transition-colors duration-150'>
                            <PhoneCallIcon size={28} className='text-blue-500' />
                            <span className='text-gray-600 text-lg font-medium'>
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