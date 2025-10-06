import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const committeeApplicationFormUrl = "https://forms.gle/fpwrfu93D72PhxJM9";
const interestFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfXYXlan7YQZCVEqQ01cRJ3CCZAlwQz7uKK6BHFgdjCPSVH-Q/viewform?usp=send_form&usp=embed_facebook";

const committees = [
  {
    id: "technical-workshop",
    name: "technical workshop committee",
    summary:
      "Plan and facilitate hands-on workshops that help members practice real-world data science skills.",
    highlights: [
      "Design tutorials and coding walkthroughs for a range of experience levels",
      "Collaborate with project leads to identify technical topics our members need most",
      "Support presenters with datasets, slide decks, and follow-up resources",
    ],
  },
  {
    id: "events",
    name: "events committee",
    summary:
      "Create engaging events that bring together students, alumni, and industry partners around data science.",
    highlights: [
      "Coordinate logistics for panels, mixers, and speaker visits",
      "Lead outreach to partners, campus organizations, and sponsors",
      "Develop event marketing, timelines, and day-of volunteer schedules",
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
            paragraph="Read through the descriptions and apply through the form."
            mb="0px"
            center={true}
            titleClassName="font-anka-coder"
            paragraphClassName="font-anka-coder"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {committees.map((committee) => (
            <article
              key={committee.id}
              className="border-primary/20 shadow-primary/10 flex h-full flex-col rounded-2xl border bg-white/95 p-8 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl lg:p-10"
            >
              <h3 className="font-anka-coder mb-4 text-2xl font-semibold tracking-wide text-black uppercase">
                {committee.name}
              </h3>
              <p className="text-body-color font-anka-coder mb-6 text-base">
                {committee.summary}
              </p>
              <ul className="text-body-color font-anka-coder mb-8 flex-1 space-y-3 text-base">
                {committee.highlights.map((highlight, index) => (
                  <li
                    key={`${committee.id}-${index}`}
                    className="flex items-start gap-2"
                  >
                    <span className="bg-primary mt-1 inline-block h-2 w-2 rounded-full" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center md:text-left">
                <Link
                  href={committeeApplicationFormUrl}
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
            href={interestFormUrl}
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
