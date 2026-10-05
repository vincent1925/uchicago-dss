export type BoardMember = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

const board: BoardMember[] = [
  { name: "chloe yoo", role: "co-president", image: "/images/people/chloe.jpg" },
  { name: "irene shin", role: "co-president", image: "/images/people/irene.jpg" },
  { name: "rain hu", role: "project manager", image: "/images/people/rainhu.jpg" },
  { name: "anisha sawhney", role: "outreach coordinator", image: "/images/people/anisha.jpeg" },
  { name: "uziel garcia", role: "treasurer", image: "/images/people/uzi.png" },
  { name: "nhi nguyen", role: "workshop leader", image: "/images/people/nhi.jpg" },
  // Add additional board members here.
];

export default board;
