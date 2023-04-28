import React from "react";
import "./lighting.css";
export default function Lighting() {
  return (
    <div className="circles-container">
      <div className="circle c-1">
        <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]"></div>
      </div>
      <div className="circle c-2">
        <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]"></div>
      </div>
      <div className="circle c-3">
        <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]"></div>
      </div>
    </div>
  );
}
