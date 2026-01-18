import SectionTitle from "../Common/SectionTitle";
import ProfileCard from "../People/ProfileCard";
import ProfileCardNoPhoto from "./ProfileCardNoPhoto";
import committee from "./data/committee";

const CommitteeSection: React.FC = () => {
  const committeeWithPhotos = committee.filter((a) => a.image);
  const committeeNoPhotos = committee.filter((a) => !a.image);

  return (
    <section className="pt-12 md:pt-18 lg:pt-24">
      <div className="container py-8 lg:py-10">
        <div className="mx-auto mb-8 max-w-screen-xl text-center lg:mb-16">
          <SectionTitle
            title="committee members"
            description={""}
            paragraph=""
            mb="12px"
            center={true}
            titleClassName="font-anka-coder"
            paragraphClassName="font-anka-coder"
          />
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-6">
          {committeeWithPhotos.map((a, i) => (
            <ProfileCard
              key={`committee-photo-${i}`}
              name={a.name}
              role={a.role}
              image={a.image as string}
            />
          ))}
        </div>

        {committeeNoPhotos.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center gap-6 lg:mb-8">
            {committeeNoPhotos.map((a, i) => (
              <ProfileCardNoPhoto
                key={`committee-nophoto-${i}`}
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

export default CommitteeSection;
