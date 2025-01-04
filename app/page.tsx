"use client";
import React from "react";
import { Vortex } from "@/app/components/ui/vortex";
import { FlipWords } from "./components/ui/flip-words";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import Link from "next/link";
import { useState } from "react";

export default function homie() {
  const words = ["Magic", "reality", "Truth", "beauty"];
  
  
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-8xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Do U wanna see a 
            <FlipWords words={words} /> <br />
            Then click generate
            <div className="m-10 text-2xl flex justify-center text-center">
              <Link href="/second-page">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <span>Generate </span>
                </HoverBorderGradient>
                </Link>
       
            </div>
          </div>
        </div>
        
      </Vortex>
    </div>
  );
}
