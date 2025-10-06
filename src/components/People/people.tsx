import SectionTitle from "../Common/SectionTitle";
import ProfileCard from "../People/ProfileCard";
import ProfileCardNoPhoto from "./ProfileCardNoPhoto";
import alumni from "./data/alumni";
import board from "./data/board";

const People: React.FC = () => {
  return (
    <section className="bg-custom-purple pt-12 md:pt-18 lg:pt-24">
      <div className="container py-8 lg:py-10">
        <div className="mx-auto mb-8 max-w-screen-xl text-center lg:mb-16">
          <SectionTitle
            title="meet our board!"
            description={""}
            paragraph=""
            mb="22px"
            center={true}
            titleClassName="font-anka-coder"
            paragraphClassName="font-anka-coder"
          />
        </div>
        <div className="mb-6 flex flex-wrap justify-center gap-6 lg:mb-16">
          {board.map((member, index) =>
            member.image ? (
              <ProfileCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ) : (
              <ProfileCardNoPhoto
                key={index}
                name={member.name}
                role={member.role}
              />
            ),
          )}
        </div>

        {/* Alumni Section */}
        <div className="mx-auto mb-8 max-w-screen-xl text-center lg:mb-10">
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

        {(() => {
          const alumniWithPhotos = alumni.filter((a) => a.image);
          const alumniNoPhotos = alumni.filter((a) => !a.image);

          return (
            <>
              {/* Alumni with photos: centered row(s) */}
              <div className="mb-4 flex flex-wrap justify-center gap-6">
                {alumniWithPhotos.map((a, i) => {
                  const roleWithYear = [a.role, a.year]
                    .filter(Boolean)
                    .join(" · ");
                  return (
                    <ProfileCard
                      key={`alumni-photo-${i}`}
                      name={a.name}
                      role={roleWithYear}
                      image={a.image as string}
                    />
                  );
                })}
              </div>

              {/* Alumni without photos: separate centered row */}
              {alumniNoPhotos.length > 0 && (
                <div className="mb-6 flex flex-wrap justify-center gap-6 lg:mb-8">
                  {alumniNoPhotos.map((a, i) => {
                    const roleWithYear = [a.role, a.year]
                      .filter(Boolean)
                      .join(" · ");
                    return (
                      <ProfileCardNoPhoto
                        key={`alumni-nophoto-${i}`}
                        name={a.name}
                        role={roleWithYear}
                      />
                    );
                  })}
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>
  );
};

export default People;
