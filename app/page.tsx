"use client";
import React from "react";
import { Vortex } from "@/app/components/ui/vortex";
import { FlipWords } from "./components/ui/flip-words";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import Link from "next/link";
import { useState } from "react";

export default function homie() {
  const words = ["better", "cute", "beautiful", "modern"];
  const [moonImage, setMoonImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [imageVisible, setImageVisible] = useState<boolean>(false); // Track visibility of image

  const fetchMoonImage = async () => {
    const API_KEY = "HKAmltdraL0VfCuPXRAz69BBD90oLSGdFmkXQrft"; // Replace with your NASA API Key
    const BASE_URL = "https://api.nasa.gov/planetary/apod";

    setLoading(true);
    setError(null);
    setImageVisible(false); // Hide the image before fetching

    try {
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
      const data = await response.json();

      if (data.media_type === "image") {
        setMoonImage(data.url);
        setImageVisible(true); // Show the image after it has been fetched
      } else {
        setError("No image found.");
      }
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

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
            Build
            <FlipWords words={words} /> <br />
            websites with Aceternity UI
            <div className="m-10 text-2xl flex justify-center text-center">
             
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  onClick={fetchMoonImage}
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <span>Generate </span>
                </HoverBorderGradient>
              
       
            </div>
          </div>
        </div>
        {imageVisible && moonImage && !loading && (
        <div className="max-h-full">
          <img
            src={moonImage}
            alt="Moon"
            className="max-w-full min-h-full border-4 border-white rounded-xl shadow-lg"
          />
        </div>
        )}
      </Vortex>
    </div>
  );
}
