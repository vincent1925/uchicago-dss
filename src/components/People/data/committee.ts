export type CommitteeMember = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

const committee: CommitteeMember[] = [
  { name: "uma malani", role: "technical committee", image: "/images/people/uma.jpg" },
  { name: "bonnie pang", role: "events committee", image: "/images/people/bonnie.jpg" },
  { name: "charlotte graham", role: "events committee", image: "/images/people/charlotte.jpg" },
  { name: "kailee kuan", role: "events committee" }
];

export default committee;

