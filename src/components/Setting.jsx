import { useEffect, useRef, useState } from "react";
import batman1 from "../assets/batman1.png";
import treeImage from "../assets/tree.webp";
import first from "../assets/3.webp";
import calendar from "../assets/calender.png";

const Setting = (props) => {
  return (
    <div
      className="w-1/3 h-full min-h-0 rounded-4xl flex flex-col items-center justify-start p-8 bg-[#c1c1c10d] backdrop-blur-lg absolute top-0 right-0 z-100"
      style={{ display: props.isSettingRunning ? "flex" : "none" }}
    >
      <div className="w-full h-auto flex justify-between items-center">
        <h2 className="text-4xl font-semibold text-[#ffffff90]">Settings</h2>
        <button
          className="text-gray-500 hover:text-gray-700 hover:cursor-pointer transition duration-300 ease-in-out"
          onClick={() => props.setIsSettingRunning(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-full min-h-0 flex-1 flex flex-col items-start justify-start mt-4">
        <div className="w-full min-h-0 flex-1 flex flex-col items-start justify-start">
          <label htmlFor="theme" className="text-gray-500 mb-2 text-lg">
            Widgets
          </label>
          <div
            id="widgets"
            className="w-full min-h-0 flex-1 pt-3 scrollbar-none relative overflow-y-auto overscroll-contain grid grid-cols-2 gap-8 gap-x-12"
          >
            <Spinner
              isSpinner={props.isSpinner}
              setIsSpinner={props.setIsSpinner}
            />
            <Tree isTree={props.isTree} setIsTree={props.setIsTree} />
            <Pattern
              isPattern={props.isPattern}
              setIsPattern={props.setIsPattern}
            />
            <Batman isBatman={props.isBatman} setIsBatman={props.setIsBatman} />
            {/* <Spiderman isSpiderman={props.isSpiderman} setIsSpiderman={props.setIsSpiderman} />  */}
            <DigitalClock
              isDigitalClock={props.isDigitalClock}
              setIsDigitalClock={props.setIsDigitalClock}
            />
            <Calendar
              isCalender={props.isCalender}
              setIsCalender={props.setIsCalender}
            />
            <Sticker
              isSticker={props.isSticker}
              setIsSticker={props.setIsSticker}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Spinner = (props) => {
  return (
    <div
      className={`w-35 h-auto aspect-square bg-[#1A1A1A] relative rounded-2xl flex justify-center items-center`}
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
          e.currentTarget.style.transform = `rotate(${Math.random() * (0.5 - 0.1) * 720 * 360 + 0.1}deg)`; // Rotate the element by a random amount
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
      <div
        className="w-5 p-0.5 h-auto aspect-square rounded-full flex justify-center items-center bg-[#664a4a] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          props.setIsSpinner(!props.isSpinner);
        }}
      >
        {props.isSpinner ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="20"
            // height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>
    </div>
  );
};

const DigitalClock = (props) => {
  return (
    <div className="w-35 relative flex flex-col justify-center items-center transform translate-x-9">
      <h1 className="text-[15rem] text-nowrap leading-none font-[CustomFont] mix-blend-difference bg-gradient-to-b scale-x-116 from-[#f5f7ff59] via-[#d9ddec4d] to-[#9ca3b851] bg-clip-text text-transparent drop-shadow-[inset_0_10px_15px_rgba(0,0,0,0.35)] drop-shadow-[inset_0_0_10px_rgba(220,225,255,0.4)]">
        {1}
        <small className="text-[200px] inline-block font-sans transform">
          :
        </small>
        {20}
      </h1>
      <div className="w-full h-auto flex justify-center items-center gap-2 absolute bottom-8 left-0 mix-blend-difference bg-gradient-to-b scale-x-116 from-[#f5f7ff59] via-[#d9ddec4d] to-[#9ca3b851] bg-clip-text text-transparent drop-shadow-[inset_0_10px_15px_rgba(0,0,0,0.35)] drop-shadow-[inset_0_0_10px_rgba(220,225,255,0.4)]">
        <span className="text-base font-semibold">S</span>
        <span className="text-base font-semibold">M</span>
        <span className="text-base font-semibold">T</span>
        <span className="text-base font-semibold">W</span>
        <span className="text-base font-semibold">T</span>
        <span className="text-base font-semibold">F</span>
        <span className="text-base font-semibold">S</span>
      </div>
      <div
        className="w-full h-auto flex justify-center items-center gap-2 absolute bottom-5 left-0.5"
        // ref={parentRef}
      >
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
        <div className="w-3 h-auto aspect-square rounded-full bg-[#ffffff32] backdrop-blur-[1.5px]"></div>
      </div>
      <div
        className="w-5 p-0.5 h-auto aspect-square rounded-full flex justify-center items-center bg-[#664a4a] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          console.log("DigitalClock clicked");
          props.setIsDigitalClock(!props.isDigitalClock);
        }}
      >
        {props.isDigitalClock ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="20"
            // height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>
    </div>
  );
};

const Batman = (props) => {
  return (
    <div className="w-35 h-auto aspect-square rounded-2xl flex justify-center items-center relative">
      <img
        src={batman1}
        alt="batman"
        className="w-full h-auto object-center object-cover scale-125"
        style={{ filter: "drop-shadow(5px 5px 20px rgba(141,86,225,0.8))" }}
      />
      <div
        className="w-5 p-0.5 h-auto aspect-square rounded-full flex justify-center items-center bg-[#664a4a] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] cursor-pointer  "
        onClick={(e) => {
          e.stopPropagation();
          props.setIsBatman(!props.isBatman);
        }}
      >
        {props.isBatman ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="20"
            // height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>
    </div>
  );
};

const Tree = (props) => {
  return (
    <div
      className="w-35 h-auto aspect-square rounded-2xl flex justify-center items-center relative"
      onClick={(e) => {
        e.stopPropagation();
        props.setIsTree(!props.isTree);
      }}
    >
      <img
        src={treeImage}
        alt="tree"
        className="w-full h-auto object-center object-cover scale-125"
        style={{ filter: "drop-shadow(5px 5px 20px rgba(141,86,225,0.8))" }}
      />
      <div className="w-5 p-0.5 h-auto aspect-square rounded-full flex justify-center items-center bg-[#664a4a] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] cursor-pointer  ">
        {props.isTree ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="20"
            // height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>
    </div>
  );
};

const Pattern = (props) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const parentRef = useRef(null);
  const [red, setRed] = useState([
    128, 150, 159, 160, 180, 181, 190, 191, 192, 210, 211, 212, 221, 222, 223,
    224, 240, 241, 242, 243, 252, 255, 256, 270, 271, 274, 283, 287, 288, 300,
    301, 305, 314, 319, 320, 330, 331, 336, 345, 346, 351, 352, 360, 361, 366,
    367, 377, 383, 384, 390, 391, 397, 408, 409, 415, 416, 420, 421, 427, 428,
    439, 440, 446, 447, 451, 452, 458, 459, 471, 472, 477, 478, 482, 483, 488,
    489, 503, 504, 505, 506, 507, 508, 514, 515, 516, 517, 518, 519, 535, 536,
    537, 538, 546, 547, 548, 549,
  ]);
  const [white, setWhite] = useState([
    253, 254, 272, 273, 284, 285, 286, 302, 303, 304, 315, 316, 317, 318, 332,
    333, 334, 335, 347, 348, 349, 350, 362, 363, 364, 365, 378, 379, 380, 381,
    382, 392, 393, 394, 395, 396, 410, 411, 412, 413, 414, 422, 423, 424, 425,
    426, 441, 442, 443, 444, 445, 453, 454, 455, 456, 457, 473, 474, 475, 476,
    484, 485, 486, 487,
  ]);

  useEffect(() => {
    if (parentRef.current) {
      red.forEach((index) => {
        const child = parentRef.current.children[index];
        if (child) {
          child.style.backgroundColor = "#C60000";
        }
      });
      white.forEach((index) => {
        const child = parentRef.current.children[index];
        if (child) {
          child.style.backgroundColor = "#FFFFFF";
        }
      });
    }
  }, [red, white]);
  return (
    <div
      className="pattern w-auto h-auto grid grid-cols-31 grid-rows-22 gap-0 rounded-3xl opacity-75 relative"
      ref={parentRef}
    >
      {Array.from({ length: 31 * 22 }).map((_, index) => (
        <div
          key={index}
          onClick={(e) => {
            setIsDrawing(!isDrawing);
          }}
          onMouseMove={(e) => {
            console.log("Mouse moved over div", index);
            if (isDrawing) {
              e.target.style.backgroundColor = "#fff";
            }
          }}
          className="w-1.5 h-1.5 bg-[#383838] rounded-[2px]"
        ></div>
      ))}
      <div
        className="w-5 p-0.5 h-auto aspect-square rounded-full flex justify-center items-center bg-[#664a4a] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          props.setIsPattern(!props.isPattern);
        }}
      >
        {props.isPattern ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="20"
            // height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>
    </div>
  );
};

const Sticker = (props) => {
  return (
    <div className="w-35 h-auto aspect-square rounded-2xl flex justify-center items-center relative">
      <img
        src={first}
        alt="batman"
        className="w-full h-auto object-center object-cover opacity-75 scale-125"
        style={{ filter: "drop-shadow(5px 5px 20px rgba(141,86,225,0.8))" }}
      />
      <div
        className="w-5 p-0.5 h-auto aspect-square rounded-full flex justify-center items-center bg-[#664a4a] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          props.setIsSticker(!props.isSticker);
        }}
      >
        {props.isSticker ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="20"
            // height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>
    </div>
  );
};

const Calendar = (props) => {
  return (
    <div className="w-40 h-auto aspect-square rounded-2xl flex justify-center items-center relative">
      <img
        src={calendar}
        alt="batman"
        className="w-full h-auto object-center object-cover opacity-75 scale-125"
        style={{ filter: "drop-shadow(5px 5px 20px rgba(141,86,225,0.8))" }}
      />
      <div
        className="w-5 p-0.5 h-auto aspect-square rounded-full flex justify-center items-center bg-[#664a4a] absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          props.setIsCalender(!props.isCalender);
        }}
      >
        {props.isCalender ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="20"
            // height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            // height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus preview-icon w-full h-full"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Setting;
