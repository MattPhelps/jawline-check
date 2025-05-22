"use client";
import React, { useState, useEffect, useRef } from "react";

interface GonialAngleProps {
  imageUrl: string;
  setAngle: (angle: number) => void;
}

interface Point {
  x: number;
  y: number;
}

const GonialAngle: React.FC<GonialAngleProps> = ({ imageUrl, setAngle }) => {
  const [points, setPoints] = useState<Point[]>([
    { x: 100, y: 100 }, // Point A
    { x: 150, y: 150 }, // Point B (angle vertex)
    { x: 200, y: 200 }, // Point C
  ]);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleDrag = (index: number, clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newPoints = [...points];
    newPoints[index] = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
    setPoints(newPoints);
  };

  const calculateAngle = () => {
    const [A, B, C] = points;
    const AB = { x: A.x - B.x, y: A.y - B.y };
    const CB = { x: C.x - B.x, y: C.y - B.y };

    const dot = AB.x * CB.x + AB.y * CB.y;
    const magAB = Math.hypot(AB.x, AB.y);
    const magCB = Math.hypot(CB.x, CB.y);

    const cosAngle = dot / (magAB * magCB);
    const angle = Math.acos(cosAngle) * (180 / Math.PI);

    return Math.round(angle);
  };

  useEffect(() => {
    setAngle(calculateAngle());
  }, [points]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <img src={imageUrl} alt="Profile" className="max-w-md" />

      {/* SVG for lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <line
          x1={points[0].x}
          y1={points[0].y}
          x2={points[1].x}
          y2={points[1].y}
          stroke="black"
          strokeWidth="4"
        />
        <line
          x1={points[1].x}
          y1={points[1].y}
          x2={points[2].x}
          y2={points[2].y}
          stroke="black"
          strokeWidth="4"
        />
      </svg>

      {/* Dots */}
      {points.map((point, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full w-4 h-4 cursor-pointer ${
  idx === 0
    ? "bg-yellow-400"
    : idx === 1
    ? "bg-blue-400"
    : "bg-red-400"
}`}
          style={{
            left: point.x - 8,
            top: point.y - 8,
            zIndex: 10,
          }}
          onMouseDown={(e) => {
            e.preventDefault();

            const onMove = (moveEvent: MouseEvent) => {
              handleDrag(idx, moveEvent.clientX, moveEvent.clientY);
            };

            const onUp = () => {
              document.removeEventListener("mousemove", onMove);
              document.removeEventListener("mouseup", onUp);
            };

            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseup", onUp);
          }}
        />
      ))}
    </div>
  );
};

export default GonialAngle;
