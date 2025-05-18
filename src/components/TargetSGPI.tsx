// // // // // // src/components/TargetSGPI.tsx
// // // // // // Target SGPI ke liye required marks calculator, ab FULL LOGIC ke saath

// // // // // import React, { useState } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import type { Subject } from "../utils/curriculum";
// // // // // import { marksToGradePoint } from "../utils/sgpi";

// // // // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // // // //   // User apna target SGPI yahan set karega
// // // // //   const [targetSGPI, setTargetSGPI] = useState(8);
// // // // //   // Har subject ke liye abhi tak ke internals (CA + InSem) ya LabCA, user input karega
// // // // //   const [currentMarks, setCurrentMarks] = useState<number[]>(Array(subjects.length).fill(0));

// // // // //   // Required marks calculation: 
// // // // //   // For each subject, kitne marks EndSem/LabCA me laane honge taki target SGPI mil jaye
// // // // //   const requiredMarks = subjects.map((sub, i) => {
// // // // //     // Internals ka sum nikal lo (CA + InSem)
// // // // //     const internals = (sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0);
// // // // //     const maxFinal = sub.marking.EndSem ?? sub.marking.LabCA ?? 0;
// // // // //     if (!maxFinal || !sub.credits) return "-";
// // // // //     // Target grade point ke liye kitne total marks chahiye, brute force kar rahe hain
// // // // //     for (let marks = 0; marks <= maxFinal; marks++) {
// // // // //       // Total = internals + final exam/lab marks
// // // // //       const total = (currentMarks[i] || 0) + marks;
// // // // //       // Is total pe grade point kya aata hai
// // // // //       const grade = marksToGradePoint(total, sub.marking.total);
// // // // //       if (grade >= targetSGPI) return marks;
// // // // //     }
// // // // //     return `N/A`;
// // // // //   });

// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0, y: 40 }}
// // // // //       animate={{ opacity: 1, y: 0 }}
// // // // //       transition={{ duration: 0.7 }}
// // // // //       className="p-4"
// // // // //     >
// // // // //       <h2 className="text-2xl font-bold mb-4 text-fuchsia-300">🎯 Target SGPI Calculator</h2>
// // // // //       <div className="mb-4 flex items-center gap-2">
// // // // //         <label className="font-bold">Target SGPI: </label>
// // // // //         <input
// // // // //           type="number"
// // // // //           value={targetSGPI}
// // // // //           min={0} max={10}
// // // // //           onChange={e => setTargetSGPI(Number(e.target.value))}
// // // // //           className="border px-2 py-1 rounded w-20 text-black"
// // // // //         />
// // // // //       </div>
// // // // //       <div className="grid md:grid-cols-2 gap-4">
// // // // //         {subjects.map((sub, i) => (
// // // // //           <motion.div
// // // // //             key={sub.code}
// // // // //             initial={{ opacity: 0, x: -30 }}
// // // // //             animate={{ opacity: 1, x: 0 }}
// // // // //             transition={{ delay: i * 0.05 }}
// // // // //             className="bg-gradient-to-r from-fuchsia-900 via-black to-cyan-900 p-4 rounded-xl shadow-lg border border-cyan-800"
// // // // //           >
// // // // //             <div className="font-semibold text-cyan-200 mb-1">{sub.name}</div>
// // // // //             <input
// // // // //               type="number"
// // // // //               min={0}
// // // // //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
// // // // //               value={currentMarks[i] || ""}
// // // // //               onChange={e => {
// // // // //                 const arr = [...currentMarks];
// // // // //                 arr[i] = Number(e.target.value);
// // // // //                 setCurrentMarks(arr);
// // // // //               }}
// // // // //               className="border px-2 py-1 rounded w-24 text-black"
// // // // //               placeholder="Current Internal"
// // // // //             />
// // // // //             <div className="text-sm text-fuchsia-300 mt-1">
// // // // //               Required Final: <b>{requiredMarks[i]}</b> / {(sub.marking.EndSem ?? sub.marking.LabCA ?? 0)}
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // }
// // // // import React, { useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // export default function TargetCGPA() {
// // // //   const [currentCGPA, setCurrentCGPA] = useState(0);
// // // //   const [completedCredits, setCompletedCredits] = useState(0);
// // // //   const [remainingCredits, setRemainingCredits] = useState(0);
// // // //   const [targetCGPA, setTargetCGPA] = useState(8);

// // // //   const totalCredits = completedCredits + remainingCredits;

