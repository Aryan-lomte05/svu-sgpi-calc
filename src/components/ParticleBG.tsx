// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import type { Engine } from "tsparticles-engine";

// export default function ParticleBG() {
//   const particlesInit = async (engine: Engine) => {
//     await loadFull(engine);
//   };
//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: { color: "#181A1B" },
//         particles: {
//           number: { value: 120 },
//           color: { value: "#fff" },
//           links: { enable: false },
//           move: { enable: true, speed: 0.7 },
//           opacity: { value: 0.7 },
//           size: { value: 2.5 },
//           shape: { type: "circle" },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "bubble" }
//           },
//           modes: {
//             bubble: { distance: 100, size: 7, opacity: 1, color: "#00FFD0" }
//           }
//         },
//         fullScreen: { enable: true, zIndex: -1 }
//       }}
//     />
//   );
// }

import React from "react";
import ParticlesBg from "particles-bg";

export default function ParticleBG() {
  // You can change type to "cobweb", "polygon", "circle", "color", etc.
  return <ParticlesBg type="circle" bg={true} color="#00FFD0" num={120} />;
}