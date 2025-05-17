// src/components/SGPIResult.tsx
// SGPI result ka animated display

import React from "react";
import { motion } from "framer-motion";
import { calculateSGPI } from "../utils/sgpi";
import type { Subject } from "../utils/curriculum";

export default function SGPIResult({
  subjects, marks
}: {
  subjects: Subject[], marks: number[]
}) {
  const sgpi = calculateSGPI(subjects, marks);
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      className="mt-8 bg-gradient-to-r from-cyan-800 via-fuchsia-900 to-black p-6 rounded-2xl text-3xl font-extrabold text-cyan-200 shadow-2xl border-4 border-fuchsia-700 text-center"
    >
      SGPI: <span className="text-fuchsia-400">{sgpi}</span>
    </motion.div>
  );
}
