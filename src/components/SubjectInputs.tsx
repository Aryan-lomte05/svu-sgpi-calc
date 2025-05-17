// src/components/SubjectInputs.tsx
// Har subject ke liye animated card input, Framer Motion se

import React from "react";
import { motion } from "framer-motion";
import type { Subject } from "../utils/curriculum";

export default function SubjectInputs({
  subjects, marks, setMarks
}: {
  subjects: Subject[], marks: number[], setMarks: (m: number[])=>void
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {subjects.map((sub, i) => (
        <motion.div
          key={sub.code}
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.07, type: "spring", stiffness: 120 }}
          className="bg-gradient-to-br from-cyan-900 via-black to-fuchsia-900 p-4 rounded-xl shadow-lg border border-cyan-800 flex flex-col items-center"
        >
          <div className="font-bold text-lg text-cyan-300 mb-2">{sub.name}</div>
          <input
            type="number"
            min={0}
            max={sub.marking.total}
            value={marks[i] || ""}
            onChange={e => {
              const arr = [...marks];
              arr[i] = Number(e.target.value);
              setMarks(arr);
            }}
            className="border-2 border-cyan-500 px-3 py-1 rounded-lg w-32 text-center text-black font-bold text-xl bg-white/80"
            placeholder={`Marks (/${sub.marking.total})`}
          />
          <div className="mt-2 text-sm text-fuchsia-300">Credits: {sub.credits} | Type: {sub.type}</div>
        </motion.div>
      ))}
    </div>
  );
}
