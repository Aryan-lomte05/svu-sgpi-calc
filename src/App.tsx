// import React, { useState, useEffect } from "react";
// import { curriculum } from "./utils/curriculum";
// import ParticleBG from "./components/ParticleBG";
// import ThemeToggle from "C:/Users/ajayl_vhnxc12/svu-sgpi-calc/src/components/ThemeToggle";
// import GroupYearSemSelector from "./components/GroupYearSemSelector";
// import SubjectInputs from "./components/SubjectInputs";
// import SGPIResult from "./components/SGPIResult";
// import CalculationChart from "./components/CalculationChart";
// import GradeTable from "./components/GradeTable";
// import TargetSGPI from "./components/TargetSGPI";
// import { motion, AnimatePresence } from "framer-motion";

// function App() {
//   const [year, setYear] = useState("First Year");
//   const [semester, setSemester] = useState("Semester 1");
//   const [group, setGroup] = useState("C");
//   const [tab, setTab] = useState<"SGPI" | "Chart" | "Target">("SGPI");

//   // Simple dark mode state (no dependency)
//   const [darkMode, setDarkMode] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   // Mobile/Desktop toggle state
//   const [mobileMode, setMobileMode] = useState(window.innerWidth < 768);
//   useEffect(() => {
//     const handleResize = () => setMobileMode(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const subjects = curriculum[year][semester][group];
//   const [marks, setMarks] = useState<number[]>(Array(subjects.length).fill(0));

//   const tabBtn = (label: string, tabName: typeof tab) => (
//     <motion.button
//       whileTap={{ scale: 0.95 }}
//       whileHover={{ scale: 1.08, backgroundColor: "#00FFD0", color: "#181A1B" }}
//       className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 bg-[#22252A] text-[#00FFD0] shadow-lg border-2 border-[#00FFD0] ${
//         tab === tabName ? "bg-[#00FFD0] text-[#181A1B] border-[#FF007F]" : ""
//       }`}
//       onClick={() => setTab(tabName)}
//     >
//       {label}
//     </motion.button>
//   );

//   return (
//     <div className={`relative min-h-screen ${darkMode ? "bg-[#181A1B]" : "bg-[#f0f0f0]"}`}>
//       <ParticleBG />
//       <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//       <div className="fixed top-4 right-4 z-50 bg-[#00FFD0] text-[#181A1B] px-5 py-2 rounded-full font-extrabold shadow-lg border-2 border-[#00A0FF] text-lg tracking-wider">
//         Aryan Lomte CSBS
//       </div>
//       <button
//         onClick={() => setMobileMode(m => !m)}
//         className="fixed bottom-4 right-4 z-50 bg-[#22252A] text-[#00FFD0] px-4 py-2 rounded-full border border-[#00FFD0]"
//       >
//         {mobileMode ? "Mobile Mode" : "Desktop Mode"}
//       </button>
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, type: "spring" }}
//         className="bg-black/80 p-8 rounded-3xl shadow-2xl w-full max-w-4xl mt-10 border-4 border-[#00FFD0] mx-auto"
//       >
//         <h1 className="text-4xl font-extrabold mb-8 text-center text-[#00FFD0] drop-shadow-lg tracking-widest">
//           SVU BTech SGPI/CGPI Calculator 🚀
//         </h1>
//         <GroupYearSemSelector
//           group={group} setGroup={setGroup}
//           year={year} setYear={setYear}
//           semester={semester} setSemester={setSemester}
//           curriculum={curriculum}
//         />
//         <div className="flex gap-4 mb-8 justify-center">
//           {tabBtn("SGPI Calculator", "SGPI")}
//           {tabBtn("Calculation Mechanism", "Chart")}
//           {tabBtn("🎯 Target SGPI", "Target")}
//         </div>
//         <AnimatePresence mode="wait">
//           {tab === "SGPI" && (
//             <motion.div
//               key="sgpi"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.4 }}
//             >
//               <SubjectInputs subjects={subjects} marks={marks} setMarks={setMarks} mobileMode={mobileMode} />
//               <SGPIResult subjects={subjects} marks={marks} />
//             </motion.div>
//           )}
//           {tab === "Chart" && (
//             <motion.div
//               key="chart"
//               initial={{ opacity: 0, x: 80 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -80 }}
//               transition={{ duration: 0.4 }}
//             >
//               <CalculationChart subjects={subjects} />
//             </motion.div>
//           )}
//           {tab === "Target" && (
//             <motion.div
//               key="target"
//               initial={{ opacity: 0, y: 80 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -80 }}
//               transition={{ duration: 0.4 }}
//             >
//               <TargetSGPI subjects={subjects} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// }

