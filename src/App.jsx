import "./App.css";
import { useEffect, useRef, useState } from "react";
import Music from "./components/Music";
import Spinner from "./components/Spinner";
import Tree from "./components/Tree";
import Search from "./components/Search";
import CircleClock from "./components/CircleClock";
import Batman from "./components/Batman";
import DigitalClock from "./components/DigitalClock";
import Timer from "./components/Timer";
import Sticker from "./components/Sticker";
import Pattern from "./components/Pattern";
import Spiderman from "./components/Spiderman";
import Setting from "./components/Setting";
import Task from "./components/Task";
import Calender from "./components/Calendar";

function App() {
  // FOR BRAVE https://search.brave.com/search?q=tushar+kumar
  // FOR GOOGLE https://www.google.com/search?q=
  const [isSettingRunning, setIsSettingRunning] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTask, setIsTask] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);
  const [isTree, setIsTree] = useState(true);
  const [isPattern, setIsPattern] = useState(false);
  const [isSticker, setIsSticker] = useState(true);
  const [isBatman, setIsBatman] = useState(false);
  const [isSpiderman, setIsSpiderman] = useState(true);
  const [isDigitalClock, setIsDigitalClock] = useState(true);
  const [isCalender, setIsCalender] = useState(false);
  return (
    <>
      <div
        className={`w-screen h-screen flex flex-col item-center justify-between bg-[url('./assets/abstract.jpg')] bg-cover bg-center overflow-hidden relative`}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none", // For Safari
          msUserSelect: "none", // For older IE/Edge
        }}
      >
        {isTimerRunning ? (
          <Timer />
        ) : (
          <>
            <Search />
            {isTask && <Task />}
            {isSpinner && <Spinner />}
            {isTree && <Tree />}
            {isPattern && <Pattern />}
            {isSticker && <Sticker />}
            {isBatman && <Batman />}
            {isSpiderman && <Spiderman />}
            {isDigitalClock && <DigitalClock />}
            {isCalender && <Calender />}
            <div className=""></div>

            <div className="bottom flex justify-center items-center p-4 mb-5 w-full h-20">
              <div className="flex justify-between items-center w-130 h-full bg-[#ffffff1c] backdrop-blur-[1.5px] rounded-4xl px-5 py-10">
                <div className="w-auto h-13 rounded-full px-4 pr-6 flex gap-4 justify-between items-center bg-[#B8B8B8] backdrop-blur-2xl cursor-pointer shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),inset_5px_5px_15px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.4)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search"
                  >
                    <path d="m21 21-4.34-4.34" />
                    <circle cx="11" cy="11" r="8" />
                  </svg>
                  <label
                    htmlFor="text"
                    className="flex justify-center items-center gap-2"
                  >
                    <h2 className="text-base text-[#0A0A0A]" id="search">
                      Search
                    </h2>
                  </label>
                </div>
                <div
                  className="w-auto h-13 aspect-square rounded-full flex justify-center items-center bg-[#B8B8B8] backdrop-blur-2xl  cursor-pointer shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),inset_5px_5px_15px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.4)]"
                  onClick={() => {
                    window.location.href = "https://www.youtube.com/";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,250,250"
                  >
                    <g
                      fill="#0A0A0A"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeDashoffset="0"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className="w-auto h-13 aspect-square rounded-full flex justify-center items-center bg-[#B8B8B8] backdrop-blur-2xl  cursor-pointer shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),inset_5px_5px_15px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.4)]"
                  onClick={() => {
                    window.location.href = "https://open.spotify.com/";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,250,250"
                  >
                    <g
                      fill="#0A0A0A"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeDashoffset="0"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25.009,1.982c-12.687,0 -23.009,10.322 -23.009,23.009c0,12.687 10.322,23.009 23.009,23.009c12.687,0 23.009,-10.321 23.009,-23.009c0,-12.688 -10.322,-23.009 -23.009,-23.009zM34.748,35.333c-0.289,0.434 -0.765,0.668 -1.25,0.668c-0.286,0 -0.575,-0.081 -0.831,-0.252c-2.473,-1.649 -6.667,-2.749 -10.167,-2.748c-3.714,0.002 -6.498,0.914 -6.526,0.923c-0.784,0.266 -1.635,-0.162 -1.897,-0.948c-0.262,-0.786 0.163,-1.636 0.949,-1.897c0.132,-0.044 3.279,-1.075 7.474,-1.077c3.5,-0.002 8.368,0.942 11.832,3.251c0.69,0.46 0.876,1.391 0.416,2.08zM37.74,29.193c-0.325,0.522 -0.886,0.809 -1.459,0.809c-0.31,0 -0.624,-0.083 -0.906,-0.26c-4.484,-2.794 -9.092,-3.385 -13.062,-3.35c-4.482,0.04 -8.066,0.895 -8.127,0.913c-0.907,0.258 -1.861,-0.272 -2.12,-1.183c-0.259,-0.913 0.272,-1.862 1.184,-2.12c0.277,-0.079 3.854,-0.959 8.751,-1c4.465,-0.037 10.029,0.61 15.191,3.826c0.803,0.5 1.05,1.56 0.548,2.365zM40.725,22.013c-0.373,0.634 -1.041,0.987 -1.727,0.987c-0.344,0 -0.692,-0.089 -1.011,-0.275c-5.226,-3.068 -11.58,-3.719 -15.99,-3.725c-0.021,0 -0.042,0 -0.063,0c-5.333,0 -9.44,0.938 -9.481,0.948c-1.078,0.247 -2.151,-0.419 -2.401,-1.495c-0.25,-1.075 0.417,-2.149 1.492,-2.4c0.185,-0.043 4.573,-1.053 10.39,-1.053c0.023,0 0.046,0 0.069,0c4.905,0.007 12.011,0.753 18.01,4.275c0.952,0.56 1.271,1.786 0.712,2.738z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className="w-auto h-13 aspect-square rounded-full flex justify-center items-center bg-[#B8B8B8] backdrop-blur-2xl  cursor-pointer shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),inset_5px_5px_15px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.4)]"
                  onClick={() => {
                    window.location.href = "https://web.whatsapp.com/";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,250,250"
                  >
                    <g
                      fill="#0A0A0A"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeDashoffset="0"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className="w-auto h-13 aspect-square rounded-full flex justify-center items-center bg-[#B8B8B8] backdrop-blur-2xl  cursor-pointer shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),inset_5px_5px_15px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.4)]"
                  onClick={() => {
                    setIsSettingRunning(!isSettingRunning);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,250,250"
                  >
                    <g
                      fill="#0A0A0A"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeDashoffset="0"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M47.16,21.221l-5.91,-0.966c-0.346,-1.186 -0.819,-2.326 -1.411,-3.405l3.45,-4.917c0.279,-0.397 0.231,-0.938 -0.112,-1.282l-3.889,-3.887c-0.347,-0.346 -0.893,-0.391 -1.291,-0.104l-4.843,3.481c-1.089,-0.602 -2.239,-1.08 -3.432,-1.427l-1.031,-5.886c-0.084,-0.478 -0.499,-0.828 -0.985,-0.828h-5.5c-0.49,0 -0.908,0.355 -0.987,0.839l-0.956,5.854c-1.2,0.345 -2.352,0.818 -3.437,1.412l-4.83,-3.45c-0.399,-0.285 -0.942,-0.239 -1.289,0.106l-3.887,3.887c-0.343,0.343 -0.391,0.883 -0.112,1.28l3.399,4.863c-0.605,1.095 -1.087,2.254 -1.438,3.46l-5.831,0.971c-0.482,0.08 -0.836,0.498 -0.836,0.986v5.5c0,0.485 0.348,0.9 0.825,0.985l5.831,1.034c0.349,1.203 0.831,2.362 1.438,3.46l-3.441,4.813c-0.284,0.397 -0.239,0.942 0.106,1.289l3.888,3.891c0.343,0.343 0.884,0.391 1.281,0.112l4.87,-3.411c1.093,0.601 2.248,1.078 3.445,1.424l0.976,5.861c0.079,0.481 0.496,0.834 0.985,0.834h5.5c0.485,0 0.9,-0.348 0.984,-0.825l1.045,-5.89c1.199,-0.353 2.348,-0.833 3.43,-1.435l4.905,3.441c0.398,0.281 0.938,0.232 1.282,-0.111l3.888,-3.891c0.346,-0.347 0.391,-0.894 0.104,-1.292l-3.498,-4.857c0.593,-1.08 1.064,-2.222 1.407,-3.408l5.918,-1.039c0.479,-0.084 0.827,-0.5 0.827,-0.985v-5.5c0.001,-0.49 -0.354,-0.908 -0.838,-0.987zM25,32c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div
                  className="w-auto h-13 aspect-square rounded-full flex justify-center items-center bg-[#B8B8B8] backdrop-blur-2xl  cursor-pointer shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5),inset_5px_5px_15px_rgba(255,255,255,0.6),0_15px_25px_rgba(0,0,0,0.4)]"
                  onClick={() => {
                    window.location.href = "https://x.com/";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,250,250"
                  >
                    <g
                      fill="#0A0A0A"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeDashoffset="0"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <Setting
              isSettingRunning={isSettingRunning}
              setIsSettingRunning={setIsSettingRunning}
              isTask={isTask}
              setIsTask={setIsTask}
              isSpinner={isSpinner}
              setIsSpinner={setIsSpinner}
              isTree={isTree}
              setIsTree={setIsTree}
              isPattern={isPattern}
              setIsPattern={setIsPattern}
              isSticker={isSticker}
              setIsSticker={setIsSticker}
              isBatman={isBatman}
              setIsBatman={setIsBatman}
              isSpiderman={isSpiderman}
              setIsSpiderman={setIsSpiderman}
              isDigitalClock={isDigitalClock}
              setIsDigitalClock={setIsDigitalClock}
              isCalender={isCalender}
              setIsCalender={setIsCalender}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
