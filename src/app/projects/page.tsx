import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | UChicago Data Science Society",
  description:
    "This page showcases the projects of the UChicago Data Science Society.",
};

const ProjectsPage = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default ProjectsPage;
