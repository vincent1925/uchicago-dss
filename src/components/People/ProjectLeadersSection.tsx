import SectionTitle from "../Common/SectionTitle";
import ProfileCard from "../People/ProfileCard";
import ProfileCardNoPhoto from "./ProfileCardNoPhoto";
import projectleader from "./data/projectleaders";

const ProjectLeadersSection: React.FC = () => {
  const projectLeaderWithPhotos = projectleader.filter((a) => a.image);
  const projectLeaderNoPhotos = projectleader.filter((a) => !a.image);

  return (
    <section className="pt-12 md:pt-18 lg:pt-24">
      <div className="container py-8 lg:py-10">
        <div className="mx-auto mb-8 max-w-screen-xl text-center lg:mb-16">
          <SectionTitle
            title="project leaders"
            description={""}
            paragraph=""
            mb="12px"
            center={true}
            titleClassName="font-anka-coder"
            paragraphClassName="font-anka-coder"
          />
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-6">
          {projectLeaderWithPhotos.map((a, i) => (
            <ProfileCard
              key={`projectleader-photo-${i}`}
              name={a.name}
              role={a.role}
              image={a.image as string}
            />
          ))}
        </div>

        {projectLeaderNoPhotos.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center gap-6 lg:mb-8">
            {projectLeaderNoPhotos.map((a, i) => (
              <ProfileCardNoPhoto
                key={`projectleader-nophoto-${i}`}
                name={a.name}
                role={a.role}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectLeadersSection;
