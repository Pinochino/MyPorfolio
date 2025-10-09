'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, SquareMenu } from 'lucide-react'
const Projects = () => {
  return (
    <div className="bg-red-400 px-[5%]">
      <div className="text-center my-4">
        <h5 className="text-xl">My Recent Works</h5>
        <p>Here are a few projects i&#039;ve worked on recently</p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 9 }).map((_, index: number) => (
          <Card key={index} className="col-span-1 w-[80%]">
            <CardHeader className="!p-0">
              <Image
                src={
                  'https://hoidanit.vn/_next/image?url=https%3A%2F%2Fhoidanit.vn%2Fimages%2F2610799786e82f64a8aea3b0ecd23b55c.png&w=1920&q=75'
                }
                alt="logo"
                width={800}
                height={800}
                className="rounded-tl-lg rounded-tr-lg"
              />
            </CardHeader>
            <CardContent className="mt-2 w-auto">
              <h5 className="font-medium">React Native</h5>
              <p className="text-sm w-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum deserunt quia,
                reprehenderit aut soluta temporibus voluptates neque ducimus, animi omnis
                consequatur quos pariatur voluptatem at eaque odit ipsam autem?
              </p>
            </CardContent>
            <CardFooter className="gap-4">
              <Button>
                <Github />
                <span>Github</span>
              </Button>
              <Button>
                <SquareMenu />
                <span>Live Demo</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects
