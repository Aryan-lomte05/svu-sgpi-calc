// // src/components/CalculationChart.tsx
// Marking scheme table with vibrant, readable palette and Hinglish comments

import React from "react";
import type { Subject } from "../utils/curriculum";

export default function CalculationChart({ subjects }: { subjects: Subject[] }) {
  return (
    <div className="overflow-x-auto my-8">
      {/* Table heading */}
      <h2 className="text-2xl font-bold mb-2 text-[#00FFD0]">Marking Scheme Table</h2>
      <table className="w-full text-left border border-[#004D61] rounded-xl bg-[#1C1C1C] shadow-xl">
        <thead>
          <tr className="bg-[#004D61] text-[#F0F0F0]">
            <th className="p-2 font-bold">Code</th>
            <th className="font-bold">Name</th>
            <th className="font-bold">Credits</th>
            <th className="font-bold">CA</th>
            <th className="font-bold">InSem</th>
            <th className="font-bold">EndSem</th>
            <th className="font-bold">LabCA</th>
            <th className="font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(sub => (
            <tr key={sub.code} className="hover:bg-[#22252A] transition">
              <td className="p-2 font-mono text-[#00FFD0]">{sub.code}</td>
              <td className="text-[#F0F0F0]">{sub.name}</td>
              <td className="text-[#F5E8D8]">{sub.credits}</td>
              <td className="text-[#FFB300]">{sub.marking.CA ?? "-"}</td>
              <td className="text-[#FF6F61]">{sub.marking.InSem ?? "-"}</td>
              <td className="text-[#00FFD0]">{sub.marking.EndSem ?? "-"}</td>
              <td className="text-[#DAA520]">{sub.marking.LabCA ?? "-"}</td>
              <td className="text-[#FFC1CC]">{sub.marking.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
