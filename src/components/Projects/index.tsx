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

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full">
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
