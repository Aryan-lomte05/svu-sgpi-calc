// src/components/TargetSGPI.tsx
// Target SGPI ke liye required marks calculator, ab FULL LOGIC ke saath

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Subject } from "../utils/curriculum";
import { marksToGradePoint } from "../utils/sgpi";

export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
  // User apna target SGPI yahan set karega
  const [targetSGPI, setTargetSGPI] = useState(8);
  // Har subject ke liye abhi tak ke internals (CA + InSem) ya LabCA, user input karega
  const [currentMarks, setCurrentMarks] = useState<number[]>(Array(subjects.length).fill(0));

  // Required marks calculation: 
  // For each subject, kitne marks EndSem/LabCA me laane honge taki target SGPI mil jaye
  const requiredMarks = subjects.map((sub, i) => {
    // Internals ka sum nikal lo (CA + InSem)
    const internals = (sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0);
    const maxFinal = sub.marking.EndSem ?? sub.marking.LabCA ?? 0;
    if (!maxFinal || !sub.credits) return "-";
    // Target grade point ke liye kitne total marks chahiye, brute force kar rahe hain
    for (let marks = 0; marks <= maxFinal; marks++) {
      // Total = internals + final exam/lab marks
      const total = (currentMarks[i] || 0) + marks;
      // Is total pe grade point kya aata hai
      const grade = marksToGradePoint(total, sub.marking.total);
      if (grade >= targetSGPI) return marks;
    }
    return `N/A`;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="p-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-fuchsia-300">🎯 Target SGPI Calculator</h2>
      <div className="mb-4 flex items-center gap-2">
        <label className="font-bold">Target SGPI: </label>
        <input
          type="number"
          value={targetSGPI}
          min={0} max={10}
          onChange={e => setTargetSGPI(Number(e.target.value))}
          className="border px-2 py-1 rounded w-20 text-black"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {subjects.map((sub, i) => (
          <motion.div
            key={sub.code}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-gradient-to-r from-fuchsia-900 via-black to-cyan-900 p-4 rounded-xl shadow-lg border border-cyan-800"
          >
            <div className="font-semibold text-cyan-200 mb-1">{sub.name}</div>
            <input
              type="number"
              min={0}
              max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
              value={currentMarks[i] || ""}
              onChange={e => {
                const arr = [...currentMarks];
                arr[i] = Number(e.target.value);
                setCurrentMarks(arr);
              }}
              className="border px-2 py-1 rounded w-24 text-black"
              placeholder="Current Internal"
            />
            <div className="text-sm text-fuchsia-300 mt-1">
              Required Final: <b>{requiredMarks[i]}</b> / {(sub.marking.EndSem ?? sub.marking.LabCA ?? 0)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
