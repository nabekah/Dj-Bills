import React from 'react'
import Image from 'next/image'
import { twitter, linkedin, instagram, facebook } from "./assets"
import { navLinks, socialMedia } from './constants'
import Link from 'next/link'


const Footer = () => {
  return (
 

<div className=" flex md:flex-row flex-col  bg-gray-300 pt-8 pb-6 xl:max-w-[1280px] w-full">
  <div className="w-full mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl text-semibold text-cyan-700 ">Stay in touch, always!</h4>
        <h5 className="text-lg mt-0 mb-2 text-cyan-600 ">
        Book my services. Connect on any of the platforms.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          {
            socialMedia.map((social)=>(
              
              <button className="bg-white hover:bg-gray-200 text-lightBlue-400 shadow-lg hover:shadow-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <Link href={social.link}><Image src={social.icon} alt={social.id} width={18} height={18} className="ml-3"/></Link></button>

            )
            
            )
          }
          
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-cyan-700  text-sm font-semibold mb-2">Nav Links</span>
            <ul className="list-unstyled">
              
              {
                navLinks.map((nav, index)=>(
                  <li key={nav.id} className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      <Link href={`#${nav.id}`}>{nav.title}  </Link>
                  </li>
                )

                )
              }
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-cyan-700 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.adomonline.com/">Adom 106.3 FM</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://web.facebook.com/Hitz1039/?_rdc=1&_rdr">Hitz 103.9 FM</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200" /> 
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="abekah_ekow@yahoo.com" className="text-gray-500 hover:text-gray-800" target="_blank"> Noah by </a>
          <a href="https://www.dk-tech.com.gh" className="text-gray-700 hover:text-gray-800">DK Tech</a>.
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer