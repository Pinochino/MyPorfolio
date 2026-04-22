import Image from "next/image";
import React from "react";

export default function MyCVPage() {
  return (
    <section className="px-[5%] pb-16 pt-28">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">My CV</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Professional resume preview. You can also download it from the home page.
        </p>
      </div>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950">
        <Image
          src="/images/user.jpg"
          alt="CV Preview"
          className="h-auto w-full rounded-xl"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
