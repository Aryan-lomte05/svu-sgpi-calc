// // // // // // // // // // // src/components/TargetSGPI.tsx
// // // // // // // // // // // Target SGPI ke liye required marks calculator, ab FULL LOGIC ke saath

// // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import type { Subject } from "../utils/curriculum";
// // // // // // // // // // import { marksToGradePoint } from "../utils/sgpi";

// // // // // // // // // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // // // // // // // // //   // User apna target SGPI yahan set karega
// // // // // // // // // //   const [targetSGPI, setTargetSGPI] = useState(8);
// // // // // // // // // //   // Har subject ke liye abhi tak ke internals (CA + InSem) ya LabCA, user input karega
// // // // // // // // // //   const [currentMarks, setCurrentMarks] = useState<number[]>(Array(subjects.length).fill(0));

// // // // // // // // // //   // Required marks calculation: 
// // // // // // // // // //   // For each subject, kitne marks EndSem/LabCA me laane honge taki target SGPI mil jaye
// // // // // // // // // //   const requiredMarks = subjects.map((sub, i) => {
// // // // // // // // // //     // Internals ka sum nikal lo (CA + InSem)
// // // // // // // // // //     const internals = (sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0);
// // // // // // // // // //     const maxFinal = sub.marking.EndSem ?? sub.marking.LabCA ?? 0;
// // // // // // // // // //     if (!maxFinal || !sub.credits) return "-";
// // // // // // // // // //     // Target grade point ke liye kitne total marks chahiye, brute force kar rahe hain
// // // // // // // // // //     for (let marks = 0; marks <= maxFinal; marks++) {
// // // // // // // // // //       // Total = internals + final exam/lab marks
// // // // // // // // // //       const total = (currentMarks[i] || 0) + marks;
// // // // // // // // // //       // Is total pe grade point kya aata hai
// // // // // // // // // //       const grade = marksToGradePoint(total, sub.marking.total);
// // // // // // // // // //       if (grade >= targetSGPI) return marks;
// // // // // // // // // //     }
// // // // // // // // // //     return `N/A`;
// // // // // // // // // //   });

// // // // // // // // // //   return (
// // // // // // // // // //     <motion.div
// // // // // // // // // //       initial={{ opacity: 0, y: 40 }}
// // // // // // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //       transition={{ duration: 0.7 }}
// // // // // // // // // //       className="p-4"
// // // // // // // // // //     >
// // // // // // // // // //       <h2 className="text-2xl font-bold mb-4 text-fuchsia-300">🎯 Target SGPI Calculator</h2>
// // // // // // // // // //       <div className="mb-4 flex items-center gap-2">
// // // // // // // // // //         <label className="font-bold">Target SGPI: </label>
// // // // // // // // // //         <input
// // // // // // // // // //           type="number"
// // // // // // // // // //           value={targetSGPI}
// // // // // // // // // //           min={0} max={10}
// // // // // // // // // //           onChange={e => setTargetSGPI(Number(e.target.value))}
// // // // // // // // // //           className="border px-2 py-1 rounded w-20 text-black"
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // // //         {subjects.map((sub, i) => (
// // // // // // // // // //           <motion.div
// // // // // // // // // //             key={sub.code}
// // // // // // // // // //             initial={{ opacity: 0, x: -30 }}
// // // // // // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // // // // // //             transition={{ delay: i * 0.05 }}
// // // // // // // // // //             className="bg-gradient-to-r from-fuchsia-900 via-black to-cyan-900 p-4 rounded-xl shadow-lg border border-cyan-800"
// // // // // // // // // //           >
// // // // // // // // // //             <div className="font-semibold text-cyan-200 mb-1">{sub.name}</div>
// // // // // // // // // //             <input
// // // // // // // // // //               type="number"
// // // // // // // // // //               min={0}
// // // // // // // // // //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
// // // // // // // // // //               value={currentMarks[i] || ""}
// // // // // // // // // //               onChange={e => {
// // // // // // // // // //                 const arr = [...currentMarks];
// // // // // // // // // //                 arr[i] = Number(e.target.value);
// // // // // // // // // //                 setCurrentMarks(arr);
// // // // // // // // // //               }}
// // // // // // // // // //               className="border px-2 py-1 rounded w-24 text-black"
// // // // // // // // // //               placeholder="Current Internal"
// // // // // // // // // //             />
// // // // // // // // // //             <div className="text-sm text-fuchsia-300 mt-1">
// // // // // // // // // //               Required Final: <b>{requiredMarks[i]}</b> / {(sub.marking.EndSem ?? sub.marking.LabCA ?? 0)}
// // // // // // // // // //             </div>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //     </motion.div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { motion } from "framer-motion";

// // // // // // // // // export default function TargetCGPA() {
// // // // // // // // //   const [currentCGPA, setCurrentCGPA] = useState(0);
// // // // // // // // //   const [completedCredits, setCompletedCredits] = useState(0);
// // // // // // // // //   const [remainingCredits, setRemainingCredits] = useState(0);
// // // // // // // // //   const [targetCGPA, setTargetCGPA] = useState(8);

// // // // // // // // //   const totalCredits = completedCredits + remainingCredits;

// // // // // // // // //   // Calculate the required average CGPA in remaining credits
// // // // // // // // //   const requiredCGPA =
// // // // // // // // //     remainingCredits > 0
// // // // // // // // //       ? (
// // // // // // // // //           (targetCGPA * totalCredits - currentCGPA * completedCredits) /
// // // // // // // // //           remainingCredits
// // // // // // // // //         ).toFixed(2)
// // // // // // // // //       : "N/A";

// // // // // // // // //   return (
// // // // // // // // //     <motion.div
// // // // // // // // //       initial={{ opacity: 0, y: 40 }}
// // // // // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // // // // //       transition={{ duration: 0.7 }}
// // // // // // // // //       className="p-6 bg-[#22252A] rounded-xl shadow-lg border-2 border-[#00FFD0] max-w-lg mx-auto mt-8"
// // // // // // // // //     >
// // // // // // // // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target CGPA Calculator</h2>
// // // // // // // // //       <div className="mb-4 flex flex-col gap-2">
// // // // // // // // //         <label>
// // // // // // // // //           <b>Current CGPA:</b>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             value={currentCGPA}
// // // // // // // // //             min={0}
// // // // // // // // //             max={10}
// // // // // // // // //             step={0.01}
// // // // // // // // //             onChange={e => setCurrentCGPA(Number(e.target.value))}
// // // // // // // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // // // // // // //           />
// // // // // // // // //         </label>
// // // // // // // // //         <label>
// // // // // // // // //           <b>Completed Credits:</b>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             value={completedCredits}
// // // // // // // // //             min={0}
// // // // // // // // //             onChange={e => setCompletedCredits(Number(e.target.value))}
// // // // // // // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // // // // // // //           />
// // // // // // // // //         </label>
// // // // // // // // //         <label>
// // // // // // // // //           <b>Remaining Credits:</b>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             value={remainingCredits}
// // // // // // // // //             min={1}
// // // // // // // // //             onChange={e => setRemainingCredits(Number(e.target.value))}
// // // // // // // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // // // // // // //           />
// // // // // // // // //         </label>
// // // // // // // // //         <label>
// // // // // // // // //           <b>Target CGPA:</b>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             value={targetCGPA}
// // // // // // // // //             min={0}
// // // // // // // // //             max={10}
// // // // // // // // //             step={0.01}
// // // // // // // // //             onChange={e => setTargetCGPA(Number(e.target.value))}
// // // // // // // // //             className="border px-2 py-1 rounded w-24 ml-2 text-black"
// // // // // // // // //           />
// // // // // // // // //         </label>
// // // // // // // // //       </div>
// // // // // // // // //       <div className="mt-4 text-lg text-[#F0F0F0]">
// // // // // // // // //         <b>Required Average CGPA in Remaining Credits:</b>
// // // // // // // // //         <span className="ml-2 text-[#FF007F] font-mono">{requiredCGPA}</span>
// // // // // // // // //       </div>
// // // // // // // // //       <div className="text-[#B0B0B0] text-sm mt-2">
// // // // // // // // //         <b>Formula:</b> <br />
// // // // // // // // //         <span className="font-mono">
// // // // // // // // //           Required CGPA = (Target CGPA × Total Credits - Current CGPA × Completed Credits) ÷ Remaining Credits
// // // // // // // // //         </span>
// // // // // // // // //       </div>
// // // // // // // // //     </motion.div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import type { Subject } from "../utils/curriculum";
// // // // // // // // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // // // // // // // Helper: Find min marks in final exam for each subject to reach target SGPI
// // // // // // // // function getRequiredFinals(
// // // // // // // //   subjects: Subject[],
// // // // // // // //   internals: number[],
// // // // // // // //   targetSGPI: number
// // // // // // // // ): (number | string)[] {
// // // // // // // //   // For each subject, try all possible marks in final exam (0 to max)
// // // // // // // //   // and check if a combination is possible to reach target SGPI.
// // // // // // // //   // For simplicity, for each subject, we assume user gets min possible in other finals.
// // // // // // // //   return subjects.map((sub, idx) => {
// // // // // // // //     const maxFinal = sub.marking.EndSem ?? sub.marking.LabCA ?? 0;
// // // // // // // //     const internal = internals[idx] || 0;
// // // // // // // //     let found = false;
// // // // // // // //     for (let marks = 0; marks <= maxFinal; marks++) {
// // // // // // // //       // For all other subjects, take their internals + 0 in final
// // // // // // // //       // For this subject, try internals + marks
// // // // // // // //       const trialMarks = subjects.map((_, i) =>
// // // // // // // //         i === idx ? internal + marks : internals[i]
// // // // // // // //       );
// // // // // // // //       const sgpi = calculateSGPI(
// // // // // // // //         subjects,
// // // // // // // //         trialMarks.map((m, i) => {
// // // // // // // //           // Clamp to subject total
// // // // // // // //           const total = subjects[i].marking.total;
// // // // // // // //           return Math.min(m, total);
// // // // // // // //         })
// // // // // // // //       );
// // // // // // // //       if (sgpi >= targetSGPI) {
// // // // // // // //         found = true;
// // // // // // // //         return marks;
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //     return found ? 0 : "Impossible";
// // // // // // // //   });
// // // // // // // // }

// // // // // // // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // // // // // // //   const [targetSGPI, setTargetSGPI] = useState(8);
// // // // // // // //   const [internals, setInternals] = useState<number[]>(Array(subjects.length).fill(0));

// // // // // // // //   const requiredFinals = getRequiredFinals(subjects, internals, targetSGPI);

// // // // // // // //   return (
// // // // // // // //     <motion.div
// // // // // // // //       initial={{ opacity: 0, y: 40 }}
// // // // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // // // //       transition={{ duration: 0.7 }}
// // // // // // // //       className="p-4"
// // // // // // // //     >
// // // // // // // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
// // // // // // // //       <div className="mb-4 flex items-center gap-2">
// // // // // // // //         <label className="font-bold">Target SGPI: </label>
// // // // // // // //         <input
// // // // // // // //           type="number"
// // // // // // // //           value={targetSGPI}
// // // // // // // //           min={0}
// // // // // // // //           max={10}
// // // // // // // //           step={0.01}
// // // // // // // //           onChange={e => setTargetSGPI(Number(e.target.value))}
// // // // // // // //           className="border px-2 py-1 rounded w-20 text-black"
// // // // // // // //         />
// // // // // // // //       </div>
// // // // // // // //       <div className="grid md:grid-cols-2 gap-4">
// // // // // // // //         {subjects.map((sub, i) => (
// // // // // // // //           <motion.div
// // // // // // // //             key={sub.code}
// // // // // // // //             initial={{ opacity: 0, x: -30 }}
// // // // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // // // //             transition={{ delay: i * 0.05 }}
// // // // // // // //             className="bg-[#22252A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// // // // // // // //           >
// // // // // // // //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// // // // // // // //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// // // // // // // //             <input
// // // // // // // //               type="number"
// // // // // // // //               min={0}
// // // // // // // //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0) + (sub.marking.LabCA ?? 0)}
// // // // // // // //               value={internals[i] || ""}
// // // // // // // //               onChange={e => {
// // // // // // // //                 const arr = [...internals];
// // // // // // // //                 arr[i] = Number(e.target.value);
// // // // // // // //                 setInternals(arr);
// // // // // // // //               }}
// // // // // // // //               className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // // // // // //               placeholder="Current Internal"
// // // // // // // //             />
// // // // // // // //             <div className="text-sm text-[#FF007F] mt-1">
// // // // // // // //               Required Final: <b>{requiredFinals[i]}</b> / {(sub.marking.EndSem ?? sub.marking.LabCA ?? 0)}
// // // // // // // //             </div>
// // // // // // // //           </motion.div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //       <div className="mt-6 text-[#B0B0B0] text-sm">
// // // // // // // //         <b>How this works:</b> Enter your current internal marks for each subject. The calculator shows the <b>minimum marks</b> you need in each final exam to reach your target SGPI, assuming you score the minimum possible in all other finals.
// // // // // // // //       </div>
// // // // // // // //     </motion.div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import React, { useState } from "react";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import type { Subject } from "../utils/curriculum";
// // // // // // // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // // // // // // Helper: Only consider subjects with EndSem
// // // // // // // function getEndSemSubjects(subjects: Subject[]) {
// // // // // // //   return subjects
// // // // // // //     .map((sub, idx) => ({ ...sub, idx }))
// // // // // // //     .filter(sub => sub.marking.EndSem && sub.marking.EndSem > 0);
// // // // // // // }

// // // // // // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // // // // // //   const endSemSubjects = getEndSemSubjects(subjects);

// // // // // // //   // Internal marks for each subject with EndSem
// // // // // // //   const [internals, setInternals] = useState<number[]>(Array(endSemSubjects.length).fill(0));
// // // // // // //   const [targetSGPI, setTargetSGPI] = useState(8);

// // // // // // //   // For each EndSem subject, find minimum EndSem marks needed to reach target SGPI
// // // // // // //   const requiredFinals = endSemSubjects.map((sub, i) => {
// // // // // // //     const totalSubs = [...subjects];
// // // // // // //     // Prepare marks array: for all subjects, fill in internals + 0 for EndSem, except this one
// // // // // // //     // For this subject, try all possible EndSem marks
// // // // // // //     const internalMarks = [...internals];
// // // // // // //     let found = false;
// // // // // // //     for (let marks = 0; marks <= (sub.marking.EndSem ?? 0); marks++) {
// // // // // // //       // Build full marks array for SGPI calculation
// // // // // // //       const marksArr = subjects.map((s, idx) => {
// // // // // // //         if (s.code === sub.code) {
// // // // // // //           // This is the subject we're testing
// // // // // // //           return (internalMarks[i] || 0) + marks;
// // // // // // //         } else if (s.marking.EndSem && s.marking.EndSem > 0) {
// // // // // // //           // Other EndSem subjects: use internals only
// // // // // // //           const j = endSemSubjects.findIndex(es => es.code === s.code);
// // // // // // //           return (j !== -1 ? (internalMarks[j] || 0) : 0);
// // // // // // //         } else {
// // // // // // //           // Labs/others: assume full marks or 0 as per your rules (here, full marks)
// // // // // // //           return s.marking.LabCA ?? s.marking.total ?? 0;
// // // // // // //         }
// // // // // // //       });
// // // // // // //       const sgpi = calculateSGPI(subjects, marksArr);
// // // // // // //       if (sgpi >= targetSGPI) {
// // // // // // //         found = true;
// // // // // // //         return marks;
// // // // // // //       }
// // // // // // //     }
// // // // // // //     return found ? 0 : "Impossible";
// // // // // // //   });

// // // // // // //   return (
// // // // // // //     <motion.div
// // // // // // //       initial={{ opacity: 0, y: 40 }}
// // // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // // //       transition={{ duration: 0.7 }}
// // // // // // //       className="p-4"
// // // // // // //     >
// // // // // // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
// // // // // // //       <div className="mb-4 flex items-center gap-2">
// // // // // // //         <label className="font-bold">Target SGPI: </label>
// // // // // // //         <input
// // // // // // //           type="number"
// // // // // // //           value={targetSGPI}
// // // // // // //           min={0}
// // // // // // //           max={10}
// // // // // // //           step={0.01}
// // // // // // //           onChange={e => setTargetSGPI(Number(e.target.value))}
// // // // // // //           className="border px-2 py-1 rounded w-20 text-black"
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <div className="grid md:grid-cols-2 gap-4">
// // // // // // //         {endSemSubjects.map((sub, i) => (
// // // // // // //           <motion.div
// // // // // // //             key={sub.code}
// // // // // // //             initial={{ opacity: 0, x: -30 }}
// // // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // // //             transition={{ delay: i * 0.05 }}
// // // // // // //             className="bg-[#22252A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// // // // // // //           >
// // // // // // //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// // // // // // //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               min={0}
// // // // // // //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
// // // // // // //               value={internals[i] || ""}
// // // // // // //               onChange={e => {
// // // // // // //                 const arr = [...internals];
// // // // // // //                 arr[i] = Number(e.target.value);
// // // // // // //                 setInternals(arr);
// // // // // // //               }}
// // // // // // //               className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // // // // //               placeholder="Internal Marks"
// // // // // // //             />
// // // // // // //             <div className="text-sm text-[#FF007F] mt-1">
// // // // // // //               Required EndSem: <b>{requiredFinals[i]}</b> / {sub.marking.EndSem}
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //       <div className="mt-6 text-[#B0B0B0] text-sm">
// // // // // // //         <b>How this works:</b> Enter your current internal marks (CA + InSem) for each subject with an EndSem. The calculator shows the <b>minimum EndSem marks</b> you need in each to reach your target SGPI, assuming you score minimum possible in all other EndSems.
// // // // // // //       </div>
// // // // // // //     </motion.div>
// // // // // // //   );
// // // // // // // }
// // // // // // import React, { useState } from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import type { Subject } from "../utils/curriculum";
// // // // // // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // // // // // Helper: For each subject, return { type: "ESE" | "Lab", idx }
// // // // // // function getSubjectTypes(subjects: Subject[]) {
// // // // // //   return subjects.map((sub, idx) => {
// // // // // //     if (sub.marking.EndSem && sub.marking.EndSem > 0) return { type: "ESE", idx };
// // // // // //     if (sub.marking.LabCA && sub.marking.LabCA > 0) return { type: "Lab", idx };
// // // // // //     return { type: "Other", idx };
// // // // // //   });
// // // // // // }

// // // // // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // // // // //   const subjectTypes = getSubjectTypes(subjects);

// // // // // //   // For ESE subjects: user enters CA+InSem, for Lab: user enters LabCA (final)
// // // // // //   const [inputs, setInputs] = useState<number[]>(Array(subjects.length).fill(0));
// // // // // //   const [targetSGPI, setTargetSGPI] = useState(8);

// // // // // //   // For each ESE subject, calculate minimum ESE marks needed to reach target SGPI
// // // // // //   const requiredESE = subjects.map((sub, i) => {
// // // // // //     if (sub.marking.EndSem && sub.marking.EndSem > 0) {
// // // // // //       // For this subject, try all possible ESE marks
// // // // // //       for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
// // // // // //         // Build marks array for SGPI calculation
// // // // // //         const marksArr = subjects.map((s, j) => {
// // // // // //           if (j === i) return (inputs[j] || 0) + ese;
// // // // // //           // For other ESE subjects: use their entered internals + minimum passing ESE (let's use 0 for minimum)
// // // // // //           if (s.marking.EndSem && s.marking.EndSem > 0) return inputs[j] || 0;
// // // // // //           // For LabCA: use entered marks (final, no calculation)
// // // // // //           if (s.marking.LabCA && s.marking.LabCA > 0) return inputs[j] || 0;
// // // // // //           // For others: 0
// // // // // //           return 0;
// // // // // //         });
// // // // // //         const sgpi = calculateSGPI(subjects, marksArr);
// // // // // //         if (sgpi >= targetSGPI) return ese;
// // // // // //       }
// // // // // //       return "Impossible";
// // // // // //     }
// // // // // //     return "-";
// // // // // //   });

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       initial={{ opacity: 0, y: 40 }}
// // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // //       transition={{ duration: 0.7 }}
// // // // // //       className="p-4"
// // // // // //     >
// // // // // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
// // // // // //       <div className="mb-4 flex items-center gap-2">
// // // // // //         <label className="font-bold">Target SGPI: </label>
// // // // // //         <input
// // // // // //           type="number"
// // // // // //           value={targetSGPI}
// // // // // //           min={0}
// // // // // //           max={10}
// // // // // //           step={0.01}
// // // // // //           onChange={e => setTargetSGPI(Number(e.target.value))}
// // // // // //           className="border px-2 py-1 rounded w-20 text-black"
// // // // // //         />
// // // // // //       </div>
// // // // // //       <div className="grid md:grid-cols-2 gap-4">
// // // // // //         {subjects.map((sub, i) => (
// // // // // //           <motion.div
// // // // // //             key={sub.code}
// // // // // //             initial={{ opacity: 0, x: -30 }}
// // // // // //             animate={{ opacity: 1, x: 0 }}
// // // // // //             transition={{ delay: i * 0.05 }}
// // // // // //             className="bg-[#22252A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// // // // // //           >
// // // // // //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// // // // // //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// // // // // //             {subjectTypes[i].type === "ESE" ? (
// // // // // //               <>
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   min={0}
// // // // // //                   max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
// // // // // //                   value={inputs[i] || ""}
// // // // // //                   onChange={e => {
// // // // // //                     const arr = [...inputs];
// // // // // //                     arr[i] = Number(e.target.value);
// // // // // //                     setInputs(arr);
// // // // // //                   }}
// // // // // //                   className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // // // //                   placeholder="CA + InSem"
// // // // // //                 />
// // // // // //                 <div className="text-sm text-[#FF007F] mt-1">
// // // // // //                   Required ESE: <b>{requiredESE[i]}</b> / {sub.marking.EndSem}
// // // // // //                 </div>
// // // // // //               </>
// // // // // //             ) : subjectTypes[i].type === "Lab" ? (
// // // // // //               <>
// // // // // //                 <input
// // // // // //                   type="number"
// // // // // //                   min={0}
// // // // // //                   max={sub.marking.LabCA}
// // // // // //                   value={inputs[i] || ""}
// // // // // //                   onChange={e => {
// // // // // //                     const arr = [...inputs];
// // // // // //                     arr[i] = Number(e.target.value);
// // // // // //                     setInputs(arr);
// // // // // //                   }}
// // // // // //                   className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // // // //                   placeholder="LabCA"
// // // // // //                 />
// // // // // //                 <div className="text-sm text-[#B0B0B0] mt-1">
// // // // // //                   (Lab marks are final)
// // // // // //                 </div>
// // // // // //               </>
// // // // // //             ) : (
// // // // // //               <div className="text-sm text-[#B0B0B0] mt-1">N/A</div>
// // // // // //             )}
// // // // // //           </motion.div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //       <div className="mt-6 text-[#B0B0B0] text-sm">
// // // // // //         <b>How this works:</b> Enter your internal marks (CA + InSem) for each ESE subject, and LabCA for labs. The calculator shows the <b>minimum ESE marks</b> needed in each to reach your target SGPI, assuming all other ESEs are at minimum required.
// // // // // //       </div>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // }
// // // // // // src/components/TargetSGPI.tsx
// // // // // // Target SGPI calculator, ab AM-1 waale logic ke saath, Hinglish comments

// // // // // import React, { useState } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import type { Subject } from "../utils/curriculum";
// // // // // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // // // //   // User yahan CA+ISE ya LabCA input karega
// // // // //   const [inputs, setInputs] = useState<number[]>(Array(subjects.length).fill(0));
// // // // //   const [targetSGPI, setTargetSGPI] = useState(8);

// // // // //   // For each subject, calculate minimum ESE/LabCA marks needed for target SGPI
// // // // //   const requiredFinals = subjects.map((sub, i) => {
// // // // //     // Agar subject me EndSem hai, toh uska calculation karo
// // // // //     if (sub.marking.EndSem && sub.marking.EndSem > 0) {
// // // // //       // User ne ab tak kitne marks liye (CA+ISE)
// // // // //       const internal = inputs[i] || 0;
// // // // //       // For this subject, try all possible ESE marks
// // // // //       for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
// // // // //         // Sab subjects ke marks array banao
// // // // //         const marksArr = subjects.map((s, j) => {
// // // // //           if (j === i) return internal + ese;
// // // // //           // Baaki EndSem waale: user input only (CA+ISE)
// // // // //           if (s.marking.EndSem && s.marking.EndSem > 0) return inputs[j] || 0;
// // // // //           // LabCA waale: user input hi final hai
// // // // //           if (s.marking.LabCA && s.marking.LabCA > 0) return inputs[j] || 0;
// // // // //           // Others: 0
// // // // //           return 0;
// // // // //         });
// // // // //         const sgpi = calculateSGPI(subjects, marksArr);
// // // // //         if (sgpi >= targetSGPI) return ese;
// // // // //       }
// // // // //       return "Impossible";
// // // // //     }
// // // // //     // Agar LabCA hai toh user input hi final hai
// // // // //     if (sub.marking.LabCA && sub.marking.LabCA > 0) {
// // // // //       return "-";
// // // // //     }
// // // // //     return "-";
// // // // //   });

// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0, y: 40 }}
// // // // //       animate={{ opacity: 1, y: 0 }}
// // // // //       transition={{ duration: 0.7 }}
// // // // //       className="p-4"
// // // // //     >
// // // // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
// // // // //       <div className="mb-4 flex items-center gap-2">
// // // // //         <label className="font-bold">Target SGPI: </label>
// // // // //         <input
// // // // //           type="number"
// // // // //           value={targetSGPI}
// // // // //           min={0}
// // // // //           max={10}
// // // // //           step={0.01}
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
// // // // //             className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// // // // //           >
// // // // //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// // // // //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// // // // //             {sub.marking.EndSem && sub.marking.EndSem > 0 ? (
// // // // //               <>
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   min={0}
// // // // //                   max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
// // // // //                   value={inputs[i] || ""}
// // // // //                   onChange={e => {
// // // // //                     const arr = [...inputs];
// // // // //                     arr[i] = Number(e.target.value);
// // // // //                     setInputs(arr);
// // // // //                   }}
// // // // //                   className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // // //                   placeholder="CA + ISE"
// // // // //                 />
// // // // //                 <div className="text-sm text-[#FF007F] mt-1">
// // // // //                   Required ESE: <b>{requiredFinals[i]}</b> / {sub.marking.EndSem}
// // // // //                 </div>
// // // // //               </>
// // // // //             ) : sub.marking.LabCA && sub.marking.LabCA > 0 ? (
// // // // //               <>
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   min={0}
// // // // //                   max={sub.marking.LabCA}
// // // // //                   value={inputs[i] || ""}
// // // // //                   onChange={e => {
// // // // //                     const arr = [...inputs];
// // // // //                     arr[i] = Number(e.target.value);
// // // // //                     setInputs(arr);
// // // // //                   }}
// // // // //                   className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // // //                   placeholder="LabCA"
// // // // //                 />
// // // // //                 <div className="text-sm text-[#B0B0B0] mt-1">
// // // // //                   (Lab marks are final)
// // // // //                 </div>
// // // // //               </>
// // // // //             ) : (
// // // // //               <div className="text-sm text-[#B0B0B0] mt-1">N/A</div>
// // // // //             )}
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div className="mt-6 text-[#B0B0B0] text-sm">
// // // // //         {/* User ko logic samjhao */}
// // // // //         <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. The calculator shows the <b>minimum ESE marks</b> needed in each to reach your target SGPI.
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // }
// // // // // src/components/TargetSGPI.tsx
// // // // // Target SGPI calculator - ab button-based, result table, real SGPI logic, Hinglish comments

// // // // import React, { useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import type { Subject } from "../utils/curriculum";
// // // // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // // //   // User yahan CA+ISE ya LabCA input karega
// // // //   const [inputs, setInputs] = useState<number[]>(Array(subjects.length).fill(0));
// // // //   const [targetSGPI, setTargetSGPI] = useState(10);
// // // //   const [results, setResults] = useState<(number | string)[] | null>(null);
// // // //   const [fail, setFail] = useState(false);

// // // //   // Button pe click karne pe calculation hoga
// // // //   function handleCalculate() {
// // // //     // FF check: agar kisi bhi subject me abhi tak FF hai toh fail dikhao
// // // //     const anyFF = subjects.some((sub, i) =>
// // // //       marksToGradePoint(inputs[i] || 0, sub.marking.total) === 0
// // // //     );
// // // //     setFail(anyFF);

// // // //     // For each subject, calculate required ESE/LabCA marks
// // // //     const requiredFinals = subjects.map((sub, i) => {
// // // //       // Agar subject me EndSem hai, toh uska calculation karo
// // // //       if (sub.marking.EndSem && sub.marking.EndSem > 0) {
// // // //         const internal = inputs[i] || 0;
// // // //         // Try all possible ESE marks
// // // //         let found = false;
// // // //         for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
// // // //           // Sab subjects ke marks array banao
// // // //           const marksArr = subjects.map((s, j) => {
// // // //             if (j === i) return internal + ese;
// // // //             // Baaki EndSem waale: user input only (CA+ISE)
// // // //             if (s.marking.EndSem && s.marking.EndSem > 0) return inputs[j] || 0;
// // // //             // LabCA waale: user input hi final hai
// // // //             if (s.marking.LabCA && s.marking.LabCA > 0) return inputs[j] || 0;
// // // //             // Others: 0
// // // //             return 0;
// // // //           });
// // // //           const sgpi = calculateSGPI(subjects, marksArr);
// // // //           if (sgpi >= targetSGPI) {
// // // //             found = true;
// // // //             return ese;
// // // //           }
// // // //         }
// // // //         return found ? 0 : "Impossible";
// // // //       }
// // // //       // Agar LabCA hai toh user input hi final hai
// // // //       if (sub.marking.LabCA && sub.marking.LabCA > 0) {
// // // //         return inputs[i] || 0;
// // // //       }
// // // //       return "-";
// // // //     });
// // // //     setResults(requiredFinals);
// // // //   }

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, y: 40 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.7 }}
// // // //       className="p-4"
// // // //     >
// // // //       <h2 className="text-2xl font-bold mb-4 text-[#00FFD0]">🎯 Target SGPI Calculator</h2>
// // // //       <div className="mb-4 flex items-center gap-2">
// // // //         <label className="font-bold">Target SGPI: </label>
// // // //         <input
// // // //           type="number"
// // // //           value={targetSGPI}
// // // //           min={0}
// // // //           max={10}
// // // //           step={0.01}
// // // //           onChange={e => setTargetSGPI(Number(e.target.value))}
// // // //           className="border px-2 py-1 rounded w-20 text-black"
// // // //         />
// // // //       </div>
// // // //       <div className="grid md:grid-cols-2 gap-4">
// // // //         {subjects.map((sub, i) => (
// // // //           <motion.div
// // // //             key={sub.code}
// // // //             initial={{ opacity: 0, x: -30 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ delay: i * 0.05 }}
// // // //             className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// // // //           >
// // // //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// // // //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// // // //             {sub.marking.EndSem && sub.marking.EndSem > 0 ? (
// // // //               <>
// // // //                 <input
// // // //                   type="number"
// // // //                   min={0}
// // // //                   max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0)}
// // // //                   value={inputs[i] || ""}
// // // //                   onChange={e => {
// // // //                     const arr = [...inputs];
// // // //                     arr[i] = Number(e.target.value);
// // // //                     setInputs(arr);
// // // //                   }}
// // // //                   className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // //                   placeholder="CA + ISE"
// // // //                 />
// // // //               </>
// // // //             ) : sub.marking.LabCA && sub.marking.LabCA > 0 ? (
// // // //               <>
// // // //                 <input
// // // //                   type="number"
// // // //                   min={0}
// // // //                   max={sub.marking.LabCA}
// // // //                   value={inputs[i] || ""}
// // // //                   onChange={e => {
// // // //                     const arr = [...inputs];
// // // //                     arr[i] = Number(e.target.value);
// // // //                     setInputs(arr);
// // // //                   }}
// // // //                   className="border px-2 py-1 rounded w-24 text-black mb-2"
// // // //                   placeholder="LabCA"
// // // //                 />
// // // //                 <div className="text-sm text-[#B0B0B0] mt-1">
// // // //                   (Lab marks are final)
// // // //                 </div>
// // // //               </>
// // // //             ) : (
// // // //               <div className="text-sm text-[#B0B0B0] mt-1">N/A</div>
// // // //             )}
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //       <button
// // // //         onClick={handleCalculate}
// // // //         className="mt-6 bg-[#00FFD0] text-[#181A1B] px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#00A0FF] transition"
// // // //       >
// // // //         Calculate Required Marks
// // // //       </button>

// // // //       {/* Result table */}
// // // //       {results && (
// // // //         <div className="mt-8">
// // // //           {fail ? (
// // // //             <div className="text-2xl font-bold text-[#FF007F] mb-4">Failed (FF in at least one subject)</div>
// // // //           ) : (
// // // //             <>
// // // //               <h3 className="text-xl font-bold text-[#FFD600] mb-2">Required Marks (per subject)</h3>
// // // //               <table className="w-full text-left border border-[#00FFD0] rounded-xl bg-[#23272f] shadow-2xl">
// // // //                 <thead>
// // // //                   <tr className="bg-[#00FFD0] text-[#181A1B]">
// // // //                     <th className="p-2 font-bold">Subject</th>
// // // //                     <th className="font-bold">Code</th>
// // // //                     <th className="font-bold">Required ESE/LabCA</th>
// // // //                     <th className="font-bold">Max</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {subjects.map((sub, i) => (
// // // //                     <tr key={sub.code} className="hover:bg-[#00FFD0]/20 transition">
// // // //                       <td className="p-2 text-[#FFD600]">{sub.name}</td>
// // // //                       <td className="font-mono text-[#00FFD0]">{sub.code}</td>
// // // //                       <td className="text-[#FF007F]">{results[i]}</td>
// // // //                       <td className="text-[#00FFD0]">
// // // //                         {sub.marking.EndSem ?? sub.marking.LabCA ?? sub.marking.total}
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //       <div className="mt-6 text-[#B0B0B0] text-sm">
// // // //         {/* User ko logic samjhao */}
// // // //         <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. Click "Calculate Required Marks" to see the minimum ESE/LabCA marks needed in each to reach your target SGPI.
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }
// // // // src/components/TargetSGPI.tsx
// // // // Target SGPI calculator - ab real weighted logic ke saath (Hinglish comments)

// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import type { Subject } from "../utils/curriculum";
// // // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// // //   // User yahan CA+ISE aur EndSem/LabCA input karega (agar pata hai)
// // //   const [internals, setInternals] = useState<number[]>(Array(subjects.length).fill(0));
// // //   const [finals, setFinals] = useState<(number | "")[]>(Array(subjects.length).fill(""));
// // //   const [targetSGPI, setTargetSGPI] = useState(8.5);
// // //   const [results, setResults] = useState<(number | string)[] | null>(null);
// // //   const [fail, setFail] = useState(false);

