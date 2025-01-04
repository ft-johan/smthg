"use client";
import React from "react";
import { Vortex } from "@/app/components/ui/vortex";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function moonie() {
  const [moonImage, setMoonImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMoonImage = async () => {
      const API_KEY = "HKAmltdraL0VfCuPXRAz69BBD90oLSGdFmkXQrft"; // Replace with your NASA API Key
      const BASE_URL = "https://api.nasa.gov/planetary/apod";

      try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        const data = await response.json();

        if (data.media_type === "image") {
          setMoonImage(data.url); // Set the fetched image URL
        } else {
          setError("No image found.");
        }
      } catch (err) {
        setError("Failed to fetch the moon image. Please try again.");
      } finally {
        setLoading(false); // Hide loading spinner
      }
    };

    fetchMoonImage(); // Automatically fetch the image when the page loads
  }, []);

  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white space-y-6 p-4">
          <h1 className="text-9xl font-bold text-center">Your look alike</h1>
          <p className="text-xl text-center">
            "Captured by NASA, revealed just for you."
          </p>

          
          {loading && <p className="text-2xl">Loading your photo...</p>}

          {/* Show error if any */}
          {error && <p className="text-xl text-red-500">{error}</p>}

          {/* Display Moon Image */}
          {moonImage && !loading && (
            <div className="mt-6">
              <img
                src={moonImage}
                alt="Moon"
                className=" transition-opacity duration-100 max-w-96 h-auto border-1 border-white rounded-lg "
              />
              <p className="mt-4 text-lg text-center italic">
                "Behold a planetary vision, just for you!"
              </p>
              
              
            </div>
          )}
          <p className="mt-4 text-sm text-center italic">
                "Due to sum technical difficulties the sysytem only can render fraction of your beautiii🥲🥲"
              </p>
        </div>
      </Vortex>
    </div>
  );
}
