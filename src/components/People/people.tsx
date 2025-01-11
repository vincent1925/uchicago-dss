import SectionTitle from "../Common/SectionTitle";
import ProfileCard from "../People/ProfileCard";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const People: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "vincent zheng", role: "co-president", image: "/images/people/vincent.jpg" },
    { name: "rain liu", role: "co-president", image: "/images/people/vincent.jpg" },
    { name: "mark xiong", role: "web developer", image: "/images/people/mark.jpg" },
    { name: "ryan lee", role: "treasurer", image: "/images/people/vincent.jpg" },
    { name: "victoria karai", role: "project manager", image: "/images/people/vincent.jpg" },
    { name: "cynthia zeng", role: "project manager", image: "/images/people/cynthia.jpeg" },
    { name: "rain hu", role: "project manager", image: "/images/people/vincent.jpg" },
    { name: "anisha sawhney", role: "outreach and external relations coordinator", image: "/images/people/vincent.jpg" },
    { name: "susana cook", role: "events coordinator", image: "/images/people/vincent.jpg" },
    { name: "nolan johnson", role: "technical workshop leader", image: "/images/people/vincent.jpg" },
    { name: "irene shin", role: "secretary", image: "/images/people/vincent.jpg" },
    { name: "chloe yoo", role: "first year representative", image: "/images/people/vincent.jpg" },
    { name: "uziel garcia", role: "first year representative", image: "/images/people/vincent.jpg" },
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
        </div>
      </div>
    </section>
  );
};

export default People;
