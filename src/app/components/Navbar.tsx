import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';
import { Bell, Home, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center border-b border-gray-200 pb-4'>
            {/* Left */}
            <Link className='flex items-center' href='/'>
            <Image src='/logo.png' alt='logo' width={36} height={36} className='w-6 h-6 md:w-6 md:h-6'/>
            <p className='hidden md:block text-md font-medium tracking-wider'>Ecomm</p>
            </Link>
            {/* Right */}
            <div className='flex items-center gap-6'>
                <SearchBar/>
                <Link href='/'>
                <Home className='w-4 h-4 text-gray-600'/>
                </Link>
                <Bell className='w-4 h-4 text-gray-600'/>
                <ShoppingCart className='w-4 h-4 text-gray-600'/>
                <Link className='text-sm text-gray-500' href='/login'>
                Sign in
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;