// // // //   // Calculate the required average CGPA in remaining credits
// // // //   const requiredCGPA =
// // // //     remainingCredits > 0
// // // //       ? (
// // // //           (targetCGPA * totalCredits - currentCGPA * completedCredits) /
// // // //           remainingCredits
// // // //         ).toFixed(2)
// // // //       : "N/A";

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, y: 40 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.7 }}
// // // //       className="p-6 bg-[#22252A] rounded-xl shadow-lg border-2 border-[#00FFD0] max-w-lg mx-auto mt-8"
// // // //     >
// // // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target CGPA Calculator</h2>
// // // //       <div className="mb-4 flex flex-col gap-2">
// // // //         <label>
// // // //           <b>Current CGPA:</b>
// // // //           <input
// // // //             type="number"
// // // //             value={currentCGPA}
// // // //             min={0}
// // // //             max={10}
// // // //             step={0.01}
// // // //             onChange={e => setCurrentCGPA(Number(e.target.value))}
// // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // //           />
// // // //         </label>
// // // //         <label>
// // // //           <b>Completed Credits:</b>
// // // //           <input
// // // //             type="number"
// // // //             value={completedCredits}
// // // //             min={0}
// // // //             onChange={e => setCompletedCredits(Number(e.target.value))}
// // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // //           />
// // // //         </label>
// // // //         <label>
// // // //           <b>Remaining Credits:</b>
// // // //           <input
// // // //             type="number"
// // // //             value={remainingCredits}
// // // //             min={1}
// // // //             onChange={e => setRemainingCredits(Number(e.target.value))}
// // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // //           />
// // // //         </label>
// // // //         <label>
// // // //           <b>Target CGPA:</b>
// // // //           <input
// // // //             type="number"
// // // //             value={targetCGPA}
// // // //             min={0}
// // // //             max={10}
// // // //             step={0.01}
// // // //             onChange={e => setTargetCGPA(Number(e.target.value))}
// // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // //           />
// // // //         </label>
// // // //       </div>
// // // //       <div className="mt-4 text-lg text-[#F0F0F0]">
// // // //         <b>Required Average CGPA in Remaining Credits:</b>
// // // //         <span className="ml-2 text-[#FF007F] font-mono">{requiredCGPA}</span>
// // // //       </div>
// // // //       <div className="text-[#B0B0B0] text-sm mt-2">
// // // //         <b>Formula:</b> <br />
// // // //         <span className="font-mono">
// // // //           Required CGPA = (Target CGPA × Total Credits - Current CGPA × Completed Credits) ÷ Remaining Credits
// // // //         </span>
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }
// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import type { Subject } from "../utils/curriculum";
// // // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // // Helper: Find min marks in final exam for each subject to reach target SGPI
// // // function getRequiredFinals(
// // //   subjects: Subject[],
// // //   internals: number[],
// // //   targetSGPI: number
// // // ): (number | string)[] {
// // //   // For each subject, try all possible marks in final exam (0 to max)
// // //   // and check if a combination is possible to reach target SGPI.
// // //   // For simplicity, for each subject, we assume user gets min possible in other finals.
// // //   return subjects.map((sub, idx) => {
// // //     const maxFinal = sub.marking.EndSem ?? sub.marking.LabCA ?? 0;
// // //     const internal = internals[idx] || 0;
// // //     let found = false;
// // //     for (let marks = 0; marks <= maxFinal; marks++) {
// // //       // For all other subjects, take their internals + 0 in final
// // //       // For this subject, try internals + marks
// // //       const trialMarks = subjects.map((_, i) =>
// // //         i === idx ? internal + marks : internals[i]
// // //       );
// // //       const sgpi = calculateSGPI(
// // //         subjects,
// // //         trialMarks.map((m, i) => {
// // //           // Clamp to subject total
// // //           const total = subjects[i].marking.total;
// // //           return Math.min(m, total);
// // //         })
// // //       );
// // //       if (sgpi >= targetSGPI) {
// // //         found = true;
// // //         return marks;
// // //       }
// // //     }
// // //     return found ? 0 : "Impossible";
// // //   });
// // // }

// // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // //   const [targetSGPI, setTargetSGPI] = useState(8);
// // //   const [internals, setInternals] = useState<number[]>(Array(subjects.length).fill(0));