// // //   // Grade point mapping (same as your sgpi.ts)
// // //   function getGradePoint(marks: number, total: number) {
// // //     const percent = (marks / total) * 100;
// // //     if (percent >= 80) return 10;
// // //     if (percent >= 70) return 9;
// // //     if (percent >= 60) return 8;
// // //     if (percent >= 55) return 7;
// // //     if (percent >= 50) return 6;
// // //     if (percent >= 45) return 5;
// // //     if (percent >= 40) return 4;
// // //     return 0;
// // //   }

// // //   // Calculate required EndSem/LabCA marks for each subject
// // //   function handleCalculate() {
// // //     // Pehle check karo: agar kisi bhi subject me abhi tak FF hai toh fail dikhao
// // //     const anyFF = subjects.some((sub, i) => {
// // //       const totalMarks = (internals[i] || 0) + (finals[i] ? Number(finals[i]) : 0);
// // //       return getGradePoint(totalMarks, sub.marking.total) === 0;
// // //     });
// // //     setFail(anyFF);

// // //     // Total credits
// // //     const totalCredits = subjects.reduce((sum, sub) => sum + sub.credits, 0);

// // //     // Pehle jitne points secured hain (jin subjects me final marks diye hain)
// // //     let securedPoints = 0;
// // //     let securedCredits = 0;
// // //     const unknowns: number[] = [];

// // //     subjects.forEach((sub, i) => {
// // //       const hasFinal =
// // //         (sub.marking.EndSem && finals[i] !== "") ||
// // //         (sub.marking.LabCA && finals[i] !== "");
// // //       if (hasFinal) {
// // //         const totalMarks = (internals[i] || 0) + Number(finals[i]);
// // //         const gp = getGradePoint(totalMarks, sub.marking.total);
// // //         securedPoints += gp * sub.credits;
// // //         securedCredits += sub.credits;
// // //       } else {
// // //         unknowns.push(i);
// // //       }
// // //     });

// // //     // Baaki subjects ke liye, har subject ka minimum required marks nikaalo
// // //     // Sab unknowns ke finals ko 0 se max tak try karo, baaki unknowns ko minimum passing grade pe rakho
// // //     const reqs = subjects.map((sub, i) => {
// // //       // Agar final marks already diye hain, toh "-" dikhao
// // //       if (
// // //         (sub.marking.EndSem && finals[i] !== "") ||
// // //         (sub.marking.LabCA && finals[i] !== "")
// // //       ) {
// // //         return "-";
// // //       }
// // //       // Agar LabCA hai, user ko khud hi input karna hai, calculation nahi hoga
// // //       if (sub.marking.LabCA && sub.marking.LabCA > 0) {
// // //         return "-";
// // //       }
// // //       // EndSem waale subjects ke liye calculation
// // //       if (sub.marking.EndSem && sub.marking.EndSem > 0) {
// // //         for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
// // //           // Baaki unknowns ko minimum passing grade pe rakho
// // //           let tempPoints = securedPoints;
// // //           let tempCredits = securedCredits;
// // //           // This subject: try current ese
// // //           const totalMarks = (internals[i] || 0) + ese;
// // //           const gp = getGradePoint(totalMarks, sub.marking.total);
// // //           tempPoints += gp * sub.credits;
// // //           tempCredits += sub.credits;
// // //           // Baaki unknowns (except this one): minimum passing
// // //           unknowns.forEach(j => {
// // //             if (j !== i) {
// // //               const minPassing = Math.max(
// // //                 0,
// // //                 Math.ceil((40 * subjects[j].marking.total) / 100) - (internals[j] || 0)
// // //               );
// // //               const totalMarksJ = (internals[j] || 0) + minPassing;
// // //               const gpJ = getGradePoint(totalMarksJ, subjects[j].marking.total);
// // //               tempPoints += gpJ * subjects[j].credits;
// // //               tempCredits += subjects[j].credits;
// // //             }
// // //           });
// // //           const sgpi = tempCredits ? tempPoints / tempCredits : 0;
// // //           if (sgpi >= targetSGPI) return ese;
// // //         }
// // //         return "Impossible";
// // //       }
// // //       return "-";
// // //     });

// // //     setResults(reqs);
// // //   }

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
// // //             className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// // //           >
// // //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// // //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// // //             {/* Internal marks input */}
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
// // //               placeholder={
// // //                 sub.marking.EndSem && sub.marking.EndSem > 0
// // //                   ? "CA + ISE"
// // //                   : sub.marking.LabCA && sub.marking.LabCA > 0
// // //                   ? "LabCA"
// // //                   : "Internal"
// // //               }
// // //             />
// // //             {/* Final marks input (optional, if already known) */}
// // //             {sub.marking.EndSem && sub.marking.EndSem > 0 ? (
// // //               <input
// // //                 type="number"
// // //                 min={""}
// // //                 max={sub.marking.EndSem}
// // //                 value={finals[i]}
// // //                 onChange={e => {
// // //                   const arr = [...finals];
// // //                   arr[i] = e.target.value === "" ? "" : Number(e.target.value);
// // //                   setFinals(arr);
// // //                 }}
// // //                 className="border px-2 py-1 rounded w-24 text-black mb-2"
// // //                 placeholder="ESE (if known)"
// // //               />
            
// // //             ) : null}
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //       <button
// // //         onClick={handleCalculate}
// // //         className="mt-6 bg-[#00FFD0] text-[#181A1B] px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#00A0FF] transition"
// // //       >
// // //         Calculate Required Marks
// // //       </button>

// // //       {/* Result table */}
// // //       {results && (
// // //         <div className="mt-8">
// // //           {fail ? (
// // //             <div className="text-2xl font-bold text-[#FF007F] mb-4">Failed (FF in at least one subject)</div>
// // //           ) : (
// // //             <>
// // //               <h3 className="text-xl font-bold text-[#FFD600] mb-2">Required Marks (per subject)</h3>
// // //               <table className="w-full text-left border border-[#00FFD0] rounded-xl bg-[#23272f] shadow-2xl">
// // //                 <thead>
// // //                   <tr className="bg-[#00FFD0] text-[#181A1B]">
// // //                     <th className="p-2 font-bold">Subject</th>
// // //                     <th className="font-bold">Code</th>
// // //                     <th className="font-bold">Required ESE/LabCA</th>
// // //                     <th className="font-bold">Max</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {subjects.map((sub, i) => (
// // //                     <tr key={sub.code} className="hover:bg-[#00FFD0]/20 transition">
// // //                       <td className="p-2 text-[#FFD600]">{sub.name}</td>
// // //                       <td className="font-mono text-[#00FFD0]">{sub.code}</td>
// // //                       <td className="text-[#FF007F]">{results[i]}</td>
// // //                       <td className="text-[#00FFD0]">
// // //                         {sub.marking.EndSem ?? sub.marking.LabCA ?? sub.marking.total}
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </>
// // //           )}
// // //         </div>
// // //       )}
// // //       <div className="mt-6 text-[#B0B0B0] text-sm">
// // //         {/* User ko logic samjhao */}
// // //         <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. Enter EndSem/LabCA if you already know your marks. Click "Calculate Required Marks" to see the minimum ESE/LabCA marks needed in each to reach your target SGPI.
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }
// // // src/components/TargetSGPI.tsx
// // // Target SGPI calculator - ab sahi weighted logic ke saath (Hinglish comments)

// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import type { Subject } from "../utils/curriculum";
// // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// //   // User yahan CA+ISE aur EndSem/LabCA input karega (agar pata hai)
// //   const [internals, setInternals] = useState<number[]>(Array(subjects.length).fill(0));
// //   const [finals, setFinals] = useState<(number | "")[]>(Array(subjects.length).fill(""));
// //   const [targetSGPI, setTargetSGPI] = useState(8.5);
// //   const [results, setResults] = useState<(number | string)[] | null>(null);
// //   const [fail, setFail] = useState(false);

// //   // Grade point mapping (same as your sgpi.ts)
// //   function getGradePoint(marks: number, total: number) {
// //     const percent = (marks / total) * 100;
// //     if (percent >= 80) return 10;
// //     if (percent >= 70) return 9;
// //     if (percent >= 60) return 8;
// //     if (percent >= 55) return 7;
// //     if (percent >= 50) return 6;
// //     if (percent >= 45) return 5;
// //     if (percent >= 40) return 4;
// //     return 0;
// //   }

// //   // Main calculation button
// //   function handleCalculate() {
// //     // FF check: agar kisi bhi subject me abhi tak FF hai toh fail dikhao
// //     const anyFF = subjects.some((sub, i) => {
// //       const totalMarks = (internals[i] || 0) + (finals[i] ? Number(finals[i]) : 0);
// //       return getGradePoint(totalMarks, sub.marking.total) === 0;
// //     });
// //     setFail(anyFF);

