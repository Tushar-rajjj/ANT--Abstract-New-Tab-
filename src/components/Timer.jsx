import React from "react";

const Timer = () => {
  const [time, setTime] = React.useState(1800);
  const [isRunning, setIsRunning] = React.useState(false);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (!isRunning) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="w-full h-full flex flex-col justify-end items-center gap-50 backdrop-blur-3xl bg-[#0000004d]">
      <div className="container w-full h-60 flex justify-around items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-[500px] inline-block leading-none font-[CustomFont] mix-blend-difference  bg-linear-to-b scale-x-150 from-[#f5f7ff59] via-[#d9ddec4d] to-[#9ca3b851] bg-clip-text text-transparent drop-shadow-[inset_0_10px_15px_rgba(0,0,0,0.35)] drop-shadow-[inset_0_0_10px_rgba(220,225,255,0.4)]">
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
          <small className="text-[200px] inline-block font-sans transform ">
            :
          </small>
          {(time % 60).toString().padStart(2, "0")}
        </h3>
      </div>
      <div className="flex gap-4 mb-30 z-10">
        <button
          className="bg-[#ffffff1a] hover:bg-[#ffffff2a] flex gap-2 justify-center items-center text-2xl text-white font-semibold py-2 px-6 rounded-full cursor-pointer"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? (
            <svg
              fill="#fff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="20px"
              viewBox="0 0 277.338 277.338"
              xmlSpace="preserve"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665 c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"></path>{" "}
                  <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652 V45.665C263.109,20.454,246.394,0,225.78,0z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          ) : (
            <svg
              fill="#ffffff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="20px"
              viewBox="0 0 163.861 163.861"
              xmlSpace="preserve"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275 c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          )}
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
