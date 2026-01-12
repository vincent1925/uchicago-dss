export type Alumni = {
  name: string;
  year?: string;
  image?: string;
  linkedin?: string;
};

const alumni: Alumni[] = [
  { name: "susana cook", year: "2028"},
  { name: "nolan johnson", year: "2028" },
  { name: "mark xiong", year: "2026" },
  {
    name: "rain liu",
    year: "2025",
  },
  {
    name: "ryan lee",
    year: "2026"
  },
  {
    name: "victoria karai",
    year: "2025",
  }
];

export default alumni;
