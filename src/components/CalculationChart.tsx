// src/components/CalculationChart.tsx
// Table me marking scheme, animated fade-in

import React from "react";
import { motion } from "framer-motion";
import type { Subject } from "../utils/curriculum";

export default function CalculationChart({ subjects }: { subjects: Subject[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="overflow-x-auto"
    >
      <table className="w-full text-left mt-4 border border-cyan-600 rounded-xl">
        <thead>
          <tr className="bg-cyan-900 text-fuchsia-200">
            <th className="p-2">Subject</th>
            <th>Credits</th>
            <th>CA</th>
            <th>InSem</th>
            <th>EndSem</th>
            <th>LabCA</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(sub => (
            <tr key={sub.code} className="hover:bg-fuchsia-900/40 transition">
              <td className="p-2">{sub.name}</td>
              <td>{sub.credits}</td>
              <td>{sub.marking.CA ?? "-"}</td>
              <td>{sub.marking.InSem ?? "-"}</td>
              <td>{sub.marking.EndSem ?? "-"}</td>
              <td>{sub.marking.LabCA ?? "-"}</td>
              <td>{sub.marking.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
