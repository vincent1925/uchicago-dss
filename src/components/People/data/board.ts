export type BoardMember = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

const board: BoardMember[] = [
  { name: "vincent zheng", role: "co-president", image: "/images/people/cynthia.jpg" },
  { name: "cynthia zeng", role: "co-president", image: "/images/people/cynthia.jpg" },
  { name: "rain hu", role: "project manager", image: "/images/people/rainhu.jpg" },
  { name: "anisha sawhney", role: "outreach coordinator", image: "/images/people/anisha.jpeg" },
  { name: "chloe yoo", role: "social media manager", image: "/images/people/chloe.jpg" },
  { name: "uziel garcia", role: "treasurer", image: "/images/people/uzi.png" },
  { name: "irene shin", role: "secretary", image: "/images/people/irene.jpg" },
  { name: "nhi nguyen", role: "workshop leader", image: "/images/people/nhi.jpg" }
  // Add additional board members here.
];

export default board;

