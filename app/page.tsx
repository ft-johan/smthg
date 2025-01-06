"use client";
import React from "react";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";


export default function Kromie() {
  const words = ["Magic", "reality", "Truth", "beauty"];
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <div
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-8xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Do U wanna see a
            <FlipWords words={words} /> <br />
            Then click generate
            <div className="m-10 text-2xl flex justify-center text-center">
              <Link href="/loader">
              
                <button
                
                className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              >
                Generate
              </button>
              </Link>
            </div>
          </div>
        </div>
        
             
            
      </div>
    </div>
  );
}
