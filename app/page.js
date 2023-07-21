"use client";
import Image from "next/image";
import fond from "./Image/fond.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content flex-col md:flex-row">
          <Image className="rounded-md shadow-md w-full md:w-1/2" src={fond} alt="fond rose" width={854} height={854} />
          <div className="w-full md:w-1/2">
            <h1 className="py-3 text-5xl font-bold text-pink-400">
              Hello world !
            </h1>
            <h2 className="pb-6">
              This is a project to learn Next.js with Tailwindcss & DaisyUI.
            </h2>
            <Link href="/contact"><span className="btn btn-secondary w-32">Learn more</span></Link>
          </div>
        </div>
      </section>
      <section className="text-center pt-6">
        <h3 className="text-xl text-pink-400 p-6 m-6">Next.js advantages</h3>
        <div className="flex w-full justify-around">
          <div>Argument 1</div>
          <div>Argument 2</div>
          <div>Argument 3</div>
        </div>
      </section>
    </main>
  );
}
