// src/utils/sgpi.ts
// Yahan pe SGPI/CGPI ka calculation logic hai

import type { Subject } from "./curriculum";

// Marks ko grade point me convert karne ka logic
export function marksToGradePoint(marks: number, total: number): number {
  const percent = (marks / total) * 100;
  if (percent >= 80) return 10;
  if (percent >= 70) return 9;
  if (percent >= 60) return 8;
  if (percent >= 55) return 7;
  if (percent >= 50) return 6;
  if (percent >= 45) return 5;
  if (percent >= 40) return 4;
  return 0;
}

// SGPI calculate karne ka logic
export function calculateSGPI(subjects: Subject[], marks: number[]): number {
  let totalPoints = 0;
  let totalCredits = 0;
  subjects.forEach((sub, i) => {
    if (sub.credits > 0 && sub.marking.total > 0) {
      const grade = marksToGradePoint(marks[i] || 0, sub.marking.total);
      totalPoints += grade * sub.credits;
      totalCredits += sub.credits;
    }
  });
  return totalCredits ? +(totalPoints / totalCredits).toFixed(2) : 0;
}

// CGPI calculate karne ka logic (multiple semesters ka SGPI + credits)
export function calculateCGPI(sgpis: number[], credits: number[]): number {
  let total = 0, totalCredits = 0;
  sgpis.forEach((sgpi, i) => {
    total += sgpi * credits[i];
    totalCredits += credits[i];
  });
  return totalCredits ? +(total / totalCredits).toFixed(2) : 0;
}

