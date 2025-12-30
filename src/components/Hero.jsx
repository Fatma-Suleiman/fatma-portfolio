import React from 'react'
import { ReactTyped} from 'react-typed'

function Hero(){
  return(
    <div className='text-white'>
      <div className='max-w-[1200px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Building Modern Web Experiences</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> The concept is clear? I'll bring it here. Let's turn vision into function.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            I'm a </p>
            <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 '
              strings={['Frontend Developer', 'React Developer', 'TypeScript Developer','UI/UX Enthusiast']}
              typeSpeed={120}
              backSpeed={130}
              loop
            />
         
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>I specialize in building responsive, user-friendly web applications using React and Tailwind CSS, TypeScript for rock-solid stability. Passionate about clean design, modern UI, and seamless user experiences.</p>
      
      </div>
    </div>
  );
};

export default Hero;
