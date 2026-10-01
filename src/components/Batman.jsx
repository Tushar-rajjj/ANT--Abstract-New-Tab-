import { useState } from "react";
import batman from "../assets/batman.svg";
import batman1 from "../assets/batman1.png";

const Batman = () => {
  const [position, setPosition] = useState({ x: 650, y: 30 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  return (
    <div
      className="w-60 h-auto aspect-square absolute rounded-2xl flex justify-center items-center z-0"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img
        src={batman1}
        alt="batman"
        className="w-full h-auto object-center object-cover"
        style={{ filter: "drop-shadow(5px 5px 20px rgba(141,86,225,0.8))" }}
      />
    </div>
  );
};

export default Batman;
