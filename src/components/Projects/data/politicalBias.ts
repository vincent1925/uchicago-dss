import { Project } from "@/types/projects";

export const politicalBias: Project = {
  id: 4,
  title: "Political Bias in News Articles",
  description:
    "Partnered with Worldie to build a classifier that labels political lean in news coverage, making it easier for readers to spot bias and broaden their sources.",
  image: "/images/projects/worldie.jpg",
  link: "/projects/political-bias",
  resources: [
    {
      label: "web app",
      href: "https://dss-bias.vercel.app/",
      external: true,
    },
  ],
};
