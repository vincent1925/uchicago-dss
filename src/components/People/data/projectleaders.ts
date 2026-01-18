export type ProjectLeader = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

const projectleader: ProjectLeader[] = [
  { name: "vincent zheng", role: "causal inference", image: "/images/people/vincent.jpg" },
  { name: "cynthia zeng", role: "misinformation and ai, political bias", image: "/images/people/cynthia.jpg" },
  { name: "rain hu", role: "crime + education, high risk intersection", image: "/images/people/rainhu.jpg" },
  { name: "joe moon", role: "moneyball", image: "/images/people/joe.jpeg" },
  { name: "jules ruiz", role: "moneyball" },
  { name: "la’tahvia williams", role: "banned books, missing people", image: "/images/people/tahvia.png" },
  { name: "merina diaz", role: "social science reproduction", image: "/images/people/merina.jpg" },
  { name: "edgar san jose", role: "social science reproduction"}
];

export default projectleader;

