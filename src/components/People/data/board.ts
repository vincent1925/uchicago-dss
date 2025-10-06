export type BoardMember = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

const board: BoardMember[] = [
  { name: "vincent zheng", role: "co-president", image: "/images/people/vincent.jpg" },
  { name: "cynthia zeng", role: "co-president", image: "/images/people/cynthia.jpeg" },
  { name: "mark xiong", role: "web developer", image: "/images/people/mark.jpg" },
  { name: "rain hu", role: "project manager", image: "/images/people/rainhu.jpg" },
  { name: "anisha sawhney", role: "outreach coordinator", image: "/images/people/anisha.jpeg" },
  { name: "susana cook", role: "events coordinator", image: "/images/people/susana.png" },
  { name: "nolan johnson", role: "technical workshop leader", image: "/images/people/nolan.jpg" },
  { name: "irene shin", role: "secretary", image: "/images/people/irene.jpg" },
  { name: "chloe yoo", role: "social media manager", image: "/images/people/chloe.jpg" },
  { name: "uziel garcia", role: "treasurer", image: "/images/people/uzi.png" },
  // Add additional board members here.
];

export default board;

