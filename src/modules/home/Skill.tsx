'use client'

import React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Skill = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    duration: 1000,
    watchDrag: false,
  })

  return (
    <div className=" !bg-red-400  px-[5%] w-full h-[100%]">
      <h5 className="text-center text-xl my-2">Skills</h5>
      <Carousel
        className="w-full max-w-md bg-green-500 min-w-[100%]"
        ref={emblaRef}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1 w-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/6 lg:basis-1/12">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
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
