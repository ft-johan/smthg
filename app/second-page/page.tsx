"use client";
import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Moonie() {
  const [moonImage, setMoonImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMoonImage = async () => {
      const API_KEY = "da2oDD7whdY54tUaIh1xf1U5z0H0Q7F2u6pL2PFw"; // Replace with your NASA API Key
      const BASE_URL = "https://api.nasa.gov/planetary/apod";

      try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        const data = await response.json();

        if (data.media_type === "image") {
          setMoonImage(data.url); // Set the fetched image URL
        } else {
          setError("No image found.");
        }
      } finally {
        setLoading(false); // Hide loading spinner
      }
    };

    fetchMoonImage(); // Automatically fetch the image when the page loads
  }, []);

  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
        <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white space-y-6 p-4">
          <h1 className="text-9xl sm:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Your look alike</h1>

          {loading && <p className="text-2xl">Loading your photo...</p>}

          {/* Show error if any */}
          {error && <p className="text-xl text-red-500">{error}</p>}

          {/* Display Moon Image */}
          {moonImage && !loading && (
            <div className="mt-6">
              <p className="text-xl text-center">
              &quot; Captured by NASA, revealed just for you.&quot;
              </p>
              <Image
                src={moonImage}
                alt="Moon"
                width={384}
                height={300}
              />
             
              <p className="mt-4 text-lg text-center">
              &quot;This is what I see when I think of you—breathtaking, timeless, and out of this world &quot;
              </p>
            </div>
          )}
          {moonImage && !loading && (
            <p className="mt-4 text-sm text-center italic">
              &quot; Due to sum technical difficulties the sysytem only can render
              fraction of your beautiii🥲🥲 &quot;
            </p>
          )}
        </div>
      </div>
    </div>
      
    </div>
  );
}
