import SectionTitle from "@/components/Common/SectionTitle";
import { EventItem } from "@/types/events";
import {
  currentQuarterId,
  quarterlyEvents,
} from "@/components/Events/data/quarterlyEvents";

const MS_IN_DAY = 24 * 60 * 60 * 1000;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

const parseEventDate = (date?: string) => {
  if (!date) {
    return null;
  }

  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatDate = (event: EventItem) => {
  if (event.dateLabel) {
    return event.dateLabel;
  }

  if (event.date) {
    const date = parseEventDate(event.date);

    if (date) {
      return dateFormatter.format(date);
    }
  }

  return "TBD";
};

const getNextWeeklyMeeting = (items: EventItem[]) => {
  const now = new Date();

  return items
    .map((item) => {
      const date = parseEventDate(item.date);

      if (!date) {
        return null;
      }

      const diffMs = date.getTime() - now.getTime();
      const daysUntil = Math.floor(diffMs / MS_IN_DAY);

      return {
        item,
        date,
        daysUntil,
      };
    })
    .filter(
      (entry): entry is { item: EventItem; date: Date; daysUntil: number } =>
        Boolean(entry) && entry.daysUntil >= 0
    )
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];
};

type QuarterlyEventsProps = {
  activeQuarterId?: string;
};

const QuarterlyEvents = ({
  activeQuarterId = currentQuarterId,
}: QuarterlyEventsProps) => {
  const activeQuarter =
    quarterlyEvents.find((quarter) => quarter.id === activeQuarterId) ??
    quarterlyEvents[0];

  const weeklyCategory = activeQuarter.categories.find(
    (category) => category.id === "weekly-meetings"
  );

  const nextWeeklyMeeting = weeklyCategory
    ? getNextWeeklyMeeting(weeklyCategory.items)
    : null;

  const meetingWithinWeek =
    nextWeeklyMeeting && nextWeeklyMeeting.daysUntil <= 7;

  const otherCategories = activeQuarter.categories.filter(
    (category) => category.id !== "weekly-meetings"
  );

  return (
    <section className="bg-gradient-to-b from-white via-[#fef8ff] to-white py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          title="quarterly events"
          description={`${activeQuarter.quarter} ${activeQuarter.year}`}
          paragraph={activeQuarter.summary}
          mb="60px"
          center
          titleClassName="font-anka-coder"
          paragraphClassName="font-anka-coder text-black/80"
        />

        <div className="font-anka-coder mx-auto mb-12 max-w-2xl text-center text-sm uppercase tracking-[0.2em] text-primary">
          {activeQuarter.timeframe}
        </div>

        {weeklyCategory && (
          <article className="relative mb-12 overflow-hidden rounded-3xl border border-primary/15 bg-white p-10 shadow-2xl shadow-primary/15">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary via-primary/70 to-custom-purple" />

            <div className="font-anka-coder text-sm uppercase tracking-[0.3em] text-primary">
              weekly meeting spotlight
            </div>
            <h3 className="font-anka-coder mt-3 text-3xl font-semibold uppercase tracking-wide text-black">
              {weeklyCategory.label}
            </h3>
            {weeklyCategory.description && (
              <p className="font-anka-coder mt-4 max-w-2xl text-base text-body-color">
                {weeklyCategory.description}
              </p>
            )}

            {meetingWithinWeek && nextWeeklyMeeting ? (
              <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-6">
                <div className="font-anka-coder text-xs uppercase tracking-[0.3em] text-primary">
                  this week&apos;s meetup
                </div>
                <div className="font-anka-coder mt-3 text-2xl font-semibold uppercase text-black">
                  {formatDate(nextWeeklyMeeting.item)}
                </div>
                {nextWeeklyMeeting.item.time && (
                  <div className="font-anka-coder mt-2 text-base text-body-color">
                    {nextWeeklyMeeting.item.time}
                  </div>
                )}
                {nextWeeklyMeeting.item.description && (
                  <p className="font-anka-coder mt-3 text-sm text-body-color">
                    {nextWeeklyMeeting.item.description}
                  </p>
                )}
              </div>
            ) : nextWeeklyMeeting ? (
              <div className="mt-8 rounded-2xl border border-dashed border-primary/30 bg-white p-6">
                <div className="font-anka-coder text-xs uppercase tracking-[0.3em] text-primary/80">
                  no meeting this week
                </div>
                <div className="font-anka-coder mt-3 text-2xl font-semibold uppercase text-black">
                  next meetup {formatDate(nextWeeklyMeeting.item)}
                </div>
                {nextWeeklyMeeting.item.description && (
                  <p className="font-anka-coder mt-3 text-sm text-body-color">
                    {nextWeeklyMeeting.item.description}
                  </p>
                )}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-primary/30 bg-white p-6">
                <div className="font-anka-coder text-xs uppercase tracking-[0.3em] text-primary/80">
                  season complete
                </div>
                <div className="font-anka-coder mt-3 text-2xl font-semibold uppercase text-black">
                  weekly meetings will return next quarter
                </div>
              </div>
            )}
          </article>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {otherCategories.map((category) => (
            <article
              key={category.id}
              className="flex h-full flex-col rounded-3xl border border-primary/10 bg-white/95 p-8 shadow-xl shadow-primary/10 backdrop-blur"
            >
              <header className="font-anka-coder mb-6">
                <h3 className="text-xl font-semibold uppercase tracking-wide text-black">
                  {category.label}
                </h3>
                {category.description && (
                  <p className="text-body-color mt-2 text-sm leading-relaxed">
                    {category.description}
                  </p>
                )}
              </header>

              <ul className="flex-1 space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-2xl bg-primary/5 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
                  >
                    <div className="font-anka-coder text-xs uppercase tracking-[0.25em] text-primary">
                      {formatDate(item)}
                    </div>
                    <div className="font-anka-coder mt-2 text-lg font-semibold uppercase tracking-wide text-black">
                      {item.title}
                    </div>
                    {item.time && (
                      <div className="font-anka-coder mt-1 text-sm text-body-color">
                        {item.time}
                      </div>
                    )}
                    {item.location && (
                      <div className="font-anka-coder mt-1 text-sm text-body-color">
                        {item.location}
                      </div>
                    )}
                    {item.description && (
                      <p className="font-anka-coder mt-3 text-sm leading-relaxed text-body-color">
                        {item.description}
                      </p>
                    )}
                    {item.status === "tbd" && (
                      <span className="font-anka-coder mt-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                        details coming soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuarterlyEvents;
