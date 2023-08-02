import React from 'react';
import weight from '../img/weight.svg';

export default function Banner() {
  return (
    <>
      <div class='relative z-20 flex items-center overflow-hidden   bg-gradient-to-r from-gray-400 via-[#bce1ff] to-gray-300  pt-52 justify-center w-[900px] md:w-full md:'>
        <div class='container relative flex px-6 py-16 mx-auto mr-5'>
          <div class='relative z-20 flex flex-col sm:w-2/3 lg:w-2/5 justify-center '>
            <span class='w-20 h-2 mb-12 bg-gray-800 dark:bg-white'></span>
            <h1 class='flex flex-col text-xl font-black leading-none text-gray-800 uppercase  dark:text-white mb-3 font-primary md: text-6xl'>
              Be Ready
            </h1>
            <p class='text-[12px] text-gray-700 sm:text-base dark:text-white font-primary'>
              With our products you will be ready for any challenge that comes
              your way.<br></br> We have the best products for you to get in
              shape and be ready for anything.
            </p>
            <div class='flex mt-8'></div>
          </div>
          <div class='relative hidden sm:block sm:w-1/3 lg:w-3/5'>
            <img src={weight} class='  max-w-[0px] m-auto md:max-w-sm logo ' />
          </div>
        </div>
      </div>
    </>
  );
}