// // //   const requiredFinals = getRequiredFinals(subjects, internals, targetSGPI);

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 40 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.7 }}
// // //       className="p-4"
// // //     >
// // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
// // //       <div className="mb-4 flex items-center gap-2">
// // //         <label className="font-bold">Target SGPI: </label>
// // //         <input
// // //           type="number"
// // //           value={targetSGPI}
// // //           min={0}
// // //           max={10}
// // //           step={0.01}
// // //           onChange={e => setTargetSGPI(Number(e.target.value))}
// // //           className="border px-2 py-1 rounded w-20 text-black"
// // //         />
// // //       </div>
// // //       <div className="grid md:grid-cols-2 gap-4">
// // //         {subjects.map((sub, i) => (
// // //           <motion.div
// // //             key={sub.code}
// // //             initial={{ opacity: 0, x: -30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ delay: i * 0.05 }}
// // //             className="bg-[#22252A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// // //           >
// // //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// // //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// // //             <input
// // //               type="number"
// // //               min={0}
// // //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0) + (sub.marking.LabCA ?? 0)}
// // //               value={internals[i] || ""}
// // //               onChange={e => {
// // //                 const arr = [...internals];
// // //                 arr[i] = Number(e.target.value);
// // //                 setInternals(arr);
// // //               }}
// // //               className="border px-2 py-1 rounded w-24 text-black mb-2"
// // //               placeholder="Current Internal"
// // //             />
// // //             <div className="text-sm text-[#FF007F] mt-1">
// // //               Required Final: <b>{requiredFinals[i]}</b> / {(sub.marking.EndSem ?? sub.marking.LabCA ?? 0)}
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //       <div className="mt-6 text-[#B0B0B0] text-sm">
// // //         <b>How this works:</b> Enter your current internal marks for each subject. The calculator shows the <b>minimum marks</b> you need in each final exam to reach your target SGPI, assuming you score the minimum possible in all other finals.
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import type { Subject } from "../utils/curriculum";
// // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // Helper: Only consider subjects with EndSem
// // function getEndSemSubjects(subjects: Subject[]) {
// //   return subjects
// //     .map((sub, idx) => ({ ...sub, idx }))
// //     .filter(sub => sub.marking.EndSem && sub.marking.EndSem > 0);
// // }

// // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// //   const endSemSubjects = getEndSemSubjects(subjects);

// //   // Internal marks for each subject with EndSem
// //   const [internals, setInternals] = useState<number[]>(Array(endSemSubjects.length).fill(0));
// //   const [targetSGPI, setTargetSGPI] = useState(8);

// //   // For each EndSem subject, find minimum EndSem marks needed to reach target SGPI
// //   const requiredFinals = endSemSubjects.map((sub, i) => {
// //     const totalSubs = [...subjects];
// //     // Prepare marks array: for all subjects, fill in internals + 0 for EndSem, except this one
// //     // For this subject, try all possible EndSem marks
// //     const internalMarks = [...internals];
// //     let found = false;
// //     for (let marks = 0; marks <= (sub.marking.EndSem ?? 0); marks++) {
// //       // Build full marks array for SGPI calculation
// //       const marksArr = subjects.map((s, idx) => {
// //         if (s.code === sub.code) {
// //           // This is the subject we're testing
// //           return (internalMarks[i] || 0) + marks;
// //         } else if (s.marking.EndSem && s.marking.EndSem > 0) {
// //           // Other EndSem subjects: use internals only
// //           const j = endSemSubjects.findIndex(es => es.code === s.code);
// //           return (j !== -1 ? (internalMarks[j] || 0) : 0);
// //         } else {
// //           // Labs/others: assume full marks or 0 as per your rules (here, full marks)
// //           return s.marking.LabCA ?? s.marking.total ?? 0;
// //         }
// //       });
// //       const sgpi = calculateSGPI(subjects, marksArr);
// //       if (sgpi >= targetSGPI) {
// //         found = true;
// //         return marks;
// //       }
// //     }
// //     return found ? 0 : "Impossible";
// //   });

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 40 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.7 }}
// //       className="p-4"
// //     >
// //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
// //       <div className="mb-4 flex items-center gap-2">
// //         <label className="font-bold">Target SGPI: </label>
// //         <input
// //           type="number"
// //           value={targetSGPI}
// //           min={0}
// //           max={10}
// //           step={0.01}
// //           onChange={e => setTargetSGPI(Number(e.target.value))}
// //           className="border px-2 py-1 rounded w-20 text-black"
// //         />
// //       </div>
// //       <div className="grid md:grid-cols-2 gap-4">
// //         {endSemSubjects.map((sub, i) => (
// //           <motion.div
// //             key={sub.code}
// //             initial={{ opacity: 0, x: -30 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: i * 0.05 }}
// //             className="bg-[#22252A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// //           >
// //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// //             <input
// //               type="number"
// //               min={0}
// //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
// //               value={internals[i] || ""}
// //               onChange={e => {
// //                 const arr = [...internals];
// //                 arr[i] = Number(e.target.value);
// //                 setInternals(arr);
// //               }}
// //               className="border px-2 py-1 rounded w-24 text-black mb-2"
// //               placeholder="Internal Marks"
// //             />
// //             <div className="text-sm text-[#FF007F] mt-1">
// //               Required EndSem: <b>{requiredFinals[i]}</b> / {sub.marking.EndSem}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //       <div className="mt-6 text-[#B0B0B0] text-sm">
// //         <b>How this works:</b> Enter your current internal marks (CA + InSem) for each subject with an EndSem. The calculator shows the <b>minimum EndSem marks</b> you need in each to reach your target SGPI, assuming you score minimum possible in all other EndSems.
// //       </div>
// //     </motion.div>
// //   );
// // }
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import type { Subject } from "../utils/curriculum";
// import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // Helper: For each subject, return { type: "ESE" | "Lab", idx }
// function getSubjectTypes(subjects: Subject[]) {
//   return subjects.map((sub, idx) => {
//     if (sub.marking.EndSem && sub.marking.EndSem > 0) return { type: "ESE", idx };
//     if (sub.marking.LabCA && sub.marking.LabCA > 0) return { type: "Lab", idx };
//     return { type: "Other", idx };
//   });
// }