// //     // For each subject, find minimum required ESE/LabCA marks (others fixed as per user input)
// //     const reqs = subjects.map((sub, i) => {
// //       // Agar final marks already diye hain, toh "-" dikhao
// //       if (
// //         (sub.marking.EndSem && finals[i] !== "") ||
// //         (sub.marking.LabCA && finals[i] !== "")
// //       ) {
// //         return "-";
// //       }
// //       // Agar LabCA hai, user ko khud hi input karna hai, calculation nahi hoga
// //       if (sub.marking.LabCA && sub.marking.LabCA > 0) {
// //         return "-";
// //       }
// //       // EndSem waale subjects ke liye calculation
// //       if (sub.marking.EndSem && sub.marking.EndSem > 0) {
// //         // Try all possible marks for this subject's ESE
// //         for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
// //           // Array of marks for all subjects
// //           const marksArr = subjects.map((s, j) => {
// //             if (i === j) return (internals[j] || 0) + ese;
// //             // Agar user ne final marks diye hain toh woh use karo
// //             if ((s.marking.EndSem && finals[j] !== "") || (s.marking.LabCA && finals[j] !== "")) {
// //               return (internals[j] || 0) + Number(finals[j]);
// //             }
// //             // Agar LabCA hai, user input hi final hai
// //             if (s.marking.LabCA && s.marking.LabCA > 0) return internals[j] || 0;
// //             // Baaki: internals only
// //             return internals[j] || 0;
// //           });
// //           const sgpi = calculateSGPI(subjects, marksArr);
// //           if (sgpi >= targetSGPI) return ese;
// //         }
// //         return "Impossible";
// //       }
// //       return "-";
// //     });

// //     setResults(reqs);
// //   }

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
// //         {subjects.map((sub, i) => (
// //           <motion.div
// //             key={sub.code}
// //             initial={{ opacity: 0, x: -30 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: i * 0.05 }}
// //             className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// //           >
// //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// //             {/* Internal marks input */}
// //             <input
// //               type="number"
// //               min={0}
// //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0) + (sub.marking.LabCA ?? 0)}
// //               value={internals[i] || ""}
// //               onChange={e => {
// //                 const arr = [...internals];
// //                 arr[i] = Number(e.target.value);
// //                 setInternals(arr);
// //               }}
// //               className="border px-2 py-1 rounded w-24 text-black mb-2"
// //               placeholder={
// //                 sub.marking.EndSem && sub.marking.EndSem > 0
// //                   ? "CA + ISE"
// //                   : sub.marking.LabCA && sub.marking.LabCA > 0
// //                   ? "LabCA"
// //                   : "Internal"
// //               }
// //             />
// //             {/* Final marks input (optional, if already known) */}
// //             {sub.marking.EndSem && sub.marking.EndSem > 0 ? (
// //               <input
// //                 type="number"
// //                 min={""}
// //                 max={sub.marking.EndSem}
// //                 value={finals[i]}
// //                 onChange={e => {
// //                   const arr = [...finals];
// //                   arr[i] = e.target.value === "" ? "" : Number(e.target.value);
// //                   setFinals(arr);
// //                 }}
// //                 className="border px-2 py-1 rounded w-24 text-black mb-2"
// //                 placeholder="ESE (if known)"
// //               />
// //             ) : sub.marking.LabCA && sub.marking.LabCA > 0 ? (
// //               <input
// //                 type="number"
// //                 min={""}
// //                 max={sub.marking.LabCA}
// //                 value={finals[i]}
// //                 onChange={e => {
// //                   const arr = [...finals];
// //                   arr[i] = e.target.value === "" ? "" : Number(e.target.value);
// //                   setFinals(arr);
// //                 }}
// //                 className="border px-2 py-1 rounded w-24 text-black mb-2"
// //                 placeholder="LabCA (if known)"
// //               />
// //             ) : null}
// //           </motion.div>
// //         ))}
// //       </div>
// //       <button
// //         onClick={handleCalculate}
// //         className="mt-6 bg-[#00FFD0] text-[#181A1B] px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#00A0FF] transition"
// //       >
// //         Calculate Required Marks
// //       </button>

// //       {/* Result table */}
// //       {results && (
// //         <div className="mt-8">
// //           {fail ? (
// //             <div className="text-2xl font-bold text-[#FF007F] mb-4">Failed (FF in at least one subject)</div>
// //           ) : (
// //             <>
// //               <h3 className="text-xl font-bold text-[#FFD600] mb-2">Required Marks (per subject)</h3>
// //               <table className="w-full text-left border border-[#00FFD0] rounded-xl bg-[#23272f] shadow-2xl">
// //                 <thead>
// //                   <tr className="bg-[#00FFD0] text-[#181A1B]">
// //                     <th className="p-2 font-bold">Subject</th>
// //                     <th className="font-bold">Code</th>
// //                     <th className="font-bold">Required ESE/LabCA</th>
// //                     <th className="font-bold">Max</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {subjects.map((sub, i) => (
// //                     <tr key={sub.code} className="hover:bg-[#00FFD0]/20 transition">
// //                       <td className="p-2 text-[#FFD600]">{sub.name}</td>
// //                       <td className="font-mono text-[#00FFD0]">{sub.code}</td>
// //                       <td className="text-[#FF007F]">{results[i]}</td>
// //                       <td className="text-[#00FFD0]">
// //                         {sub.marking.EndSem ?? sub.marking.LabCA ?? sub.marking.total}
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </>
// //           )}
// //         </div>
// //       )}
// //       <div className="mt-6 text-[#B0B0B0] text-sm">
// //         {/* User ko logic samjhao */}
// //         <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. Enter EndSem/LabCA if you already know your marks. Click "Calculate Required Marks" to see the minimum ESE/LabCA marks needed in each to reach your target SGPI.
// //       </div>
// //     </motion.div>
// //   );
// // }
// // src/components/TargetSGPI.tsx
// // Target SGPI calculator - ab sahi weighted logic, LabCA sirf ek baar, 0 credit subjects ignore, Hinglish comments

// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import type { Subject } from "../utils/curriculum";
// // import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// // export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
// //   // Filter out 0 credit subjects
// //   const activeSubjects = subjects.filter(sub => sub.credits > 0);

// //   // User yahan CA+ISE aur LabCA/EndSem input karega
// //   const [internals, setInternals] = useState<number[]>(Array(activeSubjects.length).fill(0));
// //   const [finals, setFinals] = useState<(number | "")[]>(Array(activeSubjects.length).fill(""));
// //   const [targetSGPI, setTargetSGPI] = useState(8.5);
// //   const [results, setResults] = useState<(number | string)[] | null>(null);
// //   const [fail, setFail] = useState(false);

// //   // Grade point mapping (same as your sgpi.ts)
// //   function getGradePoint(marks: number, total: number) {
// //     const percent = (marks / total) * 100;
// //     if (percent >= 80) return 10;
// //     if (percent >= 70) return 9;
// //     if (percent >= 60) return 8;
// //     if (percent >= 55) return 7;
// //     if (percent >= 50) return 6;
// //     if (percent >= 45) return 5;
// //     if (percent >= 40) return 4;
// //     return 0;
// //   }

// //   // Main calculation button
// //   function handleCalculate() {
// //     // FF check: agar kisi bhi subject me abhi tak FF hai toh fail dikhao
// //     const anyFF = activeSubjects.some((sub, i) => {
// //       const totalMarks = (internals[i] || 0) + (finals[i] ? Number(finals[i]) : 0);
// //       return getGradePoint(totalMarks, sub.marking.total) === 0;
// //     });
// //     setFail(anyFF);

// //     // For each ESE subject, find minimum required ESE marks (others fixed as per user input)
// //     const reqs = activeSubjects.map((sub, i) => {
// //       // Agar LabCA hai, user input hi final hai, calculation nahi hoga
// //       if (sub.marking.LabCA && sub.marking.LabCA > 0) {
// //         return "-";
// //       }
// //       // Agar EndSem hai aur final marks already diye hain, toh "-" dikhao
// //       if (sub.marking.EndSem && finals[i] !== "") {
// //         return "-";
// //       }
// //       // EndSem waale subjects ke liye calculation
// //       if (sub.marking.EndSem && sub.marking.EndSem > 0) {
// //         // Try all possible marks for this subject's ESE
// //         for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
// //           // Array of marks for all subjects
// //           const marksArr = activeSubjects.map((s, j) => {
// //             if (i === j) return (internals[j] || 0) + ese;
// //             // Agar user ne final marks diye hain toh woh use karo
// //             if ((s.marking.EndSem && finals[j] !== "") || (s.marking.LabCA && finals[j] !== "")) {
// //               return (internals[j] || 0) + Number(finals[j]);
// //             }
// //             // Agar LabCA hai, user input hi final hai
// //             if (s.marking.LabCA && s.marking.LabCA > 0) return internals[j] || 0;
// //             // Baaki: internals only
// //             return internals[j] || 0;
// //           });
// //           // Weighted SGPI calculation (only for activeSubjects)
// //           const sgpi = calculateSGPI(activeSubjects, marksArr);
// //           if (sgpi >= targetSGPI) return ese;
// //         }
// //         return "Impossible";
// //       }
// //       return "-";
// //     });

