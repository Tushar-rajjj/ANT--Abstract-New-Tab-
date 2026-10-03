import { useState } from "react";

const Calender = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth - 220,
    y: 0,
  });
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
      className="w-55 h-auto absolute p-5 flex flex-col items-center justify-center rounded-2xl scale-90"
      id="calender"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="top w-full flex items-center justify-center gap-x-3">
        <h3 className="text-[#FAF9F6] text-2xl font-bold">
          {new Date()
            .toLocaleString("default", { month: "long" })
            .toUpperCase()}
        </h3>
        <h3 className="text-[#787974] text-2xl font-bold">
          {new Date().getFullYear()}
        </h3>
      </div>
      <div className="center w-full flex items-center justify-center gap-x-3.5 text-lg text-[#86867E] font-bold">
        <h1>M</h1>
        <h1>T</h1>
        <h1>W</h1>
        <h1>T</h1>
        <h1>F</h1>
        <h1>S</h1>
        <h1>S</h1>
      </div>
      <div className="bottom w-full h-auto grid grid-cols-7 gap-1 mt-2">
        {Array.from(
          {
            length: 35,
            // startDayIndex = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
          },
          (_, i) => (
            <div
              key={i}
              className="w-auto h-6 aspect-square rounded-full border border-[#363730] flex items-center justify-center text-sm text-[#FAF9F6] font-semibold"
              style={{
                backgroundColor:
                  i -
                    new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      1,
                    ).getDay() +
                    2 ===
                  new Date().getDate()
                    ? "#FAF9F6"
                    : (i + 1) % 7 === 0 || (i + 2) % 7 === 0
                      ? "#d95800"
                      : "#292826",
                color:
                  i -
                    new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      1,
                    ).getDay() +
                    2 ===
                  new Date().getDate()
                    ? "#20211C"
                    : "#FAF9F6",
                shadow:
                  i -
                    new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      1,
                    ).getDay() +
                    2 ===
                  new Date().getDate()
                    ? "inset 2px 2px 5px rgba(255,180,80,0.45), " +
                      "inset -6px -7px 12px rgba(80,20,0,0.55), " +
                      "0 3px 6px rgba(0,0,0,0.5)"
                    : (i + 1) % 7 === 0 || (i + 2) % 7 === 0
                      ? "inset 2px 2px 5px rgba(255,180,80,0.45), " +
                        "inset -6px -7px 12px rgba(80,20,0,0.55), " +
                        "0 3px 6px rgba(0,0,0,0.5)"
                      : "inset 2px 2px 5px rgba(255,180,80,0.45), " +
                        "inset -6px -7px 12px rgba(80,20,0,0.55), " +
                        "0 3px 6px rgba(0,0,0,0.5)",
              }}
            >
              {i + 1 >=
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth(),
                  1,
                ).getDay() &&
              i <
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() + 1,
                  0,
                ).getDate() +
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    1,
                  ).getDay() -
                  1 ? (
                <h3 className="leading-none">
                  {i -
                    new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      1,
                    ).getDay() +
                    2}
                </h3>
              ) : null}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Calender;