// export default App;
import ParticleBG from "./components/ParticleBG";
import React, { useState, useEffect } from "react";
import { curriculum } from "./utils/curriculum";
import ThemeToggle from "./components/ThemeToggle";
import GroupYearSemSelector from "./components/GroupYearSemSelector";
import SubjectInputs from "./components/SubjectInputs";
import SGPIResult from "./components/SGPIResult";
import CalculationChart from "./components/CalculationChart";
import GradeTable from "./components/GradeTable";
import TargetSGPI from "./components/TargetSGPI";
import { Analytics } from "@vercel/analytics/react"
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [year, setYear] = useState("First Year");
  const [semester, setSemester] = useState("Semester 1");
  const [group, setGroup] = useState("C");
  const [tab, setTab] = useState<"SGPI" | "Chart" | "Target">("SGPI");

  // Dark mode state (no dependency)
  const [darkMode, setDarkMode] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Mobile/Desktop toggle state
  const [mobileMode, setMobileMode] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setMobileMode(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Current subjects for selected year/sem/group
  const subjects = curriculum[year][semester][group];
  const [marks, setMarks] = useState<number[]>(Array(subjects.length).fill(0));

  // Tab button with animation
  const tabBtn = (label: string, tabName: typeof tab) => (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.08 }}
      className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 bg-[#22252A] text-[#00FFD0] shadow-lg border-2 border-[#00FFD0] ${
        tab === tabName ? "bg-[#00FFD0] text-[#181A1B] border-[#FF007F]" : ""
      }`}
      onClick={() => setTab(tabName)}
    >
      {label}
    </motion.button>
  );

  return (
    <div className={"relative min-h-screen bg-transparent"}>
      {/* Animated particles background */}
      <ParticleBG />
      {/* Theme (dark/light) toggle */}
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* Branding - Aryan Lomte CSBS */}
      <div className="fixed top-4 right-4 z-50 bg-[#00FFD0] text-[#181A1B] px-5 py-2 rounded-full font-extrabold shadow-lg border-2 border-[#00A0FF] text-lg tracking-wider">
        Aryan Lomte CSBS
        <Analytics />
      </div>

      {/* Mobile/Desktop mode toggle */}
      <button
        onClick={() => setMobileMode(m => !m)}
        className="fixed bottom-4 right-4 z-50 bg-[#22252A] text-[#00FFD0] px-4 py-2 rounded-full border border-[#00FFD0]"
      >
        {mobileMode ? "Mobile Mode" : "Desktop Mode"}
      </button>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="bg-black/80 p-8 rounded-3xl shadow-2xl w-full max-w-4xl mt-10 border-4 border-[#00FFD0] mx-auto"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center text-[#00FFD0] drop-shadow-lg tracking-widest">
          SVU BTech SGPI/CGPI Calculator 🚀
        </h1>
        {/* Year/Sem/Group selector */}
        <GroupYearSemSelector
          group={group} setGroup={setGroup}
          year={year} setYear={setYear}
          semester={semester} setSemester={setSemester}
          curriculum={curriculum}
        />
        {/* Tabs for navigation */}
        <div className="flex gap-4 mb-8 justify-center">
          {tabBtn("SGPI Calculator", "SGPI")}
          {tabBtn("Calculation Mechanism", "Chart")}
          {tabBtn("🎯 Target SGPI", "Target")}
        </div>
        {/* Tab content */}
        <AnimatePresence mode="wait">
          {tab === "SGPI" && (
            <motion.div
              key="sgpi"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {/* Subject marks input */}
              <SubjectInputs subjects={subjects} marks={marks} setMarks={setMarks} mobileMode={mobileMode} />
              {/* SGPI result (shows "Failed" if any FF) */}
              <SGPIResult subjects={subjects} marks={marks} />
            </motion.div>
          )}
          {tab === "Chart" && (
            <motion.div
              key="chart"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
            >
              {/* Marking scheme table */}
              <CalculationChart subjects={subjects} />
              {/* Grade table and formula */}
              <GradeTable />
            </motion.div>
          )}
          {tab === "Target" && (
            <motion.div
              key="target"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.4 }}
            >
              {/* Improved Target SGPI calculator */}
              <TargetSGPI subjects={subjects} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
