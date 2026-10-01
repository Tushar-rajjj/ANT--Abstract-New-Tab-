// import {useState} from "react";
// import treeImage from "../assets/spiderman.png";
// const Spiderman = () => {
//     const [position, setPosition] = useState({ x: 180, y: 400});
//       const [isDragging, setIsDragging] = useState(false);
//       const [offset, setOffset] = useState({ x: 0, y: 0 });

//       const handleMouseDown = (e) => {
//         setIsDragging(true);
//         setOffset({
//           x: e.clientX - position.x,
//           y: e.clientY - position.y,
//         });
//       };

//       const handleMouseMove = (e) => {
//         if (!isDragging) return;

//         // Update position relative to where the cursor moved minus the click offset
//         setPosition({
//           x: e.clientX - offset.x,
//           y: e.clientY - offset.y,
//         });
//       };

//       const handleMouseUp = () => {
//         setIsDragging(false);
//       };
//   return (
//     <div
//       className="w-30 h-auto absolute rounded-2xl flex justify-center items-center z-10"
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <img
//         src={treeImage}
//         alt="spiderman"
//         className="w-full h-auto object-center object-cover"
//       />
//     </div>
//   );
// };

// export default Spiderman;

import { useRef } from "react";
import { Bodies, Engine, Render, World } from "matter-js";

const Spiderman = () => {
  const spidermanRef = useRef(null);
  const engine = Engine.create();
  const world = World.create();
  const render = Render.create({
    element: spidermanRef.current,
    engine,
    options: {
      width: "120px",
      height: "360px",
      wireframes: false,
    },
  });
  // const bodies = Bodies.create();
  return <div ref={spidermanRef} className=""></div>;
};

export default Spiderman;
