// src/App.tsx
// Sab kuch yahan se control ho raha hai - tabs, selectors, bg, etc.
 

import React, { useState } from "react";
import './index.css';
import { curriculum } from "./utils/curriculum";
import AnimatedBG from "./components/AnimatedBG";
import GroupYearSemSelector from "./components/GroupYearSemSelector";
import SubjectInputs from "./components/SubjectInputs";
import SGPIResult from "./components/SGPIResult";
import CalculationChart from "./components/CalculationChart";
import TargetSGPI from "./components/TargetSGPI";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [year, setYear] = useState("First Year");
  const [semester, setSemester] = useState("Semester 1");
  const [group, setGroup] = useState("C");
  const [tab, setTab] = useState<"SGPI" | "Chart" | "Target">("SGPI");

  const subjects = curriculum[year][semester][group];
  const [marks, setMarks] = useState<number[]>(Array(subjects.length).fill(0));

  // Geeky tab button ka animation
  const tabBtn = (label: string, tabName: typeof tab) => (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.08, backgroundColor: "#a21caf", color: "#fff" }}
      className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 bg-cyan-800 text-fuchsia-200 shadow-lg border-2 border-fuchsia-700 ${
        tab === tabName ? "bg-fuchsia-800 text-cyan-200 border-cyan-500" : ""
      }`}
      onClick={() => setTab(tabName)}
    >
      {label}
    </motion.button>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-fuchsia-950 to-cyan-900 text-white relative overflow-x-hidden">
      <AnimatedBG />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="bg-black/80 p-8 rounded-3xl shadow-2xl w-full max-w-4xl mt-10 border-4 border-fuchsia-700"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center text-cyan-300 drop-shadow-lg tracking-widest">
          SVU BTech SGPI/CGPI Calculator 🚀
        </h1>
        <GroupYearSemSelector
          group={group} setGroup={setGroup}
          year={year} setYear={setYear}
          semester={semester} setSemester={setSemester}
          curriculum={curriculum}
        />
        <div className="flex gap-4 mb-8 justify-center">
          {tabBtn("SGPI Calculator", "SGPI")}
          {tabBtn("Calculation Mechanism", "Chart")}
          {tabBtn("🎯 Target SGPI", "Target")}
        </div>
        <AnimatePresence mode="wait">
          {tab === "SGPI" && (
            <motion.div
              key="sgpi"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <SubjectInputs subjects={subjects} marks={marks} setMarks={setMarks} />
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
              <CalculationChart subjects={subjects} />
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
              <TargetSGPI subjects={subjects} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
