'use client';
const data =[{
    id:1,
    year:"2018",
    title:"Ghana DJ awards",
    description:"Gospel DJ of the Year"

},
{   id:2,
    year:"2022",
    title:"Ghana DJ awards",
    description:" Highlife DJ of the Year and Record Promoter of the Year"
},
{
    id:3,
    year:"2021",
    title:"ghana DJ awards",
    description:"best gosple ghana"
},
{
    id:4,
    year:"2023",
    title:"Entertainment Awards USA",
    description:"nominated in Best Radio/TV Producer of the Year category"
}]



export default function Awards() {
   const eachaward= data.map( item => {
    
    return(
     
     <div key={item.id} className="relative px-9 mx-6 py-4 my-4 bg-stone-200 border-2 rounded-md shadow-md">
      <div className="border-2 rounded-md text-sm text-center absolute top-[-20px] left-[-20px] w-14 h-10 font-semibold bg-cyan-600 m-2 p-2 text-emerald-800 shadow-2xl shadow-slate-800">
       {item.year}
        </div>
       <h2 className="m-3 font-semibold text-lg text-center text-cyan-600 border-y-2 border-gray-200 capitalize shadow-sm">{item.title}</h2> 
          
         <p className="text-gray-700 overflow-auto">{item.description}</p> 
        
        
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
