import { Project } from "@/types/projects";

export const waterMortality: Project = {
  id: 2,
  title: "Water Mortality",
  description: "A brief study the association between drinking-water contaminants and all-cause mortality in California using a county-year panel from 2000-2019.",
  image: "/images/projects/water-mortality.jpeg",
  link: "/projects/water-mortality",
  resources: [
    {
      label: "github repo",
      href: "https://github.com/uchicago-dss/water-mortality",
      external: true,
    },
    {
      label: "writeup (pdf)",
      href: "/resources/water-mortality-writeup.pdf",
      external: true,
    },
  ],
};
