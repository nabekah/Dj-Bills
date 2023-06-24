'use client';
const data =[{
    id:1,
    year:"2018",
    title:"Ghana DJ awards",
    description:"Gospel DJ of the Year",
    img:"i",
    links:"wwww"


},
{   id:2,
    year:"2022",
    title:"Ghana DJ awards",
    description:" Highlife DJ of the Year",
    img:"i",
    links:"wwww"
},
{
    id:3,
    year:"2021",
    title:"ghana DJ awards",
    description:"Best gosple DJ of the Year",
    img:"i",
    links:"wwww"
},
{
    id:4,
    year:"2023",
    title:"Entertainment Awards USA",
    description:"Nominated in Best Radio",
    img:"i",
    links:"wwww"
}]



export default function Awards() {
   const eachaward= data.map( item => {
    
    return(
     
     <div key={item.id} className=" drop-shadow-md rounded-lg transition ease-in-out delay-150  bg-stone-200 hover:-translate-y-1 hover:scale-110 duration-150 relative px-9 mx-6 py-4 my-4 border-2 border-gray-300 shadow-md hover:bg-gray-200 hover:shadow-md hover:shadow-cyan-600">
      <div className="border-2 rounded-md text-sm text-center absolute top-[-20px] left-[-20px] w-14 h-10 font-semibold bg-cyan-600 m-2 p-2 text-emerald-800 shadow-2xl shadow-slate-800">
       {item.year}
        </div>
       
       
            <div className=" mt-4 animate-pulse w-full h-48 bg-slate-400"></div>
            <div className="p-3 space-y-4">
                <div className=" text-sm font-bold w-3/3 h-6  text-cyan-600 border-y-2 border-gray-300 capitalize shadow-md ">
                {item.title}
                </div>
                <div className="flex space-x-4">
                    <div className="animate-pulse w-1/3 h-3 bg-sky-300"></div>
                    <div className="animate-pulse w-1/3 h-3 bg-sky-300"></div>
                    <div className="animate-pulse w-1/3 h-3 bg-sky-300"></div>
                </div>
                <div className="space-y-2">
                    <div className="animate-pulse w-3/4 h-3 bg-slate-300"></div>
                    <div className=" text-cyan-800 text-sm w-full h-5 bg-slate-300">
                    {item.description}
                    </div>
                    <div className="animate-pulse w-2/3 h-3 bg-slate-300"></div>
                </div>
            </div>
         
          
        
        
     </div>
    )
   }

   )


  return (
    <section className="text-gray-800 mt-4 flex md:flex-row flex-col sm:py-16 py-6 justify-center items-center">
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 xl:grid-cols-4 xl:mr-44 xl:ml-44 md:mr-1 md:ml-1">
        {eachaward}
      </div>
    </section>
  )
}
