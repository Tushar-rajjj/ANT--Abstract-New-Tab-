import {useState,useEffect} from "react";

const CircleClock = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const [secondAngle,setSecondAngle] = useState();
  const [minuteAngle,setMinuteAngle] = useState();
  const [hourAngle,setHourAngle] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();
      setSecondAngle(seconds * 6);
      setMinuteAngle(minutes * 6 + seconds * 0.1);
      setHourAngle((hours % 12) * 30 + minutes * 0.5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    // <div className="w-35 h-auto aspect-square absolute top-60 left-90 rounded-full flex justify-center items-center bg-[#1A1A1A] shadow-[0_0_25px_0_rgba(0,0,0,1)]">
    //   <div className="w-[70px] h-2.5 absolute top-1/2 left-0 translate-y-[-50%] origin-right rotate-90 px-1">
    //     <div className="w-auto h-full aspect-square rounded-full bg-[#D71921]"></div>
    //   </div>
    //   <div className="w-[70px] h-3.5 rounded-full absolute top-1/2 left-1/2 translate-x-[-90%] flex justify-end items-center translate-y-[-60%] bg-[#E0E0E0] origin-[80%_50%] rotate-45 animate-spin">
    //     {/* <div className="h-full w-auto rounded-full aspect-square bg-amber-600"></div> */}
    //   </div>
    //   {/* <div className="w-[60px] h-1.5 rounded-full absolute top-1/2 left-1/2 translate-x-[-100%] translate-y-[-50%] bg-[#808080] origin-right rotate-45 px-1"></div> */}
    //   {/* <div className="w-3 h-auto aspect-square absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#808080] rounded-full "></div> */}
    // </div>
    <div className="relative w-35 aspect-square rounded-full flex justify-center items-center bg-[#1A1A1A] shadow-[0_0_25px_0_rgba(0,0,0,1)]">
      {/* Minute Hand */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[70px]
          h-2.5
          -translate-x-full
          -translate-y-1/2
          origin-[85%_50%]
          rotate-90
          px-1
        "
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      >
        <div
          className="
            w-auto
            h-full
            aspect-square
            rounded-full
            bg-[#D71921]
          "
          style={{ transform: `rotate(${secondAngle}deg)` }}
        />
      </div>

      {/* Hour Hand */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[50px]
          h-3.5
          -translate-x-full
          -translate-y-[60%]
          origin-[85%_50%]
          rotate-45
          px-1
          bg-[#E0E0E0]
          rounded-full
          
        "
        style={{ transform: `rotate(${hourAngle}deg)` }}
      />

      {/* Second Hand */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[60px]
          h-1.5
          -translate-x-full
          -translate-y-1/2
          origin-[85%_50%]
          rotate-45
          px-1
          bg-[#808080]
          rounded-full
        "
      />

      {/* Center Pivot */}
      {/* <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-4
          h-4
          rounded-full
          bg-[#D71921]
          shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.5),inset_2px_2px_4px_rgba(255,255,255,0.5)]
          z-10
        "
      /> */}
    </div>
  );
};

export default CircleClock;
