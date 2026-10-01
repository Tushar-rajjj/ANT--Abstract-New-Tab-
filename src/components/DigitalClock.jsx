import { useState, useEffect, useRef } from "react";

export default function DigitalClock() {
  const [position, setPosition] = useState({ x: 250, y: 270 });
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

  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours() % 12 || 12);

  const parentRef = useRef(null);

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    if (parentRef.current) {
      const sixthChild = parentRef.current.children[dayOfWeek];
      if (sixthChild) {
        sixthChild.style.backgroundColor = "#CC1B21";
        sixthChild.style.boxShadow =
          "inset -10px -10px 20px rgba(80, 0, 0, 0.5), inset 5px 5px 15px rgba(255, 255, 255, 0.6), 0 15px 25px rgba(0, 0, 0, 0.4)";
      }

      for (let i = 0; i < dayOfWeek; i++) {
        // if (i !== 5) {
        parentRef.current.children[i].style.backgroundColor = "#ffffff32";
        parentRef.current.children[i].style.boxShadow =
          "inset -10px -10px 20px rgba(0, 0, 0, 0.2), inset 5px 5px 15px rgba(255, 255, 255, 0.3)";
        // }
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      //12hour format
      const now = new Date();
      setSeconds(now.getSeconds());
      setMinutes(now.getMinutes());
      setHours(now.getHours() % 12 || 12);
      // console.log(now.getHours()%12||12);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h1 className="text-[31rem] text-nowrap leading-none font-[CustomFont] mix-blend-difference backdrop-blur-[1.5px] bg-gradient-to-b scale-x-116 from-[#f5f7ff59] via-[#d9ddec4d] to-[#9ca3b851] bg-clip-text text-transparent drop-shadow-[inset_0_10px_15px_rgba(0,0,0,0.35)] drop-shadow-[inset_0_0_10px_rgba(220,225,255,0.4)]">
        {hours.toString()}
        <small className="text-[200px] inline-block font-sans transform">
          :
        </small>
        {minutes.toString().padStart(2, "0")}
      </h1>
      <div className="w-full h-auto flex justify-center items-center gap-4 absolute bottom-20 left-0 mix-blend-difference backdrop-blur-[1.5px] bg-gradient-to-b scale-x-116 from-[#f5f7ff59] via-[#d9ddec4d] to-[#9ca3b851] bg-clip-text text-transparent drop-shadow-[inset_0_10px_15px_rgba(0,0,0,0.35)] drop-shadow-[inset_0_0_10px_rgba(220,225,255,0.4)]">
        <span className="text-base font-semibold">S</span>
        <span className="text-base font-semibold">M</span>
        <span className="text-base font-semibold">T</span>
        <span className="text-base font-semibold">W</span>
        <span className="text-base font-semibold">T</span>
        <span className="text-base font-semibold">F</span>
        <span className="text-base font-semibold">S</span>
      </div>
      <div
        className="w-full h-auto flex justify-center items-center gap-[1.15rem] absolute bottom-16 left-0.5"
        ref={parentRef}
      >
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
      </div>
    </div>
  );
}
