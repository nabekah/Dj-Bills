'use client';
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'

const data =[{
    id:1,
    year:"2020",
    title:"Ghana DJ awards",
    description:"Gospel DJ of the Year",
    img:"/award20-1.jpeg",
    links:"wwww"


},
{   id:2,
    year:"2022",
    title:"Ghana DJ awards",
    description:" Highlife DJ of the Year",
    img:"/award22-1.jpeg",
    links:"wwww"
},
{
    id:3,
    year:"2021",
    title:"ghana DJ awards",
    description:"Best gosple DJ of the Year",
    img:"/awards23-3.jpeg",
    links:"wwww"
},
{
    id:4,
    year:"2023",
    title:"GEA-USA Nomination",
    description:"Nominated in Best Radio",
    img:"/awards23-2.jpeg",
   
    links:"wwww"
},
{
    id:5,
    year:"2023",
    title:"Entertainment",
    description:"Nominated in Best Radio",
    img:"/award23-1.jpeg",
    links:"wwww"
}]



export default function Awards() {
    const leftScroll = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft= slider.scrollLeft - 500;
      
    };
     const rightScroll = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft= slider.scrollLeft + 500;
  
    };
    const eachaward = data.map(item => {

        return (

            <div key={item.id}
                className="snap-center hover:scroll-auto flex-shrink-0 w-[220px] h-[80%] mt-20 mb-10 drop-shadow-md rounded-lg transition ease-in-out delay-150 
                 bg-stone-200 hover:-translate-y-1 hover:scale-105 duration-150 relative  border-1 
                    border-gray-300 shadow-md hover:bg-gray-200 hover:shadow-md hover:shadow-cyan-600"
            >
                <div
                    className="rounded-full border-gray-400 border shadow-md  text-sm text-center absolute top-[-2px] left-[-1px] 
                w-20 h-8 font-semibold bg-slate-400 m-3 p-1 text-gray-800"
                >
                  {item.year}
                </div>


                <div className="w-full h-[280px]">
                    <Image
                        className="rounded-md object-cover w-full h-full shadow-lg border border-slate-400"
                        src={item.img}
                        alt={item.img}
                        width={300}
                        height={300}
                    />
                </div>
                <div className="p-1 space-y-2">
                    <h4 className=" text-sm font w-3/3 h-6  text-gray-600 
                              capitalize">
                        {item.title}
                    </h4>
                    
                    <div className="space-y-2">
                        
                        <p className=" overflow-x-visible text-gray-700  font-semibold text-md w-full h-5">
                            {item.description}
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <div className="animate-pulse w-1/3 h-3 bg-sky-300"></div>
                        <div className="animate-pulse w-1/3 h-3 bg-sky-300"></div>
                        <div className="animate-pulse w-1/3 h-3 bg-sky-300"></div>
                    </div>
                </div>




            </div>
        )
    }

    )


    return (
       <div  className=" relative flex w-[95%] md:w-[70%] items-center  justify-center">
          <ChevronLeftIcon onClick={leftScroll} className="  text-cyan-600 hover:text-cyan-500 hover:scale-125 transition duration-300 w-20 cursor-pointer"/> 
        
        <section id='slider' className="w-[100%] h-[100%] scroll-smooth overflow-x-scroll snap-x
                             snap-mandatory  
                            whitespace-nowrap text-gray-800 mt-4 ">
                               
            <div className="flex ml-8 w-full h-full space-x-6 flex-row">
                {eachaward}
            </div>
           
        </section>
         <ChevronRightIcon onClick={rightScroll}  className=" text-cyan-600 hover:text-cyan-500 hover:scale-125 transition duration-300 w-20 cursor-pointer"/> 
        </div>
    )
}
