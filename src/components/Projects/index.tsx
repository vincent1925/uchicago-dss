import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="our projects"
          description=""
          paragraph=""
          center
          titleClassName="font-anka-coder"
        />

        <div className="flex flex-col gap-10">
          {projectsData.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
