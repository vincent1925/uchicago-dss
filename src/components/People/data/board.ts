export type BoardMember = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

const board: BoardMember[] = [
  { name: "vincent zheng", role: "co-president", image: "/images/people/vincent.jpg" },
  { name: "cynthia zeng", role: "co-president", image: "/images/people/cynthia.jpeg" },
  { name: "rain hu", role: "project manager", image: "/images/people/rainhu.jpg" },
  { name: "anisha sawhney", role: "outreach coordinator", image: "/images/people/anisha.jpeg" },
  { name: "irene shin", role: "secretary", image: "/images/people/irene.jpg" },
  { name: "chloe yoo", role: "social media manager", image: "/images/people/chloe.jpg" },
  { name: "uziel garcia", role: "treasurer", image: "/images/people/uzi.png" },
  // Add additional board members here.
];

export default board;

