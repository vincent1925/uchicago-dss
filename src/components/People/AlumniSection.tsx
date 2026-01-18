import SectionTitle from "../Common/SectionTitle";
import ProfileCardNoPhoto from "./ProfileCardNoPhoto";
import alumni from "./data/alumni";

const AlumniSection: React.FC = () => {
  return (
    <section className="pt-12 md:pt-18 lg:pt-24">
      <div className="container py-8 lg:py-10">
        <div className="mx-auto mb-8 max-w-screen-xl text-center lg:mb-16">
          <SectionTitle
            title="alumni"
            description={""}
            paragraph=""
            mb="12px"
            center={true}
            titleClassName="font-anka-coder"
            paragraphClassName="font-anka-coder"
          />
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-6 lg:mb-8">
          {alumni.map((a, i) => {
            const roleWithYear = [a.year].filter(Boolean).join(" · ");
            return (
              <ProfileCardNoPhoto
                key={`alumni-nophoto-${i}`}
                name={a.name}
                role={roleWithYear}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
