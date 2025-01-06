"use client";
import React from "react";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import { SparklesCore } from "./components/ui/sparkles";

export default function Kromie() {
  const words = ["Magic", "reality", "Truth", "beauty"];
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="flex items-center flex-col justify-center px-2 md:px-2  py-1 w-full h-full">
          <div className="h-auto flex justify-center items-center px-4">
            <div className="text-8xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              Do U wanna see a
              <FlipWords words={words} /> <br />
              Then click generate
              <div className="m-10 text-2xl flex justify-center text-center">
                <Link href="/loader">
                  <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                    Generate
                  </button>
                </Link>
              </div>
              <div className="w-full h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="mx-auto flex justify-center absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
