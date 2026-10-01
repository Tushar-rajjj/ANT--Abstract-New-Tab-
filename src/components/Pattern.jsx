import { useState, useRef, useEffect } from "react";

const Pattern = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth - 230,
    y: 30,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    setIsDrawing(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
    setIsDrawing(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    4;
    setIsDrawing(false);
  };

  return (
    <div
      className="pattern w-auto h-auto absolute grid grid-cols-31 grid-rows-22 z-20 rounded-3xl overflow-hidden opacity-75"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      ref={parentRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
          className="w-1.5 h-1.5 bg-[#383838] rounded-[2px] border-b-[0.5px] border-black border-r-[0.5px]"
        ></div>
      ))}
    </div>
  );
};

export default Pattern;
