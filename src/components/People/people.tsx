import SectionTitle from "../Common/SectionTitle";
import ProfileCard from "../People/ProfileCard";
import board from "./data/board";
import ProfileCardNoPhoto from "./ProfileCardNoPhoto";

const People: React.FC = () => {
  return (
    <section className="pt-12 md:pt-18 lg:pt-24">
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

      </div>
    </section>
  );
};

export default People;
