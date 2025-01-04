"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "@/app/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useRouter } from "next/navigation"; // Use the router to programmatically navigate


const loadingStates = [
  {
    text: "Acquiring data for the bueaty",
  },
  {
    text: "Searching whole universe",
  },
  {
    text: "Subject is too beautiful to search",
  },
  {
    text: "Found the fraction of the beauti",
  },
];

export default function homie() {
  const router = useRouter(); // Next.js router instance

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop the loader
      router.push("/second-page"); // Navigate to the next page
    }, 7000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, [router]);

  return (
<div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={1800} />
 
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      
 
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
