import Image from 'next/image'
import { featureLogo } from './assets'
import { features } from './constants'



export default function About() {
  return (
    <div id="about" className="overflow-hidden bg-gray-300 py-24 sm:py-32">
      <div className=" flex flex-col md:flex-row mx-auto max-w-7xl px-6 lg:px-8 gap-2">
        <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative overflow-hidden" >
            <Image
                    src={featureLogo}
                    alt="Picture of papa bills"
                    className="w-[30rem] max-w-none sm:w-[40rem] md:-ml-4 lg:-ml-0 rounded-full opacity-95 hover:opacity-100 shadow-lg hover:shadow-2 shadow-cyan-700 hover:shadow-cyan-600"
                    width={500}
                    height={500}
                />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none border-indigo-500/100">
        
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-gradient">Deploy faster</h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"> <span className='inline-block text-cyan-500 text-center bg-gray-500 px-1 py-0 m-1 rounded-[6px]'>Entertainment at its finest </span></p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Papa Bills is a powerhouse in the Ghanaian entertainment industry. 
                As one of the biggest disc jockeys and radio producers, he has earned a reputation for his 
                unparalleled skills and expertise. His work as a promoter has led the way, showcasing the hottest 
                talent and bringing top-notch events to audiences across the country. Despite his success,
                Papa Bills remains humble and down-to-earth, a beloved figure among fans and colleagues alike. 
                He has truly cemented his name as a force to be reckoned with, and his contributions to the industry 
                are nothing short of legendary.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-cyan-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
