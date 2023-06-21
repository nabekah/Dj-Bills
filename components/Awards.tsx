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
     
     <div key={item.id} className="relative px-9 mx-6 py-4 my-4 bg-gray-200 border-2 rounded-md shadow-md">
      <div className="border-2 rounded-md text-sm text-center absolute top-[-20px] left-[-20px] w-14 h-10 font-semibold bg-cyan-500 m-2 p-2 text-emerald-800 shadow-2xl shadow-slate-800">
       {item.year}
        </div>
       <h2 className="m-3 font-semibold text-center text-cyan-600 border-y-2 border-gray-100">{item.title}</h2> 
          
         <p className="text-gray-600">{item.description}</p> 
        
        
     </div>
    )
   }

   )
  return (
    <section className='text-gray-800 mt-4'>
      <div className="grid grid-flow-row md:grid-flow-col gap-4 md:grid-cols-3 xl:grid-cols-4">
      {eachaward}
      </div>
      
    </section>
  )
}
