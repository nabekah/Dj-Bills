import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { feature } from './assets'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-gray-200 py-24 sm:py-32">
      <div className=" flex flex-row mx-auto max-w-7xl px-6 lg:px-8 gap-12">
        <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative" >
            <Image
                    src={feature}
                    alt="Picture of papa bills"
                    className="w-[30rem] max-w-none sm:w-[40rem] md:-ml-4 lg:-ml-0 group-hover:opacity-75 rounded-lg"
                    width={500}
                    height={500}
                />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none border-indigo-500/100">
        
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-gradient">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Papa Bills is a powerhouse in the Ghanaian entertainment industry. As one of the biggest disc jockeys and radio producers, he has earned a reputation for his unparalleled skills and expertise. His work as a promoter has led the way, showcasing the hottest talent and bringing top-notch events to audiences across the country. Despite his success, Papa Bills remains humble and down-to-earth, a beloved figure among fans and colleagues alike. He has truly cemented his name as a force to be reckoned with, and his contributions to the industry are nothing short of legendary.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
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
