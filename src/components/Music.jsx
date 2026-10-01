import {useState} from "react";

const Music = (props) => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
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
      className={`w-35 h-auto aspect-square bg-[#5E5E62] absolute rounded-2xl flex justify-center items-center`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="w-25 h-auto aspect-square rounded-full bg-[#0D0D0D] shadow-[0_0_25px_0_rgba(0,0,0,1)] flex justify-center items-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-30 h-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <circle
            r="45"
            cx="50%"
            cy="50%"
            stroke="#151515"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-30 h-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <circle
            r="40"
            cx="50%"
            cy="50%"
            stroke="#151515"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-30 h-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <circle
            r="35"
            cx="50%"
            cy="50%"
            stroke="#151515"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-30 h-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <circle
            r="30"
            cx="50%"
            cy="50%"
            stroke="#151515"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-30 h-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <circle
            r="27.5"
            cx="50%"
            cy="50%"
            stroke="#151515"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-30 h-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <circle
            r="25"
            cx="50%"
            cy="50%"
            stroke="#151515"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
        <div className="w-12 h-auto aspect-square rounded-full overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/I/71myg2J4ZFL.jpg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <div className="absolute top-6 right-10 w-auto h-auto">
        <div className="w-2 h-auto aspect-square rounded-full bg-[#5E5E62]"></div>
        <div className="absolute top-[7px] -right-[30px] w-8 origin-left h-0.5 rounded-xs rotate-63 bg-[#5E5E62]"></div>
        <div className="absolute top-9 left-[18px] bg-[#A09C9F] w-1.5 h-1 rotate-63 rounded-xs shadow-[0_0_5px_0_rgba(120,76,89,1)]"></div>
      </div>
    </div>
  );
};

export default Music;
