// src/utils/curriculum.ts
// Yahan pe hum saare subjects, credits, marking scheme define karenge for all years/semesters/groups

export type Subject = {
  code: string;
  name: string;
  credits: number;
  marking: {
    CA?: number;    // Internal/CA
    InSem?: number; // In-Sem
    EndSem?: number;// End-Sem
    LabCA?: number; // Lab CA
    total: number;
  };
  type: "Theory" | "Lab" | "Project" | "Exposure";
};

export type Curriculum = {
  [year: string]: {
    [semester: string]: {
      [group: string]: Subject[];
    }
  }
};

export const curriculum: Curriculum = {
  "First Year": {
    "Semester 1": {
      "C": [
        { code: "216U06C101", name: "Applied Mathematics – I", credits: 4, marking: { CA: 25, InSem: 20, EndSem: 30, total: 75 }, type: "Theory" },
        { code: "216U06C102", name: "Engineering Physics", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06C104", name: "Engineering Mechanics", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06L101", name: "Python Programming", credits: 3, marking: { LabCA: 75, total: 75 }, type: "Lab" },
        { code: "216U06L102", name: "Engineering Physics Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L104", name: "Engineering Mechanics Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06P101", name: "Project-Based Learning", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Project" },
        { code: "216U06T101", name: "Presentation and Communication Skills", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06W101", name: "Basic Workshop Practice – I", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06X101", name: "Exposure Course", credits: 0, marking: { total: 0 }, type: "Exposure" },
      ],
      "P": [
        { code: "216U06C101", name: "Applied Mathematics – I", credits: 4, marking: { CA: 25, InSem: 20, EndSem: 30, total: 75 }, type: "Theory" },
        { code: "216U06C103", name: "Engineering Chemistry", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06C105", name: "Engineering Drawing", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06C106", name: "Elements of Electrical and Electronics Engineering", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06L101", name: "Python Programming", credits: 3, marking: { LabCA: 75, total: 75 }, type: "Lab" },
        { code: "216U06L103", name: "Engineering Chemistry Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L105", name: "Engineering Drawing Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L106", name: "Elements of Electrical and Electronics Engineering Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06P101", name: "Project-Based Learning", credits: 2, marking: { total: 0 }, type: "Project" },
        { code: "216U06W101", name: "Basic Workshop Practice – I", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06X101", name: "Exposure Course", credits: 0, marking: { total: 0 }, type: "Exposure" },
      ]
    },
    "Semester 2": {
      "C": [
        { code: "216U06C201", name: "Applied Mathematics – II", credits: 4, marking: { CA: 25, InSem: 20, EndSem: 30, total: 75 }, type: "Theory" },
        { code: "216U06C103", name: "Engineering Chemistry", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06C105", name: "Engineering Drawing", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06C106", name: "Elements of Electrical and Electronics Engineering", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06L103", name: "Engineering Chemistry Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L105", name: "Engineering Drawing Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L106", name: "Elements of Electrical and Electronics Engineering Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L201", name: "Programming in C", credits: 3, marking: { LabCA: 75, total: 75 }, type: "Lab" },
        { code: "216U06P101", name: "Project-Based Learning", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Project" },
        { code: "216U06W201", name: "Basic Workshop Practice – II", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06X101", name: "Exposure Course", credits: 0, marking: { total: 0 }, type: "Exposure" },
      ],
      "P": [
        { code: "216U06C201", name: "Applied Mathematics – II", credits: 4, marking: { CA: 25, InSem: 20, EndSem: 30, total: 75 }, type: "Theory" },
        { code: "216U06C103", name: "Engineering Chemistry", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06C105", name: "Engineering Drawing", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06C106", name: "Elements of Electrical and Electronics Engineering", credits: 3, marking: { CA: 20, InSem: 30, EndSem: 50, total: 100 }, type: "Theory" },
        { code: "216U06L103", name: "Engineering Chemistry Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L105", name: "Engineering Drawing Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L106", name: "Elements of Electrical and Electronics Engineering Laboratory", credits: 1, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06L201", name: "Programming in C", credits: 3, marking: { LabCA: 75, total: 75 }, type: "Lab" },
        { code: "216U06P101", name: "Project-Based Learning", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Project" },
        { code: "216U06W201", name: "Basic Workshop Practice – II", credits: 2, marking: { LabCA: 50, total: 50 }, type: "Lab" },
        { code: "216U06X101", name: "Exposure Course", credits: 0, marking: { total: 0 }, type: "Exposure" },
      ]
    }
  }
};