// export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
//   const subjectTypes = getSubjectTypes(subjects);

//   // For ESE subjects: user enters CA+InSem, for Lab: user enters LabCA (final)
//   const [inputs, setInputs] = useState<number[]>(Array(subjects.length).fill(0));
//   const [targetSGPI, setTargetSGPI] = useState(8);

//   // For each ESE subject, calculate minimum ESE marks needed to reach target SGPI
//   const requiredESE = subjects.map((sub, i) => {
//     if (sub.marking.EndSem && sub.marking.EndSem > 0) {
//       // For this subject, try all possible ESE marks
//       for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
//         // Build marks array for SGPI calculation
//         const marksArr = subjects.map((s, j) => {
//           if (j === i) return (inputs[j] || 0) + ese;
//           // For other ESE subjects: use their entered internals + minimum passing ESE (let's use 0 for minimum)
//           if (s.marking.EndSem && s.marking.EndSem > 0) return inputs[j] || 0;
//           // For LabCA: use entered marks (final, no calculation)
//           if (s.marking.LabCA && s.marking.LabCA > 0) return inputs[j] || 0;
//           // For others: 0
//           return 0;
//         });
//         const sgpi = calculateSGPI(subjects, marksArr);
//         if (sgpi >= targetSGPI) return ese;
//       }
//       return "Impossible";
//     }
//     return "-";
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="p-4"
//     >
//       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
//       <div className="mb-4 flex items-center gap-2">
//         <label className="font-bold">Target SGPI: </label>
//         <input
//           type="number"
//           value={targetSGPI}
//           min={0}
//           max={10}
//           step={0.01}
//           onChange={e => setTargetSGPI(Number(e.target.value))}
//           className="border px-2 py-1 rounded w-20 text-black"
//         />
//       </div>
//       <div className="grid md:grid-cols-2 gap-4">
//         {subjects.map((sub, i) => (
//           <motion.div
//             key={sub.code}
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: i * 0.05 }}
//             className="bg-[#22252A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
//           >
//             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
//             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
//             {subjectTypes[i].type === "ESE" ? (
//               <>
//                 <input
//                   type="number"
//                   min={0}
//                   max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
//                   value={inputs[i] || ""}
//                   onChange={e => {
//                     const arr = [...inputs];
//                     arr[i] = Number(e.target.value);
//                     setInputs(arr);
//                   }}
//                   className="border px-2 py-1 rounded w-24 text-black mb-2"
//                   placeholder="CA + InSem"
//                 />
//                 <div className="text-sm text-[#FF007F] mt-1">
//                   Required ESE: <b>{requiredESE[i]}</b> / {sub.marking.EndSem}
//                 </div>
//               </>
//             ) : subjectTypes[i].type === "Lab" ? (
//               <>
//                 <input
//                   type="number"
//                   min={0}
//                   max={sub.marking.LabCA}
//                   value={inputs[i] || ""}
//                   onChange={e => {
//                     const arr = [...inputs];
//                     arr[i] = Number(e.target.value);
//                     setInputs(arr);
//                   }}
//                   className="border px-2 py-1 rounded w-24 text-black mb-2"
//                   placeholder="LabCA"
//                 />
//                 <div className="text-sm text-[#B0B0B0] mt-1">
//                   (Lab marks are final)
//                 </div>
//               </>
//             ) : (
//               <div className="text-sm text-[#B0B0B0] mt-1">N/A</div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//       <div className="mt-6 text-[#B0B0B0] text-sm">
//         <b>How this works:</b> Enter your internal marks (CA + InSem) for each ESE subject, and LabCA for labs. The calculator shows the <b>minimum ESE marks</b> needed in each to reach your target SGPI, assuming all other ESEs are at minimum required.
//       </div>
//     </motion.div>
//   );
// }
// src/components/TargetSGPI.tsx
// Target SGPI calculator, ab AM-1 waale logic ke saath, Hinglish comments

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Subject } from "../utils/curriculum";
import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
  // User yahan CA+ISE ya LabCA input karega
  const [inputs, setInputs] = useState<number[]>(Array(subjects.length).fill(0));
  const [targetSGPI, setTargetSGPI] = useState(8);

  // For each subject, calculate minimum ESE/LabCA marks needed for target SGPI
  const requiredFinals = subjects.map((sub, i) => {
    // Agar subject me EndSem hai, toh uska calculation karo
    if (sub.marking.EndSem && sub.marking.EndSem > 0) {
      // User ne ab tak kitne marks liye (CA+ISE)
      const internal = inputs[i] || 0;
      // For this subject, try all possible ESE marks
      for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
        // Sab subjects ke marks array banao
        const marksArr = subjects.map((s, j) => {
          if (j === i) return internal + ese;
          // Baaki EndSem waale: user input only (CA+ISE)
          if (s.marking.EndSem && s.marking.EndSem > 0) return inputs[j] || 0;
          // LabCA waale: user input hi final hai
          if (s.marking.LabCA && s.marking.LabCA > 0) return inputs[j] || 0;
          // Others: 0
          return 0;
        });
        const sgpi = calculateSGPI(subjects, marksArr);
        if (sgpi >= targetSGPI) return ese;
      }
      return "Impossible";
    }
    // Agar LabCA hai toh user input hi final hai
    if (sub.marking.LabCA && sub.marking.LabCA > 0) {
      return "-";
    }
    return "-";
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="p-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
      <div className="mb-4 flex items-center gap-2">
        <label className="font-bold">Target SGPI: </label>
        <input
          type="number"
          value={targetSGPI}
          min={0}
          max={10}
          step={0.01}
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
            className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
          >
            <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
            <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
            {sub.marking.EndSem && sub.marking.EndSem > 0 ? (
              <>
                <input
                  type="number"
                  min={0}
                  max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
                  value={inputs[i] || ""}
                  onChange={e => {
                    const arr = [...inputs];
                    arr[i] = Number(e.target.value);
                    setInputs(arr);
                  }}
                  className="border px-2 py-1 rounded w-24 text-black mb-2"
                  placeholder="CA + ISE"
                />
                <div className="text-sm text-[#FF007F] mt-1">
                  Required ESE: <b>{requiredFinals[i]}</b> / {sub.marking.EndSem}
                </div>
              </>
            ) : sub.marking.LabCA && sub.marking.LabCA > 0 ? (
              <>
                <input
                  type="number"
                  min={0}
                  max={sub.marking.LabCA}
                  value={inputs[i] || ""}
                  onChange={e => {
                    const arr = [...inputs];
                    arr[i] = Number(e.target.value);
                    setInputs(arr);
                  }}
                  className="border px-2 py-1 rounded w-24 text-black mb-2"
                  placeholder="LabCA"
                />
                <div className="text-sm text-[#B0B0B0] mt-1">
                  (Lab marks are final)
                </div>
              </>
            ) : (
              <div className="text-sm text-[#B0B0B0] mt-1">N/A</div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-[#B0B0B0] text-sm">
        {/* User ko logic samjhao */}
        <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. The calculator shows the <b>minimum ESE marks</b> needed in each to reach your target SGPI.
      </div>
    </motion.div>
  );
}
