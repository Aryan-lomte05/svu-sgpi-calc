// src/components/SubjectInputs.tsx
// Har subject ke liye animated card input, Framer Motion se

import React from "react";
import type { Subject } from "../utils/curriculum";

export default function SubjectInputs({
  subjects,
  marks,
  setMarks,
  mobileMode,
}: {
  subjects: Subject[];
  marks: number[];
  setMarks: (m: number[]) => void;
  mobileMode: boolean;
}) {
  return (
    <div className={`grid ${mobileMode ? "grid-cols-1" : "grid-cols-2"} gap-6`}>
      {subjects.map((sub, i) => (
        <div
          key={sub.code}
          className="bg-[#22252A] border-2 border-[#00FFD0] rounded-2xl shadow-xl p-7 flex flex-col gap-3 transition-transform hover:scale-105 hover:border-[#FF007F] min-h-[180px]"
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-lg text-[#00FFD0]">{sub.code}</span>
            <span className="bg-[#00FFD0] text-[#181A1B] px-4 py-1 rounded-full text-base font-bold">
              {sub.credits} Credits
            </span>
          </div>
          <div className="font-bold text-2xl text-[#F0F0F0]">{sub.name}</div>
          <div className="text-[#B0B0B0] text-sm">
            CA: {sub.marking.CA ?? "-"} | InSem: {sub.marking.InSem ?? "-"} | EndSem: {sub.marking.EndSem ?? "-"} | LabCA: {sub.marking.LabCA ?? "-"}
          </div>
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
            className="border-2 border-[#00FFD0] px-3 py-1 rounded-lg w-32 text-center text-black font-bold text-xl bg-white/80 mt-2"
            placeholder={`Marks (/${sub.marking.total})`}
          />
        </div>
      ))}
    </div>
  );
}
