import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8">
      <h1 className="text-5xl font-extrabold mb-8">About Me</h1>
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-xl text-center">
        <p className="mb-6 text-lg">
          I'm a passionate software engineer with experience in building dynamic and responsive web applications. 
          I love exploring new technologies and continuously improving my skills. 
          Here, you can learn more about my journey, work, and aspirations.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="text-center">
            <Image src="/html-icon.png" alt="HTML" width={48} height={48} />
            
          </div>
          <div className="text-center">
            <Image src="/css-icon.png" alt="CSS" width={48} height={48} />
           
          </div>
          <div className="text-center">
            <Image src="/js-icon.png" alt="JavaScript" width={48} height={48} />
            
          </div>
          <div className="text-center">
            <Image src="/react-icon.png" alt="React" width={48} height={48} />
            
          </div>
          <div className="text-center">
            <Image src="/nextjs-icon.png" alt="Next.js" width={48} height={48} />
            
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
