import { useState } from "react";
import treeImage from "../assets/tree.webp";
const Tree = () => {
  const [position, setPosition] = useState({ x: 520, y: 517 });
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
      className="w-35 h-auto aspect-square absolute rounded-2xl flex justify-center items-center z-10"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img
        src={treeImage}
        alt="tree"
        className="w-full h-auto aspect-square object-center object-cover"
      />
    </div>
  );
};

export default Tree;
