import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { joinFormUrls } from "./formLinks";

const applications = [
  {
    id: "secretary",
    name: "secretary",
    formUrl: joinFormUrls.secretary,
    summary:
      "Help keep DSS organized and members informed about club activities.",
    highlights: [
      "Maintain meeting notes and club records",
      "Support communication with members",
      "Help coordinate club schedules and activities",
    ],
  },
  {
    id: "project",
    name: "project member / leader",
    formUrl: joinFormUrls.project,
    summary:
      "Work with fellow students on hands-on data science projects as a team member or project leader.",
    highlights: [
      "Apply data science skills to real-world questions",
      "Collaborate on research, analysis, and project development",
      "Help guide a team and share project results",
    ],
  },
  {
    id: "events-workshop",
    name: "events / workshop committee",
    formUrl: joinFormUrls.eventsWorkshop,
    summary:
      "Plan workshops and events that bring together students, alumni, and industry partners around data science.",
    highlights: [
      "Design tutorials and hands-on coding workshops",
      "Coordinate logistics for panels, mixers, and speaker visits",
      "Lead outreach to partners, campus organizations, and sponsors",
    ],
  },
];

const JoinApplications = () => {
  return (
    <section className="bg-gradient-to-b from-white via-[#f2eaff] to-white py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-screen-md text-center lg:mb-16">
          <SectionTitle
            title="interested in joining?"
            description="Here are our open applications."
            paragraph="Read through the descriptions and apply through the relevant form."
            mb="0px"
            center={true}
            titleClassName="font-anka-coder"
            paragraphClassName="font-anka-coder"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {applications.map((application) => (
            <article
              key={application.id}
              className="border-primary/20 shadow-primary/10 flex h-full flex-col rounded-2xl border bg-white/95 p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl lg:p-10"
            >
              <h3 className="font-anka-coder mb-4 text-2xl font-semibold tracking-wide text-black uppercase">
                {application.name}
              </h3>
              <p className="text-body-color font-anka-coder mb-6 text-base">
                {application.summary}
              </p>
              <ul className="text-body-color font-anka-coder mb-8 flex-1 space-y-3 text-base">
                {application.highlights.map((highlight, index) => (
                  <li
                    key={`${application.id}-${index}`}
                    className="flex items-start gap-2"
                  >
                    <span className="bg-primary mt-1 inline-block h-2 w-2 rounded-full" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center md:text-left">
                <Link
                  href={application.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/80 font-anka-coder inline-block rounded-md px-6 py-3 text-base font-semibold tracking-wide text-white uppercase duration-300"
                >
                  apply now
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="from-primary via-primary/80 to-custom-purple shadow-primary/30 mx-auto mt-16 max-w-screen-lg rounded-3xl bg-gradient-to-r p-10 text-center text-white shadow-2xl">
          <h3 className="font-anka-coder mb-4 text-3xl font-semibold tracking-wide uppercase">
            just exploring?
          </h3>
          <p className="font-anka-coder mx-auto mb-6 max-w-2xl text-base text-white/90">
            Fill out our interest form to join the DSS list host. You&apos;ll be
            the first to hear about workshops, socials, etc.
          </p>
          <Link
            href={joinFormUrls.interest}
            target="_blank"
            rel="noopener noreferrer"
            className="font-anka-coder text-primary inline-block rounded-md bg-white px-6 py-3 text-base font-semibold tracking-wide uppercase duration-300 hover:bg-white/90"
          >
            interest form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinApplications;
