import { useState,useRef,useEffect } from "react";

const Task = () => {
  const [task, setTask] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [month, setMonth] = useState("09");
  const [year, setYear] = useState("2026");
  let arr = useRef([]);
  useEffect(() => {
    const daysInCurrentMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0,
    ).getDate();
    for (let i = 0; i < daysInCurrentMonth; i++) {
      arr.current.push({
        id: i + 1,
        date: `${year}-${month}-${String(i + 1).padStart(2, "0")}`,
        questionsCompleted: 0,
      });
    }
    setTask(arr.current);
    console.log(arr.current);
    return;
  }, [month, year]);

  const [position, setPosition] = useState({ x: 250, y: 650 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Calculate the distance between the click point and the top-left corner of the div
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
      className={`p-4 w-60 h-auto flex flex-col items-center justify-center bg-[#E6F3DB] opacity-90 rounded-2xl gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-move z-10`}
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
      <div className="w-full h-auto flex justify-between items-center">
        <h2 className="text-nowrap text-sm font-medium">Consistency Grid</h2>
        <div className="w-auto h-auto flex justify-center items-center gap-0.5">
          <h2 className="text-[0.625rem]">Less</h2>
          <div className="w-1.5 h-auto aspect-square rounded-lg bg-[#A9D18E] shadow-[inset_-10px_-12px_20px_rgba(56,87,35,0.5),inset_6px_6px_15px_rgba(255,255,255,0.65),inset_2px_2px_5px_rgba(255,255,255,0.35),0_15px_25px_rgba(0,0,0,0.4)]"></div>
          <div className="w-1.5 h-auto aspect-square rounded-lg bg-[#70AD47] shadow-[inset_-10px_-12px_20px_rgba(39,78, 19,0.55),inset_6px_6px_15px_rgba(255,255,2 55,0.55),inset_2px_2px_5px_rgba(255,255,25 5,0.3),0_15px_25px_rgba(0,0,0,0.4)]"></div>
          <div className="w-1.5 h-auto aspect-square rounded-lg bg-[#548235] shadow-[inset_-10px_-12px_20px_rgba(39,78, 19,0.65),inset_6px_6px_15px_rgba(255,255,2 55,0.45),inset_2px_2px_5px_rgba(255,255,25 5,0.25),0_15px_25px_rgba(0,0,0,0.45)]"></div>
          <div className="w-1.5 h-auto aspect-square rounded-lg bg-[#385723] shadow-[inset_-10px_-12px_20px_rgba(20,35, 10,0.7),inset_6px_6px_15px_rgba(255,255,25 5,0.35),inset_2px_2px_5px_rgba(255,255,255 ,0.2),0_15px_25px_rgba(0,0,0,0.5)]"></div>
          <div className="w-1.5 h-auto aspect-square rounded-lg bg-[#274E13] shadow-[inset_-10px_-12px_20px_rgba(10,25, 5,0.75),inset_6px_6px_15px_rgba(255,255,25 5,0.3),inset_2px_2px_5px_rgba(255,255,255, 0.15),0_15px_25px_rgba(0,0,0,0.55)]"></div>
          <h2 className="text-[0.625rem]">More</h2>
        </div>
      </div>
      <hr
        style={{
          color: "#51753F",
          backgroundColor: "#51753F",
          height: "1px",
          width: "100%",
          borderRadius: "100%",
          marginBottom: "2px",
        }}
      />
      <div
        className="w-full h-auto grid grid-cols-10 gap-2 cursor-pointer"
        onClick={() => {
          const updatedTask = task.map((item) => {
            const today = new Date();
            const formattedDate = today.toLocaleDateString("en-CA");
            if (item.date == formattedDate) {
              return {
                ...item,
                questionsCompleted: (item.questionsCompleted + 1) % 6,
              };
            }
            return item;
          });
          setTask(updatedTask);
        }}
      >
        {task !== null &&
          task.map((item, index) => (
            <div
              key={index}
              className="w-3 h-auto rounded-full aspect-square"
              style={{
                background: `${item.questionsCompleted == 0 ? "#D4EABC" : item.questionsCompleted == 1 ? "#A9D18E" : item.questionsCompleted == 2 ? "#70AD47" : item.questionsCompleted == 3 ? "#548235" : item.questionsCompleted == 4 ? "#385723" : item.questionsCompleted == 5 ? "#274E13" : ""}`,
                boxShadow: `${item.questionsCompleted == 0 ? "inset -10px -12px 20px rgba(56, 87, 35, 0.45),inset 6px 6px 15px rgba(255, 255, 255, 0.75),inset 2px 2px 5px rgba(255, 255, 255, 0.4),0 15px 25px rgba(0, 0, 0, 0.35)" : item.questionsCompleted == 1 ? "inset -10px -12px 20px rgba(56, 87, 35, 0.45),inset 6px 6px 15px rgba(255, 255, 255, 0.75),inset 2px 2px 5px rgba(255, 255, 255, 0.4),0 15px 25px rgba(0, 0, 0, 0.35)" : item.questionsCompleted == 2 ? "inset -10px -12px 20px rgba(39, 78, 19, 0.55),inset 6px 6px 15px rgba(255, 255, 255, 0.55),inset 2px 2px 5px rgba(255, 255, 255, 0.3),0 15px 25px rgba(0, 0, 0, 0.4)" : item.questionsCompleted == 3 ? "inset -10px -12px 20px rgba(39,78, 19, 0.65),inset 6px 6px 15px rgba(255, 255, 255, 0.45),inset 2px 2px 5px rgba(255, 255, 255, 0.25),0 15px 25px rgba(0, 0, 0, 0.45)" : item.questionsCompleted == 4 ? "inset -10px -12px 20px rgba(20, 35, 10, 0.7),inset 6px 6px 15px rgba(255, 255, 255, 0.35),inset 2px 2px 5px rgba(255, 255, 255, 0.2),0 15px 25px rgba(0, 0, 0, 0.5)" : item.questionsCompleted == 5 ? "inset -10px -12px 20px rgba(10, 25, 5, 0.75),inset 6px 6px 15px rgba(255,255, 255, 0.3),inset 2px 2px 5px rgba(255, 255, 255, 0.15),0 15px 25px rgba(0, 0, 0, 0.55)" : ""}`,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Task;
