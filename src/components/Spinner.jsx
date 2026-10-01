import { useState } from "react";

const Spinner = () => {
  const [position, setPosition] = useState({ x: 1100, y: 570 });
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
    // Update position relative to where the cursor moved minus the click offset
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
      className={`w-35 h-auto aspect-square bg-[#1A1A1A] absolute rounded-2xl flex justify-center items-center opacity-85`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="bg-[#555555] w-10 h-auto aspect-square rounded-full flex justify-center items-center relative z-10">
        <div className="bg-[#666666] w-6 h-auto aspect-square rounded-full flex justify-center items-center">
          <div className="bg-[#2A2A2A] w-2 h-auto aspect-square rounded-full"></div>
        </div>
      </div>

      <div
        className="absolute w-full h-auto aspect-square top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center origin-center"
        onClick={(e) => {
        //   e.stopPropagation(); // Prevent the click from propagating to the parent div
          e.currentTarget.style.transform = `rotate(${Math.random()* (0.5 - 0.1) * 720*360+0.1}deg)`; // Rotate the element by a random amount
          e.currentTarget.style.transition = "transform 10s ease-out"; // Smooth transition for the rotation
        }}
      >
        <div className="bg-[#404040] w-10 h-auto aspect-square rounded-full flex justify-center items-center absolute top-3 left-7.5">
          <div className="bg-[#555555] w-6 h-auto aspect-square rounded-full flex justify-center items-center">
            <div className="bg-[#2A2A2A] w-2 h-auto aspect-square rounded-full"></div>
          </div>
        </div>
        <div className="w-4 h-4 absolute top-11 rotate-60 left-13.5 bg-[#404040]"></div>
        <div className="bg-[#404040] w-10 h-auto aspect-square rounded-full flex justify-center items-center absolute bottom-3 left-7.5">
          <div className="bg-[#555555] w-6 h-auto aspect-square rounded-full flex justify-center items-center">
            <div className="bg-[#2A2A2A] w-2 h-auto aspect-square rounded-full"></div>
          </div>
        </div>
        <div className="w-4 h-4 absolute bottom-11 -rotate-60 left-13.5 bg-[#404040]"></div>
        <div className="bg-[#404040] w-10 h-auto aspect-square rounded-full flex justify-center items-center absolute top-1/2 translate-y-[-50%] right-[7px]">
          <div className="bg-[#555555] w-6 h-auto aspect-square rounded-full flex justify-center items-center">
            <div className="bg-[#2A2A2A] w-2 h-auto aspect-square rounded-full"></div>
          </div>
        </div>
        <div className="w-4 h-4 absolute top-1/2 translate-y-[-50%] right-10.5 bg-[#404040]"></div>
      </div>
    </div>
  );
};

export default Spinner;