// //     setResults(reqs);
// //   }

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
// //         {activeSubjects.map((sub, i) => (
// //           <motion.div
// //             key={sub.code}
// //             initial={{ opacity: 0, x: -30 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: i * 0.05 }}
// //             className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
// //           >
// //             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
// //             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
// //             {/* Internal marks input */}
// //             <input
// //               type="number"
// //               min={0}
// //               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0) + (sub.marking.LabCA ?? 0)}
// //               value={internals[i] || ""}
// //               onChange={e => {
// //                 const arr = [...internals];
// //                 arr[i] = Number(e.target.value);
// //                 setInternals(arr);
// //               }}
// //               className="border px-2 py-1 rounded w-24 text-black mb-2"
// //               placeholder={
// //                 sub.marking.EndSem && sub.marking.EndSem > 0
// //                   ? "CA + ISE"
// //                   : sub.marking.LabCA && sub.marking.LabCA > 0
// //                   ? "LabCA"
// //                   : "Internal"
// //               }
// //             />
// //             {/* Final marks input (optional, if already known) */}
// //             {sub.marking.EndSem && sub.marking.EndSem > 0 ? (
// //               <input
// //                 type="number"
// //                 min={""}
// //                 max={sub.marking.EndSem}
// //                 value={finals[i]}
// //                 onChange={e => {
// //                   const arr = [...finals];
// //                   arr[i] = e.target.value === "" ? "" : Number(e.target.value);
// //                   setFinals(arr);
// //                 }}
// //                 className="border px-2 py-1 rounded w-24 text-black mb-2"
// //                 placeholder="ESE (if known)"
// //               />
// //             ) : null}
// //           </motion.div>
// //         ))}
// //       </div>
// //       <button
// //         onClick={handleCalculate}
// //         className="mt-6 bg-[#00FFD0] text-[#181A1B] px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#00A0FF] transition"
// //       >
// //         Calculate Required Marks
// //       </button>

// //       {/* Result table */}
// //       {results && (
// //         <div className="mt-8">
// //           {fail ? (
// //             <div className="text-2xl font-bold text-[#FF007F] mb-4">Failed (FF in at least one subject)</div>
// //           ) : (
// //             <>
// //               <h3 className="text-xl font-bold text-[#FFD600] mb-2">Required Marks (per subject)</h3>
// //               <table className="w-full text-left border border-[#00FFD0] rounded-xl bg-[#23272f] shadow-2xl">
// //                 <thead>
// //                   <tr className="bg-[#00FFD0] text-[#181A1B]">
// //                     <th className="p-2 font-bold">Subject</th>
// //                     <th className="font-bold">Code</th>
// //                     <th className="font-bold">Required ESE</th>
// //                     <th className="font-bold">Max</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {activeSubjects.map((sub, i) => (
// //                     <tr key={sub.code} className="hover:bg-[#00FFD0]/20 transition">
// //                       <td className="p-2 text-[#FFD600]">{sub.name}</td>
// //                       <td className="font-mono text-[#00FFD0]">{sub.code}</td>
// //                       <td className="text-[#FF007F]">{results[i]}</td>
// //                       <td className="text-[#00FFD0]">
// //                         {sub.marking.EndSem ?? sub.marking.LabCA ?? sub.marking.total}
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </>
// //           )}
// //         </div>
// //       )}
// //       <div className="mt-6 text-[#B0B0B0] text-sm">
// //         {/* User ko logic samjhao */}
// //         <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. Enter EndSem if you already know your marks. Click "Calculate Required Marks" to see the minimum ESE marks needed in each to reach your target SGPI.
// //       </div>
// //     </motion.div>
// //   );
// // }
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import type { Subject } from "../utils/curriculum";
// import { marksToGradePoint, calculateSGPI } from "../utils/sgpi";

// export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
//   // Filter out 0 credit subjects
//   const activeSubjects = subjects.filter(sub => sub.credits > 0);

//   // User yahan CA+ISE aur LabCA/EndSem input karega
//   const [internals, setInternals] = useState<number[]>(Array(activeSubjects.length).fill(0));
//   const [finals, setFinals] = useState<(number | "")[]>(Array(activeSubjects.length).fill(""));
//   const [targetSGPI, setTargetSGPI] = useState(8.5);
//   const [results, setResults] = useState<(number | string)[] | null>(null);
//   const [fail, setFail] = useState(false);

//   // Grade point mapping (same as your sgpi.ts)
//   function getGradePoint(marks: number, total: number) {
//     const percent = (marks / total) * 100;
//     if (percent >= 80) return 10;
//     if (percent >= 70) return 9;
//     if (percent >= 60) return 8;
//     if (percent >= 55) return 7;
//     if (percent >= 50) return 6;
//     if (percent >= 45) return 5;
//     if (percent >= 40) return 4;
//     return 0;
//   }

//   // Main calculation button
//   function handleCalculate() {
//     // FF check: agar kisi bhi subject me abhi tak FF hai toh fail dikhao
//     const anyFF = activeSubjects.some((sub, i) => {
//       const totalMarks = (internals[i] || 0) + (finals[i] ? Number(finals[i]) : 0);
//       return getGradePoint(totalMarks, sub.marking.total) === 0;
//     });
//     setFail(anyFF);

//     // For each ESE subject, find minimum required ESE marks (others fixed as per user input or minimum passing)
//     const reqs = activeSubjects.map((sub, i) => {
//       // Agar LabCA hai, user input hi final hai, calculation nahi hoga
//       if (sub.marking.LabCA && sub.marking.LabCA > 0) {
//         return "-";
//       }
//       // Agar EndSem hai aur final marks already diye hain, toh "-" dikhao
//       if (sub.marking.EndSem && finals[i] !== "") {
//         return "-";
//       }
//       // EndSem waale subjects ke liye calculation
//       if (sub.marking.EndSem && sub.marking.EndSem > 0) {
//         // Try all possible marks for this subject's ESE
//         for (let ese = 0; ese <= sub.marking.EndSem; ese++) {
//           // Array of marks for all subjects
//           const marksArr = activeSubjects.map((s, j) => {
//             if (i === j) return (internals[j] || 0) + ese;
//             // Agar user ne final marks diye hain toh woh use karo
//             if ((s.marking.EndSem && finals[j] !== "") || (s.marking.LabCA && finals[j] !== "")) {
//               return (internals[j] || 0) + Number(finals[j]);
//             }
//             // Agar LabCA hai, user input hi final hai
//             if (s.marking.LabCA && s.marking.LabCA > 0) return internals[j] || 0;
//             // For EndSem subjects where ESE is not entered, assume minimum passing ESE
//             if (s.marking.EndSem && s.marking.EndSem > 0) {
//               // Calculate minimum ESE required to reach 40% of total marks
//               const minPassingESE = Math.max(
//                 0,
//                 Math.ceil(0.4 * s.marking.total - (internals[j] || 0))
//               );
//               // Cap at the maximum allowed ESE marks
//               const cappedESE = Math.min(minPassingESE, s.marking.EndSem);
//               return (internals[j] || 0) + cappedESE;
//             }
//             // Baaki: internals only
//             return internals[j] || 0;
//           });
//           // Weighted SGPI calculation (only for activeSubjects)
//           const sgpi = calculateSGPI(activeSubjects, marksArr);
//           if (sgpi >= targetSGPI) return ese;
//         }
//         return "Impossible";
//       }
//       return "-";
//     });

//     setResults(reqs);
//   }

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
//         {activeSubjects.map((sub, i) => (
//           <motion.div
//             key={sub.code}
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: i * 0.05 }}
//             className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
//           >
//             <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
//             <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
//             {/* Internal marks input */}
//             <input
//               type="number"
//               min={0}
//               max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0) + (sub.marking.LabCA ?? 0)}
//               value={internals[i] || ""}
//               onChange={e => {
//                 const arr = [...internals];
//                 arr[i] = Number(e.target.value);
//                 setInternals(arr);
//               }}
//               className="border px-2 py-1 rounded w-24 text-black mb-2"
//               placeholder={
//                 sub.marking.EndSem && sub.marking.EndSem > 0
//                   ? "CA + ISE"
//                   : sub.marking.LabCA && sub.marking.LabCA > 0
//                   ? "LabCA"
//                   : "Internal"
//               }
//             />
//             {/* Final marks input (optional, if already known) */}
//             {sub.marking.EndSem && sub.marking.EndSem > 0 ? (
//               <input
//                 type="number"
//                 min={""}
//                 max={sub.marking.EndSem}
//                 value={finals[i]}
//                 onChange={e => {
//                   const arr = [...finals];
//                   arr[i] = e.target.value === "" ? "" : Number(e.target.value);
//                   setFinals(arr);
//                 }}
//                 className="border px-2 py-1 rounded w-24 text-black mb-2"
//                 placeholder="ESE (if known)"
//               />
//             ) : null}
//           </motion.div>
//         ))}
//       </div>
//       <button
//         onClick={handleCalculate}
//         className="mt-6 bg-[#00FFD0] text-[#181A1B] px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#00A0FF] transition"
//       >
//         Calculate Required Marks
//       </button>

