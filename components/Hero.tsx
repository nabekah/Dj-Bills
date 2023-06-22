
import React from 'react'
import {discount, robot} from './assets'
import GetStarted from './GetStarted'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => (
  
  <section  className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-start flex-col xl:px-16 sm:px-6">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" loading='lazy' />
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
          <span className='text-white'>Double</span> the {" "} <span className='text-white'> action</span>
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>Let's create <br className='sm:block hidden' /> {" "}<span className='text-gradient'>unforgettable</span> {" "}</h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <Link href="https://liveonlineradio.net/iframe/?p=adom-fm"><GetStarted /></Link>
        </div>

      </div>
      <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading- [100px] leading-[75px] w-full'>memories together!
      </h1>
      <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
        Presenter | Producer at adom 106.3 fm, Ghana
        <br className='sm:block hidden' />Join<span className="inline-block text-teal-700 text-center bg-gray-400 px-1 py-0 m-1 rounded-[6px]">Efiada Mbosuo</span>live on Adom 106.3 FM from 7pm till 11pm every friday
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center md:my-0 mx-5 my-10 relative">
      <Image
        src={robot}
        width='493'
        height='493'
        alt="dj bills"
        priority={true}
        className='relative z-[5] rounded-full cursor-pointer filter grayscale hover:grayscale-0 shadow-2xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-white/30'

      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>
    <div className="ss:hidden flex justify-center items-center">
      <GetStarted />

    </div>

  </section>
    
 
)

export default Hero