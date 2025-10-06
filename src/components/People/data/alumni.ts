export type Alumni = {
  name: string;
  year?: string;
  image?: string;
  linkedin?: string;
};

const alumni: Alumni[] = [
  {
    name: "rain liu",
    year: "2025",
    image: "/images/people/rainliu.jpg",
  },
  {
    name: "ryan lee",
    year: "2026",
    image: "/images/people/ryan.jpeg",
  },
  {
    name: "victoria karai",
    year: "2025",
  }
];

export default alumni;
