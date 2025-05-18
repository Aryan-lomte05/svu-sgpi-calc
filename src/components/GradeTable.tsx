// import React from "react";

// const gradeTable = [
//   { min: 80, max: 100, grade: "O", point: 10 },
//   { min: 70, max: 80, grade: "A+", point: 9 },
//   { min: 60, max: 70, grade: "A", point: 8 },
//   { min: 55, max: 60, grade: "B+", point: 7 },
//   { min: 50, max: 55, grade: "B", point: 6 },
//   { min: 45, max: 50, grade: "C", point: 5 },
//   { min: 40, max: 45, grade: "D", point: 4 },
//   { min: 0, max: 40, grade: "FF", point: 0 },
// ];

// export default function GradeTable() {
//   return (
//     <div className="my-8">
//       <h2 className="text-2xl font-bold mb-2 text-[#00FFD0]">Regular Grade Table</h2>
//       <table className="w-full text-left border border-[#444] rounded-xl bg-[#22252A] mb-4">
//         <thead>
//           <tr className="bg-[#121212] text-[#00FFD0]">
//             <th className="p-2">Marks Range</th>
//             <th>Grade</th>
//             <th>Grade Point</th>
//           </tr>
//         </thead>
//         <tbody>
//           {gradeTable.map(row => (
//             <tr key={row.grade} className="hover:bg-[#1c1c1c] transition">
//               <td className="p-2">{row.min} - {row.max}</td>
//               <td>{row.grade}</td>
//               <td>{row.point}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="text-[#B0B0B0] text-base">
//         <b>SGPA/CGPA Formula:</b> <br />
//         <span className="font-mono">
//           SGPA = (Σ (Credit × Grade Point)) / (Total Credits)
//         </span>
//       </div>
//     </div>
//   );
// }
// src/components/GradeTable.tsx


import React from "react";

const gradeTable = [
  { min: 80, max: 100, grade: "O", point: 10 },
  { min: 70, max: 80, grade: "A+", point: 9 },
  { min: 60, max: 70, grade: "A", point: 8 },
  { min: 55, max: 60, grade: "B+", point: 7 },
  { min: 50, max: 55, grade: "B", point: 6 },
  { min: 45, max: 50, grade: "C", point: 5 },
  { min: 40, max: 45, grade: "D", point: 4 },
  { min: 0, max: 40, grade: "FF", point: 0 },
];

export default function GradeTable() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-2 text-[#FF6F61]">Regular Grade Table</h2>
      <table className="w-full text-left border border-[#822659] rounded-xl bg-[#22252A] shadow-xl">
        <thead>
          <tr className="bg-[#822659] text-[#F0F0F0]">
            <th className="p-2 font-bold">Marks Range</th>
            <th className="font-bold">Grade</th>
            <th className="font-bold">Grade Point</th>
          </tr>
        </thead>
        <tbody>
          {gradeTable.map(row => (
            <tr key={row.grade} className="hover:bg-[#3E5641] transition">
              <td className="p-2 font-mono text-[#A8DADC]">{row.min} - {row.max}</td>
              <td className="text-[#F5E8D8]">{row.grade}</td>
              <td className="text-[#FF4500]">{row.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-[#B0B0B0] text-base mt-4">
        {/* Formula bhi dikhana hai users ko */}
        <b>SGPA/CGPA Formula:</b> <br />
        <span className="font-mono">
          SGPA = (Σ (Credit × Grade Point)) / (Total Credits)
        </span>
      </div>
    </div>
  );
}
