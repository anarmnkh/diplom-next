import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-8 py-8'>
          <p className='text-2xl'>.</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Тэтгэвэр төлөвлөлт</h1>
          
          <Link href="/service/page">
            <button className='py-3 px-40'>Төлөвлөх</button>
          </Link>
        </div>
        <div>
          {/* Removed the layout and objectPosition props */}
          <Image src="/bg2.jpg" width={500} height={500} alt="Background Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
