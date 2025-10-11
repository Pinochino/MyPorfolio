import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <section className="bg-gradient-to-b  !my-20">
      <h2 className="text-center text-2xl font-bold text-emerald-800 mb-10">
        Experiences
      </h2>

      <div className="grid md:grid-cols-2 gap-10 px-[8%] items-center">
        {/* LEFT - GIF IMAGE */}
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW90czB5d3F2OGVzMWk1bHVoc2gzMms3NTBteGoyOHhpZXhtdTFvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1KllEBZdsLBwt3sDMG/giphy.gif"
              alt="Experience GIF"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-8 flex flex-wrap justify-center items-center">
          <div className="bg-white border  rounded-2xl shadow-md p-6 hover:shadow-lg transition-all w-[70%]">
            <h5 className="text-center text-emerald-600 font-semibold mb-4">
              Jan 2024 - Present
            </h5>
            <div className="flex items-center gap-4">
              <Image
                src="https://e7.pngegg.com/pngimages/210/147/png-clipart-computer-icons-study-skills-study-miscellaneous-angle-thumbnail.png"
                alt="Work Icon"
                width={40}
                height={40}
              />
              <div>
                <h4 className="uppercase font-bold text-emerald-800">
                  Fullstack Developer
                </h4>
                <p className="text-gray-600 text-sm">Developing web applications using Next.js and Node.js</p>
              </div>
            </div>
          </div>

          <div className="bg-white border  rounded-2xl shadow-md p-6 hover:shadow-lg transition-all w-[70%]">
            <h5 className="text-center text-emerald-600 font-semibold mb-4">
              May 2023 - Dec 2023
            </h5>
            <div className="flex items-center gap-4">
              <Image
                src="https://e7.pngegg.com/pngimages/210/147/png-clipart-computer-icons-study-skills-study-miscellaneous-angle-thumbnail.png"
                alt="Work Icon"
                width={40}
                height={40}
              />
              <div>
                <h4 className="uppercase font-bold text-emerald-800">
                  Frontend Developer
                </h4>
                <p className="text-gray-600 text-sm">Worked with React, TailwindCSS, and TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