//       {/* Result table */}
//       {results && (
//         <div className="mt-8">
//           {fail ? (
//             <div className="text-2xl font-bold text-[#FF007F] mb-4">Failed (FF in at least one subject)</div>
//           ) : (
//             <>
//               <h3 className="text-xl font-bold text-[#FFD600] mb-2">Required Marks (per subject)</h3>
//               <table className="w-full text-left border border-[#00FFD0] rounded-xl bg-[#23272f] shadow-2xl">
//                 <thead>
//                   <tr className="bg-[#00FFD0] text-[#181A1B]">
//                     <th className="p-2 font-bold">Subject</th>
//                     <th className="font-bold">Code</th>
//                     <th className="font-bold">Required ESE</th>
//                     <th className="font-bold">Max</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {activeSubjects.map((sub, i) => (
//                     <tr key={sub.code} className="hover:bg-[#00FFD0]/20 transition">
//                       <td className="p-2 text-[#FFD600]">{sub.name}</td>
//                       <td className="font-mono text-[#00FFD0]">{sub.code}</td>
//                       <td className="text-[#FF007F]">{results[i]}</td>
//                       <td className="text-[#00FFD0]">
//                         {sub.marking.EndSem ?? sub.marking.LabCA ?? sub.marking.total}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </>
//           )}
//         </div>
//       )}
//       <div className="mt-6 text-[#B0B0B0] text-sm">
//         {/* User ko logic samjhao */}
//         <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. Enter EndSem if you already know your marks. Click "Calculate Required Marks" to see the minimum ESE marks needed in each to reach your target SGPI.
//       </div>
//     </motion.div>
//   );
// }
// src/components/TargetSGPI.tsx
// Target SGPI calculator - arbitrary target, balanced per-subject marks, least variation (Hinglish comments)

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Subject } from "../utils/curriculum";
import { marksToGradePoint } from "../utils/sgpi";

// Helper: get minimum marks for passing (grade point 4)
function minPassingMarks(total: number) {
  return Math.ceil(0.4 * total);
}

export default function TargetSGPI({ subjects }: { subjects: Subject[] }) {
  // Only credit waale subjects
  const activeSubjects = subjects.filter(sub => sub.credits > 0);

  // User yahan CA+ISE ya LabCA input karega
  const [inputs, setInputs] = useState<number[]>(Array(activeSubjects.length).fill(0));
  const [targetSGPI, setTargetSGPI] = useState(8.5);
  const [results, setResults] = useState<(number | string)[] | null>(null);

  function handleCalculate() {
    // Agar kisi subject me abhi tak FF hai toh fail dikhao
    const anyFF = activeSubjects.some((sub, i) => {
      // LabCA waale: direct input
      if (sub.marking.LabCA && sub.marking.LabCA > 0) {
        return marksToGradePoint(inputs[i] || 0, sub.marking.total) === 0;
      }
      // Theory: ab tak ke internal marks
      return marksToGradePoint(inputs[i] || 0, sub.marking.total) === 0;
    });

    if (anyFF) {
      setResults(["Failed"]);
      return;
    }

    // Step 1: Calculate already secured quality points and credits
    let securedPoints = 0;
    let securedCredits = 0;
    const remainingSubjects: number[] = [];
    const alreadyMarks: number[] = [];

    activeSubjects.forEach((sub, i) => {
      // If LabCA, treat as final
      if (sub.marking.LabCA && sub.marking.LabCA > 0) {
        const gp = marksToGradePoint(inputs[i] || 0, sub.marking.total);
        securedPoints += gp * sub.credits;
        securedCredits += sub.credits;
        alreadyMarks[i] = inputs[i] || 0;
      }
      // If EndSem, not final yet
      else if (sub.marking.EndSem && sub.marking.EndSem > 0) {
        remainingSubjects.push(i);
        alreadyMarks[i] = inputs[i] || 0;
      }
    });

    const totalCredits = activeSubjects.reduce((sum, sub) => sum + sub.credits, 0);
    const requiredPoints = targetSGPI * totalCredits - securedPoints;

    // Step 2: Distribute required points evenly among remaining subjects (by credits)
    let remainingCredits = remainingSubjects.reduce((sum, idx) => sum + activeSubjects[idx].credits, 0);
    let reqGradePoint = requiredPoints / (remainingCredits || 1);

    // Clamp required grade point between 4 (passing) and 10 (max)
    reqGradePoint = Math.max(4, Math.min(10, reqGradePoint));

    // Step 3: For each remaining subject, calculate required total marks and ESE
    let reqs = activeSubjects.map((sub, i) => {
      // LabCA: user input hi final hai
      if (sub.marking.LabCA && sub.marking.LabCA > 0) return "-";
      // EndSem:
      if (sub.marking.EndSem && sub.marking.EndSem > 0) {
        // Required total marks for this grade point
        // Reverse of marksToGradePoint
        let requiredTotal = 0;
        if (reqGradePoint >= 10) requiredTotal = 80;
        else if (reqGradePoint >= 9) requiredTotal = 70;
        else if (reqGradePoint >= 8) requiredTotal = 60;
        else if (reqGradePoint >= 7) requiredTotal = 55;
        else if (reqGradePoint >= 6) requiredTotal = 50;
        else if (reqGradePoint >= 5) requiredTotal = 45;
        else if (reqGradePoint >= 4) requiredTotal = 40;
        else requiredTotal = minPassingMarks(sub.marking.total);

        // Required ESE = requiredTotal - internal
        const reqESE = Math.max(0, requiredTotal - (inputs[i] || 0));
        if (reqESE > sub.marking.EndSem) return "Impossible";
        return reqESE;
      }
      return "-";
    });

    setResults(reqs);
  }

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
          min={4}
          max={10}
          step={0.01}
          onChange={e => setTargetSGPI(Number(e.target.value))}
          className="border px-2 py-1 rounded w-24 text-black"
        />
        <button
          onClick={handleCalculate}
          className="ml-4 bg-[#00FFD0] text-[#181A1B] px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#00A0FF] transition"
        >
          Calculate Required Marks
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {activeSubjects.map((sub, i) => (
          <motion.div
            key={sub.code}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#1A1A1A] p-4 rounded-xl shadow-lg border-2 border-[#00FFD0] min-h-[120px]"
          >
            <div className="font-semibold text-[#00FFD0] mb-1">{sub.name}</div>
            <div className="text-xs text-[#B0B0B0] mb-2">Subject Code: {sub.code}</div>
            <input
              type="number"
              min={0}
              max={(sub.marking.CA ?? 0) + (sub.marking.InSem ?? 0) + (sub.marking.LabCA ?? 0)}
              value={inputs[i] || ""}
              onChange={e => {
                const arr = [...inputs];
                arr[i] = Number(e.target.value);
                setInputs(arr);
              }}
              className="border px-2 py-1 rounded w-24 text-black mb-2"
              placeholder={
                sub.marking.EndSem && sub.marking.EndSem > 0
                  ? "CA + ISE"
                  : sub.marking.LabCA && sub.marking.LabCA > 0
                  ? "LabCA"
                  : "Internal"
              }
            />
          </motion.div>
        ))}
      </div>
      {/* Result table */}
      {results && (
        <div className="mt-8">
          {results[0] === "Failed" ? (
            <div className="text-2xl font-bold text-[#FF007F] mb-4">Failed (FF in at least one subject)</div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-[#FFD600] mb-2">Required Marks (per subject)</h3>
              <table className="w-full text-left border border-[#00FFD0] rounded-xl bg-[#23272f] shadow-2xl">
                <thead>
                  <tr className="bg-[#00FFD0] text-[#181A1B]">
                    <th className="p-2 font-bold">Subject</th>
                    <th className="font-bold">Code</th>
                    <th className="font-bold">Required ESE</th>
                    <th className="font-bold">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {activeSubjects.map((sub, i) => (
                    <tr key={sub.code} className="hover:bg-[#00FFD0]/20 transition">
                      <td className="p-2 text-[#FFD600]">{sub.name}</td>
                      <td className="font-mono text-[#00FFD0]">{sub.code}</td>
                      <td className="text-[#FF007F]">{results[i]}</td>
                      <td className="text-[#00FFD0]">
                        {sub.marking.EndSem ?? sub.marking.LabCA ?? sub.marking.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}
      <div className="mt-6 text-[#B0B0B0] text-sm">
        {/* User ko logic samjhao */}
        <b>How this works:</b> Enter your internal marks (CA + ISE) for each subject with ESE, and LabCA for labs. Set your target SGPI. Click "Calculate Required Marks" to see the minimum ESE marks needed in each to reach your target.
      </div>
    </motion.div>
  );
}
