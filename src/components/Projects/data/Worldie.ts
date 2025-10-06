import { Project } from "@/types/projects";

export const worldie: Project = {
  id: 3,
  title: "Worldie",
  description: "A collaboration with the nonprofit, Worldie - Social Media for Good, a nonprofit that helps victims of sexual misconduct and abuse in the visual and performing arts. We teamed up with Worldie to demonstrate the online harassment and media manipulation against victims by performing sentiment analysis upon 500+ case articles, illustrating how victims and their interests are routinely marginalized and ignored.",
  image: "/images/projects/worldie.jpg",
  link: "/projects/worldie",
  resources: [
    {
      label: "presentation",
      href: "/resources/worldie-presentation.pdf",
      external: true,
    },
    {
      label: "summary (pdf)",
      href: "/resources/worldie-summary.pdf",
      external: true,
    },
  ],
};
