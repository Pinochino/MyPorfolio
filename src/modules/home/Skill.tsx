'use client'

import React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { programLangData } from '@/data/MockData'
import Image from 'next/image'

const Skill = () => {
  return (
    <div className="   px-[5%] w-full h-[100%] ">
      <h5 className="text-center text-2xl font-bold text-emerald-800 mb-10">Skills</h5>
      <Carousel
        className="w-full  "
        opts={{
          align: 'start',
          loop: true,

        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 w-full ">
          {programLangData.map((p, index: number) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/6 lg:basis-1/12">
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex gap-2 flex-col aspect-square items-center justify-center p-5">
                    <div className="h-full w-[100%]">
                      <Image
                        src={`${p.img}`}
                        alt="logo"
                        width={40}
                        height={40}
                        className=" h-[100%] w-[100%] object-scale-down "
                      />
                    </div>
                    <div className="text-sm w-20 text-center">{p.label}</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Skill
