"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import UploadDropzone from "@/app/components/UploadDropZone";
import NerdNeckAngle from "@/app/components/NerdNeckAngle"; // Adjust path as needed

function UploadPageContent() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");
  const [angle, setAngle] = useState<number | null>(null);

  if (!imageUrl) {
    return (
      <div className="hero min-h-screen -mt-40 flex items-center justify-center">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-center text-3xl lg:text-4xl font-bold mb-10">
            Upload an image of your side profile
          </h1>
          <UploadDropzone />
        </div>
      </div>
    );
  }

  return (
    <section className="hero flex flex-col items-center justify-start min-h-screen pt-0 lg:pt-0">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-4xl mt-4 lg:mt-0">
        {/* Image + interactive dots */}
        <div className="lg:sticky top-0 flex-shrink-0">
          <NerdNeckAngle imageUrl={imageUrl} setAngle={setAngle} />
        </div>

        {/* Angle display */}
        <div className="flex-1 overflow-y-auto max-h-screen px-4 lg:pl-8 scroll-smooth">
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-3xl font-bold mb-4">Craniovertebral Angle:</h2>
            <p
  className={`text-4xl text-center font-bold ${
    angle === null
      ? "text-secondary"
      : angle < 45
      ? "text-red-500"
      : angle < 55
      ? "text-yellow-500"
      : "text-green-500"
  }`}
>
  {angle !== null ? `${angle}°` : "Move the dots to calculate angle"}
</p>

            {angle !== null && angle < 45 && (
              <p className="text-red-500 text-center font-bold text-6xl mt-2">
                NERD NECK
              </p>
            )}
            {angle !== null && angle >= 45 && angle < 55 && (
              <p className="text-md text-center mt-2">
                Mild forward head posture.
              </p>
            )}
            {angle !== null && angle >= 55 && (
              <p className="text-md text-center mt-2">
                Your posture looks great!
              </p>
            )}
          </div>
        </div>
      </div>
{/* 
      <a href="/upload">
        <button className="btn btn-primary btn-outline btn-lg text-white mt-6">
          Estimate Again<span className="text-lg">→</span>
        </button>
      </a> */}
    </section>
  );
}

export default function UploadPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <UploadPageContent />
    </Suspense>
  );
}
