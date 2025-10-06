export type Alumni = {
  name: string;
  role?: string;
  year?: string;
  image?: string;
  linkedin?: string;
};

const alumni: Alumni[] = [
  {
    name: "rain liu",
    role: "co-president",
    year: "2025",
    image: "/images/people/rainliu.jpg",
  },
  {
    name: "ryan lee",
    role: "treasurer",
    year: "2026",
    image: "/images/people/ryan.jpeg",
  },
  {
    name: "victoria karai",
    year: "2025",
  }
];

export default alumni;
