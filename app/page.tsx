import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center p-8">
      <h1 className='text-5xl font-extrabold'>Ahmed Yaqoob Dhedhi</h1>
      <Image 
        src="/ahmed.jpg" 
        alt="Ahmed Yaqoob Dhedhi" 
        width={150} 
        height={150} 
        className="rounded-full border-4 border-white shadow-lg mt-10"
      />
      <h1 className="mt-6 text-5xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl max-w-2xl">
        Here, you can explore my projects, learn about my skills, 
        and discover my journey in the world of web development.
      </p>
    </div>

  );
};

export default Home;
