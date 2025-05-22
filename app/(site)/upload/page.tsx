"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import UploadDropzone from "@/app/components/UploadDropZone";
import GonialAngle from "@/app/components/GonialAngle";
import { Info } from "lucide-react";

function UploadPageContent() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");
  const [angle, setAngle] = useState<number | null>(null);

  if (!imageUrl) {
    return (
      <div className="hero min-h-screen -mt-40 flex items-center justify-center">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-center text-3xl lg:text-4xl font-bold mb-10">
            Upload a side profile image showing your jawline
          </h1>
          <UploadDropzone />
        </div>
      </div>
    );
  }

  return (
    <section className="hero flex flex-col items-center justify-start min-h-screen pt-0 lg:pt-0">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-4xl mt-4 lg:mt-0">
        <div className="lg:sticky top-0 flex-shrink-0">
          <GonialAngle imageUrl={imageUrl} setAngle={setAngle} />

<div className="mt-4 flex justify-center">
  <div className="relative">
    {/* Info icon with group */}
    <div className="group w-6 h-6 text-gray-700 cursor-pointer flex items-center justify-center">
      <Info className="group-hover:text-black transition-colors" />

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 text-sm text-black bg-white p-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
        <strong>Dot placement guide:</strong>
        <ul className="mt-1 list-disc list-inside">
          <li><span className="text-yellow-400 font-bold">Yellow and Blue dot:</span> Place along your Ramus bone (back of jaw)</li>
          <li><span className="text-blue-400 font-bold">Blue and Red dot:</span> Place under your jawline</li>
        </ul>
      </div>
    </div>
  </div>
</div>
        </div>



        <div className="flex-1 overflow-y-auto max-h-screen px-4 lg:pl-8 scroll-smooth">
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-3xl font-bold mb-4">Jawline Angle:</h2>
            <p
              className={`text-4xl text-center font-bold ${
                angle === null
                 ? "text-red-500" : angle < 90
                  ? "text-red-500" : angle <= 120
                  ? "text-green-500" : angle <= 130
                  ? "text-yellow-500" : "text-red-500"
              }`}
            >
              {angle !== null ? `${angle}°` : "Move the dots to calculate angle"}
            </p>

            {angle !== null && angle < 90 && (
              <p className="text-red-500 text-center mt-2">
               Ughhhh wtf.
              </p>
            )}

            {angle !== null && angle >= 90 && angle <= 120 &&  (
              <p className="text-green-500 text-center mt-2">
                 Good gonial angle.
              </p>
            )}
            {angle !== null && angle >= 120 && angle <= 130 && (
              <p className="text-yellow-500 text-center mt-2">
                Not great, but ok.
              </p>
            )}
            {angle !== null && angle > 130 && (
              <p className="text-red-500 text-center mt-2">
                We've got work to do.
              </p>
            )}
          </div>
        </div>
      </div>
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
