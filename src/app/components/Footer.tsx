import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 rounded-lg flex flex-col items-center gap-8 md:flex-row md:gap-0 md:items-start md:justify-between bg-gray-800 p-8 rounded=lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link className="flex items-center" href="/">
          <Image src="/logo.png" alt="logo" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            Ecomm
          </p>
        </Link>
        <p className="text-sm text-gray-400">2026 ecomm</p>
        <p className="text-sm text-gray-400">All rights reserved @salar</p>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrival</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
