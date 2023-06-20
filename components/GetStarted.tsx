
import { arrowUp } from "./assets"
import Image from "next/image"

const  GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-0'>
            <span className='text-gradient'>Live</span> 
          </p>
           <Image src={arrowUp} alt="arrow up"className='w-[23px] h-[23px] object-contain' /> 
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-1'>
            <span className='text-gradient'>Radio</span> 
          </p>
        
      </div>
    </div>
  )
}

export default GetStarted