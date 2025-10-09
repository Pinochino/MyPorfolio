import { Button } from '@/components/ui/button'
import { Download, Facebook, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const socialIcons: React.ReactElement[] = [<Facebook />, <Mail />, <Github />, <Linkedin />]

const skills = ['Express', 'Nestjs', 'Spring boot', 'NextJS']

const Banner = () => {
  return (
    <div className="mt-5 !bg-red-400 grid md:grid-cols-2 px-[5%] grid-cols-1 h-[100%]">
      <div className="bg-purple-500 col-span-1 px-[5%] py-[5%]">
        <div className="[&]:leading-10">
          <div className="">
            <div className="flex space-x-5 items-center flex-wrap">
              <h5 className="text-2xl">Hi There! </h5>
              <span>🖐️</span>
            </div>
            <div>
              <h5 className="text-2xl">
                Im <span>Tran Dinh Hung</span>
              </h5>
            </div>
            <div className="text-base mt-4 ">Freelancer</div>
          </div>
          <div className="space-x-4 flex my-16 ">
            {socialIcons.map((icon: React.ReactElement, index: number) => (
              <Button key={index} size={'icon'}>
                {icon}
              </Button>
            ))}
          </div>
          <div></div>
          <div className="flex gap-10 [&]:font-medium">
            <Button className="uppercase">my skill 🫰</Button>
            <Button className="uppercase">
              get resume
              <Download />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-green-500 col-span-1 px-[5%] py-[3%]">
        <div className="border rounded-xl">
          <div className="flex space-x-5 px-5 py-3 border-b">
            <div className="rounded-lg bg-red-400 w-2 h-2 "></div>
            <div className="rounded-lg bg-red-400 w-2 h-2 "></div>
            <div className="rounded-lg bg-red-400 w-2 h-2 "></div>
          </div>
          <div className="flex flex-col justify-between px-4 py-4 flex-wrap">
            <div>
              <span className="text-orange-600">const </span>developer = &#123;
            </div>
            <div className="px-[4%]">
              <div>name: &quot;Trần Đình Hùng&quot; ,</div>
              <div className="flex flex-wrap">
                skills: &#91;
                <div className="space-x-2 flex text-purple-800 flex-wrap">
                  {skills.map((skill: string, index: number) => (
                    <span key={index} className="">
                      {' '}
                      &quot;{skill}&quot;,{' '}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-x-2">
                {skills.map((skill: string, index: number) => (
                  <span key={index} className=" text-purple-800">
                    {' '}
                    &quot;{skill}&quot;,{' '}
                  </span>
                ))}
                &#93; ,
              </div>
              <div>
                harderWorker: <span className="text-orange-600">true ,</span>
              </div>
              <div>
                quickLearner: <span className="text-orange-600">true ,</span>
              </div>
              <div>
                problemSolver: <span className="text-orange-600">true ,</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-600">hireable: </span>{' '}
                <span className="text-orange-600"> function</span> &#40;&#41; &#123;
              </div>
            </div>
            <div className="px-[10%]">
              <div className="text-orange-600">return &#123;</div>
              <div>
                <span className="text-blue-500">this.</span>
                <span>
                  harderWorker <span className="text-blue-500">&& </span> ,
                </span>
              </div>
              <div>
                <span className="text-blue-500">this.</span>
                <span>
                  problemSolver <span className="text-blue-500">&& </span>,
                </span>
              </div>
              <div>
                <span className="text-blue-500">this.</span>
                <span>
                  skills.length <span className="text-blue-500">&gt;= </span>
                  <span className="text-orange-600">5</span>
                </span>
              </div>
            </div>
            <div className="px-[6%]">&#125;</div>
            <div className="px-[3%]">&#125;</div>
            <div className="">&#125;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
