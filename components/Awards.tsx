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
     <div key={item.id} className="relative px-9 mx-6 py-4 my-4 bg-gray-300">
      <div className="border-2 rounded-md text-sm text-center absolute top-[-20px] left-[-20px] w-14 h-8 font-semibold bg-cyan-200 m-2 p-2 text-gray-500 shadow-2xl shadow-slate-800">
       {item.year}
        </div>
       <h2 className="m-1 font-semibold text-slate-600">{item.title}</h2> 
          
         <p>{item.description}</p> 
        
        
     </div>
    )
   }

   )
  return (
    <section className='text-gray-800 mt-4'>
      <div className="flex flex-row items-center justify-between">
      {eachaward}
      </div>
      
    </section>
  )
}
