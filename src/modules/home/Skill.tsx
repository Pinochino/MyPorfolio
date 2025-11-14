'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { programLangData } from '@/data/MockData'
import Image from 'next/image'

const Skill = () => {
  return (
    <div className="px-[5%] w-full h-[100%]">
      <h5 className="text-center text-2xl font-bold text-emerald-800 mb-10">Skills</h5>
      <Carousel
        className="w-full"
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
        <CarouselContent className="-ml-1 w-full">
          {programLangData.map((p, index) => (
            <CarouselItem
              key={index}
              className="
    pl-1
    flex-[0_0_auto]
    w-1/2          /* mobile 2 item */
    sm:w-1/3       /* small screens 3 item */
    md:w-1/4       /* medium 4 item */
    lg:basis-[12.5%] /* large 8 item: 100/8 = 12.5% */
  "
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex gap-2 flex-col aspect-square items-center justify-center p-5">
                    <div className="h-full w-full">
                      <Image
                        src={p.img}
                        alt={p.label}
                        width={40}
                        height={40}
                        className="h-full w-full object-scale-down"
                      />
                    </div>
                    <div className="text-sm text-center w-full">{p.label}</div>
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
