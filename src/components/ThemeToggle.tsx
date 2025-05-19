// // import React from "react";

// // export default function ThemeToggle({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
// //   return (
// //     <button
// //       onClick={() => setDarkMode(!darkMode)}

// //       className="fixed top-4 left-4 z-50 p-2 rounded-full bg-[#22252A] text-[#00FFD0] border border-[#00FFD0]"
// //       aria-label="Toggle dark mode"
// //     >
// //       {darkMode ? "🌙" : "🔆"}
// //     </button>
// //   );
// // }
// // src/components/ParticleBG.tsx
// // Desktop mode ke liye animated particles background with cool icons (Hinglish comments)

// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useMediaQuery } from "react-responsive";

// export default function ParticleBG() {
//   // Sirf desktop par dikhana hai (minWidth 1024px)
//   const isDesktop = useMediaQuery({ minWidth: 1024 });

//   // tsParticles ko initialize karne ke liye
//   const particlesInit = useCallback(async engine => {
//     await loadFull(engine);
//   }, []);

//   if (!isDesktop) return null;

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: 0 },
//         background: { color: "#181A1B" },
//         particles: {
//           number: { value: 60, density: { enable: true, area: 1200 } },
//           color: { value: "#00FFD0" },
//           shape: {
//             type: ["circle", "image"], // Circles + icons
//             image: [
//               // Replace these URLs with your own SVGs/icons for more geekiness!
//               {
//                 src: "https://twemoji.maxcdn.com/v/latest/svg/1f4bb.svg", // 💻 Laptop
//                 width: 32,
//                 height: 32
//               },
//               {
//                 src: "https://twemoji.maxcdn.com/v/latest/svg/1f52c.svg", // 🔬 Microscope
//                 width: 32,
//                 height: 32
//               },
//               {
//                 src: "https://twemoji.maxcdn.com/v/latest/svg/1f4d6.svg", // 📖 Book
//                 width: 32,
//                 height: 32
//               },
//               {
//                 src: "https://twemoji.maxcdn.com/v/latest/svg/1f522.svg", // 🔢 Math
//                 width: 32,
//                 height: 32
//               },
//               {
//                 src: "https://twemoji.maxcdn.com/v/latest/svg/1f5a5.svg", // 🖥️ Desktop
//                 width: 32,
//                 height: 32
//               }
//               // Add more SVG URLs as you like!
//             ]
//           },
//           opacity: { value: 0.7 },
//           size: { value: 10, random: { enable: true, minimumValue: 5 } },
//           move: { enable: true, speed: 1.1, direction: "none", outModes: { default: "bounce" } },
//           links: { enable: true, color: "#00FFD0", opacity: 0.2, width: 1, distance: 180 }
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//             resize: true
//           },
//           modes: {
//             repulse: { distance: 120, duration: 0.4 },
//             push: { quantity: 4 }
//           }
//         }
//       }}
//     />
//   );
// }
// src/components/ThemeToggle.tsx
// Hinglish comments ke saath

import React from "react";

// Props type define karo
type ThemeToggleProps = {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
};

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 left-4 z-50 p-2 rounded-full bg-[#22252A] text-[#00FFD0] border border-[#00FFD0]"
      aria-label="Toggle dark mode"
    >
      {darkMode ? "🌙" : "🔆"}
    </button>
  );
}
