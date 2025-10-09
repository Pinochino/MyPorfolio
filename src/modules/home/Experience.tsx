import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className="bg-green-400">
      <h5 className="text-center text-lg mb-3">Expriences</h5>
      <div className="grid md:grid-cols-2 px-[5%] h-full">
        <div className="col-span-1 bg-orange-500 flex justify-center items-center">
          <Image
            src={
              'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW90czB5d3F2OGVzMWk1bHVoc2gzMms3NTBteGoyOHhpZXhtdTFvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1KllEBZdsLBwt3sDMG/giphy.gif'
            }
            alt="logo"
            width={200}
            height={200}
            className="bg-white"
          />
        </div>
        <div className="col-span-1 bg-orange-500 space-y-6 flex justify-center items-center flex-col">
          <div className="border w-[70%] rounded-xl px-[4%] py-[2%]">
            <h5 className="text-center mb-3">Jan 2024 - Present</h5>
            <div className="flex gap-5 items-center">
              <div>
                <Image
                  src={
                    'https://e7.pngegg.com/pngimages/210/147/png-clipart-computer-icons-study-skills-study-miscellaneous-angle-thumbnail.png'
                  }
                  alt="logo"
                  width={30}
                  height={30}
                  className="bg-transparent"
                />
              </div>
              <div>
                <h5 className="uppercase">Fullstack developer</h5>
                <h5>dawdawd</h5>
              </div>
            </div>
          </div>
          <div className="border  w-[70%] rounded-xl px-[4%] py-[2%]">
            <h5 className="text-center mb-3">Jan 2024 - Present</h5>
            <div className="flex gap-5 items-center">
              <div>
                <Image
                  src={
                    'https://e7.pngegg.com/pngimages/210/147/png-clipart-computer-icons-study-skills-study-miscellaneous-angle-thumbnail.png'
                  }
                  alt="logo"
                  width={30}
                  height={30}
                  className="bg-transparent"
                />
              </div>
              <div>
                <h5 className="uppercase">Fullstack developer</h5>
                <h5>dawdawd</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
