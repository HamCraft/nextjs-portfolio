import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white text-lg">
      <h1 className="font-bold">My Portfolio</h1>
      <div className="flex space-x-4 items-center">
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>Contact</a>
        </Link>
        <Link href="https://github.com/HamCraft" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image 
              src="/github-logo.png" 
              alt="GitHub" 
              width={24} 
              height={24} 
              className="hover:opacity-75"
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/ahmed-yaqoob-dhedhi" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkedin_logo.png" 
              alt="LinkedIn" 
              width={24} 
              height={24} 
              className="hover:opacity-75"
            />
          </a>
        </Link>
      </div>
    </nav>

    
  );
};

export default Navbar;
