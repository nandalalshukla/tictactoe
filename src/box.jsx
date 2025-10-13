// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Box() {
//   const cubeRef = useRef();

//   useEffect(() => {
//     // Continuous 3D rotation animation
//     gsap.to(cubeRef.current, {
//       rotationX: 360,
//       rotationY: 360,
//       duration: 10,
//       repeat: -1,
//       ease: "none",
//     });

//     // Hover effect
//     const cube = cubeRef.current;

//     const handleMouseEnter = () => {
//       gsap.to(cube, { scale: 1.3, duration: 0.5, ease: "power2.out" });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(cube, { scale: 1, duration: 0.5, ease: "power2.out" });
//     };

//     cube.addEventListener("mouseenter", handleMouseEnter);
//     cube.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       cube.removeEventListener("mouseenter", handleMouseEnter);
//       cube.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       className="flex items-center justify-center"
//       style={{ perspective: "1200px" }}
//     >
//       <div
//         ref={cubeRef}
//         className="w-52 h-52 relative"
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Front Face */}
//         <div
//           className="absolute w-52 h-52 flex items-center justify-center text-2xl font-bold text-white backdrop-blur-xl bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 border-2 border-white/40 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
//           style={{
//             transform: "rotateY(0deg) translateZ(104px)",
//             boxShadow:
//               "inset 0 0 60px rgba(255, 255, 255, 0.1), 0 0 40px rgba(59, 130, 246, 0.5)",
//           }}
//         >
//           <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
//             Nandalal
//           </span>
//         </div>

//         {/* Back Face */}
//         <div
//           className="absolute w-52 h-52 flex items-center justify-center text-2xl font-bold text-white backdrop-blur-xl bg-gradient-to-br from-pink-400/30 via-purple-400/20 to-blue-400/30 border-2 border-white/40 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
//           style={{
//             transform: "rotateY(180deg) translateZ(104px)",
//             boxShadow:
//               "inset 0 0 60px rgba(255, 255, 255, 0.1), 0 0 40px rgba(236, 72, 153, 0.5)",
//           }}
//         >
//           <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
//             Nandalal
//           </span>
//         </div>

//         {/* Left Face */}
//         <div
//           className="absolute w-52 h-52 flex items-center justify-center text-2xl font-bold text-white backdrop-blur-xl bg-gradient-to-br from-green-400/30 via-emerald-400/20 to-teal-400/30 border-2 border-white/40 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
//           style={{
//             transform: "rotateY(-90deg) translateZ(104px)",
//             boxShadow:
//               "inset 0 0 60px rgba(255, 255, 255, 0.1), 0 0 40px rgba(34, 197, 94, 0.5)",
//           }}
//         >
//           <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
//             Nandalal
//           </span>
//         </div>

//         {/* Right Face */}
//         <div
//           className="absolute w-52 h-52 flex items-center justify-center text-2xl font-bold text-white backdrop-blur-xl bg-gradient-to-br from-orange-400/30 via-red-400/20 to-pink-400/30 border-2 border-white/40 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
//           style={{
//             transform: "rotateY(90deg) translateZ(104px)",
//             boxShadow:
//               "inset 0 0 60px rgba(255, 255, 255, 0.1), 0 0 40px rgba(249, 115, 22, 0.5)",
//           }}
//         >
//           <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
//             Nandalal
//           </span>
//         </div>

//         {/* Top Face */}
//         <div
//           className="absolute w-52 h-52 flex items-center justify-center text-2xl font-bold text-white backdrop-blur-xl bg-gradient-to-br from-cyan-400/30 via-blue-400/20 to-indigo-400/30 border-2 border-white/40 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
//           style={{
//             transform: "rotateX(90deg) translateZ(104px)",
//             boxShadow:
//               "inset 0 0 60px rgba(255, 255, 255, 0.1), 0 0 40px rgba(6, 182, 212, 0.5)",
//           }}
//         >
//           <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
//             Nandalal
//           </span>
//         </div>

//         {/* Bottom Face */}
//         <div
//           className="absolute w-52 h-52 flex items-center justify-center text-2xl font-bold text-white backdrop-blur-xl bg-gradient-to-br from-violet-400/30 via-purple-400/20 to-fuchsia-400/30 border-2 border-white/40 rounded-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
//           style={{
//             transform: "rotateX(-90deg) translateZ(104px)",
//             boxShadow:
//               "inset 0 0 60px rgba(255, 255, 255, 0.1), 0 0 40px rgba(139, 92, 246, 0.5)",
//           }}
//         >
//           <span className="drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
//             Nandalal
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
