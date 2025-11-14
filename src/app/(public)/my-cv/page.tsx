import Image from "next/image";
import React from "react";

export default function MyCVPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6 mt-20">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border w-[60%] h-[60%]">
        <Image
          src="/images/user.jpg"   // 🟢 đặt ảnh CV vào public và sửa tên file
          alt="CV Preview" 
          className="w-full max-w-4xl mx-auto"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
