// src/components/GroupYearSemSelector.tsx
// Yahan pe group/year/sem select karne ka UI hai

import React from "react";

export default function GroupYearSemSelector({
  group, setGroup, year, setYear, semester, setSemester, curriculum
}: {
  group: string, setGroup: (g: string)=>void,
  year: string, setYear: (y: string)=>void,
  semester: string, setSemester: (s: string)=>void,
  curriculum: any
}) {
  const years = Object.keys(curriculum);
  const semesters = Object.keys(curriculum[year]);
  const groups = Object.keys(curriculum[year][semester]);

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select value={year} onChange={e=>setYear(e.target.value)} className="p-2 rounded bg-black text-cyan-300">
        {years.map(y => <option key={y}>{y}</option>)}
      </select>
      <select value={semester} onChange={e=>setSemester(e.target.value)} className="p-2 rounded bg-black text-cyan-300">
        {semesters.map(s => <option key={s}>{s}</option>)}
      </select>
      <select value={group} onChange={e=>setGroup(e.target.value)} className="p-2 rounded bg-black text-cyan-300">
        {groups.map(g => <option key={g}>{g}</option>)}
      </select>
    </div>
  );
}
