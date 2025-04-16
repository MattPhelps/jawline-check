"use client";
import React, { useState, useRef, useEffect } from "react";
import { Info } from "lucide-react";

export default function NerdNeckAngle({
  imageUrl,
  setAngle,
}: {
  imageUrl: string;
  setAngle: (value: number) => void;
}) {
    const [c7, setC7] = useState({ x: 100, y: 100 });
    const [tragus, setTragus] = useState({ x: 100, y: 20 }); // Same X, higher Y = vertical line    
  const [dragging, setDragging] = useState<null | "c7" | "tragus">(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [flipped, setFlipped] = useState(false);


  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging || !imageRef.current) return;

    const bounds = imageRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    if (dragging === "c7") setC7({ x, y });
    if (dragging === "tragus") setTragus({ x, y });
  };

  const handleMouseUp = () => setDragging(null);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  useEffect(() => {
    // Recalculate angle whenever dot positions change
    const vectorA = { x: 1, y: 0 };
    const vectorB = { x: tragus.x - c7.x, y: tragus.y - c7.y };

    const dotProduct = vectorA.x * vectorB.x + vectorA.y * vectorB.y;
    const magnitudeA = Math.sqrt(vectorA.x ** 2 + vectorA.y ** 2);
    const magnitudeB = Math.sqrt(vectorB.x ** 2 + vectorB.y ** 2);

    const cosineTheta = dotProduct / (magnitudeA * magnitudeB);
    const angleRadians = Math.acos(cosineTheta);
    const angleDegrees = (angleRadians * 180) / Math.PI;

    setAngle(Math.round(angleDegrees));
  }, [c7, tragus, setAngle]);

  return (
    <div className="relative inline-block max-w-[400px] mt-10"> {/* increased size & spacing */}
  <img
    ref={imageRef}
    src={imageUrl}
    alt="Profile"
    className="rounded-lg w-full h-auto"
  />

<div className="mt-4 flex justify-center">
  <div className="relative">
    {/* Info icon with group */}
    <div className="group w-6 h-6 text-gray-700 cursor-pointer flex items-center justify-center">
      <Info className="group-hover:text-black transition-colors" />

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 text-sm text-black bg-white p-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
        <strong>Dot placement guide:</strong>
        <ul className="mt-1 list-disc list-inside">
          <li><span className="text-yellow-400 font-bold">Yellow dot:</span> Middle of ear (tragus)</li>
          <li><span className="text-blue-400 font-bold">Blue dot:</span> Base of neck (C7)</li>
        </ul>
      </div>
    </div>
  </div>
</div>


      {/* Line from C7 to Tragus */}
      <svg
  className="absolute top-0 left-0 pointer-events-none"
  width="100%"
  height="100%"
  style={{ position: "absolute" }}
>
  <line
    x1={c7.x}
    y1={c7.y}
    x2={tragus.x}
    y2={tragus.y}
    stroke="black"
    strokeWidth="4"
  />
  <line
    x1={c7.x}
    y1={c7.y}
    x2={c7.x + 140}
    y2={c7.y}
    stroke="black"
    strokeWidth="4"
  />
</svg>


      {/* C7 dot (Blue) */}
      <div
        onMouseDown={() => setDragging("c7")}
        style={{ left: c7.x, top: c7.y }}
        className="absolute w-4 h-4 bg-blue-500 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
        title="C7"
      />

      {/* Tragus dot (Yellow) */}
      <div
        onMouseDown={() => setDragging("tragus")}
        style={{ left: tragus.x, top: tragus.y }}
        className="absolute w-4 h-4 bg-yellow-400 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
        title="Tragus"
      />
    </div>

    
  );
}
