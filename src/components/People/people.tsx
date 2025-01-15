import SectionTitle from "../Common/SectionTitle";
import ProfileCard from "../People/ProfileCard";
import ProfileCardNoPhoto from "./ProfileCardNoPhoto";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}
interface NoPhotoTeamMember {
  name: string;
  role: string;
}

const People: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "vincent zheng", role: "co-president", image: "/images/people/vincent.jpg" },
    { name: "rain liu", role: "co-president", image: "/images/people/vincent.jpg" },
    { name: "mark xiong", role: "web developer", image: "/images/people/mark.jpg" },
    { name: "ryan lee", role: "treasurer", image: "/images/people/ryan.jpeg" },
    { name: "cynthia zeng", role: "project manager", image: "/images/people/cynthia.jpeg" },
    { name: "rain hu", role: "project manager", image: "/images/people/vincent.jpg" },
    { name: "anisha sawhney", role: "outreach coordinator", image: "/images/people/vincent.jpg" },
    { name: "susana cook", role: "events coordinator", image: "/images/people/susana.png" },
    { name: "nolan johnson", role: "technical workshop leader", image: "/images/people/nolan.jpg" },
    { name: "irene shin", role: "secretary", image: "/images/people/irene.jpg" },
    { name: "chloe yoo", role: "first year representative", image: "/images/people/chloe.jpg" },
    { name: "uziel garcia", role: "first year representative", image: "/images/people/uzi.png" },
  ];
  const teamMembers_2: NoPhotoTeamMember[] = [
    { name: "victoria karai", role: "project manager"},
  ];

  return (
    <section className="pt-12 md:pt-18 lg:pt-24 bg-custom-purple">
      <div className="py-8 px-6 mx-auto max-w-screen-xl lg:py-10 lg:px-9">
        <div className="mx-auto max-w-screen-xl text-center mb-8 lg:mb-16">
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
        <div className="grid gap-6 mb-6 lg:mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-auto-fit xl:grid-cols-auto-fit justify-items-center">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
          <ProfileCardNoPhoto name={teamMembers_2[0].name} role={teamMembers_2[0].role} />
        </div>
      </div>
    </section>
  );
};

export default People;
