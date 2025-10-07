import { EventItem, QuarterEvents } from "@/types/events";

type WeeklySeriesConfig = {
  baseId: string;
  title: string;
  startDate: string;
  occurrences: number;
  skipDates?: string[];
  time?: string;
  location?: string;
  description?: string;
};

const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

const createWeeklySeries = ({
  baseId,
  title,
  startDate,
  occurrences,
  skipDates = [],
  time,
  location,
  description,
}: WeeklySeriesConfig): EventItem[] => {
  const events: EventItem[] = [];
  const skipSet = new Set(skipDates);
  let currentDate = new Date(`${startDate}T00:00:00Z`);
  let iterations = 0;
  const maxIterations = occurrences + skipDates.length + 6;

  while (events.length < occurrences && iterations < maxIterations) {
    const isoDate = currentDate.toISOString().slice(0, 10);

    if (!skipSet.has(isoDate)) {
      events.push({
        id: `${baseId}-${events.length + 1}`,
        title,
        date: isoDate,
        time,
        location,
        description,
        status: "scheduled",
      });
    }

    iterations += 1;
    currentDate = new Date(currentDate.getTime() + WEEK_IN_MS);
  }

  if (events.length < occurrences) {
    throw new Error(
      `[quarterly events] Expected ${occurrences} occurrences for ${baseId}, received ${events.length}. Adjust the configuration or skip dates.`
    );
  }

  return events;
};

const autumn2025: QuarterEvents = {
  id: "autumn-2025",
  quarter: "Autumn",
  year: 2025,
  timeframe: "October 7 - December 16, 2025",
  summary:
    "",
  categories: [
    {
      id: "weekly-meetings",
      label: "weekly meetings",
      description:
        "Tuesday evening sessions cover project updates, community building, and upcoming opportunities. Swing by whenever you can make it.",
      items: createWeeklySeries({
        baseId: "autumn-2025-weekly-meeting",
        title: "Weekly member meeting",
        startDate: "2025-10-07",
        occurrences: 10,
        skipDates: ["2025-11-25"],
        time: "6:00 - 7:00 PM CT",
        description:
          "Meet with DSS  for updates, project support, and planning.",
      }),
    },
    {
      id: "technical-workshops",
      label: "technical workshops",
      description:
        "We are lining up sessions on tooling, model building, and portfolio storytelling. Watch this space for final dates.",
      items: [
        {
          id: "autumn-2025-technical-workshops",
          title: "Technical workshop series",
          status: "tbd",
          dateLabel: "Dates coming soon",
          description:
            "Topics and scheduling are in progress—vote on priorities during weekly meetings.",
        },
      ],
    },
    {
      id: "fundraisers",
      label: "fundraisers",
      description:
        "Quarterly fundraising helps underwrite travel, guest speakers, and new data resources.",
      items: [
        {
          id: "autumn-2025-fundraisers",
          title: "Autumn fundraising drive",
          status: "tbd",
          dateLabel: "Dates coming soon",
          description:
            "Looking to host cafe pop-ups and merch sales. Share ideas with the events committee.",
        },
      ],
    },
    {
      id: "additional-programming",
      label: "additional programming",
      description:
        "Expect collaborations with RSOs and alumni spotlights as details firm up.",
      items: [
        {
          id: "autumn-2025-additional",
          title: "Pop-up events and collaborations",
          status: "tbd",
          dateLabel: "Rolling announcements",
          description:
            "We will add lightning talks, panels, and social events once dates are confirmed.",
        },
      ],
    },
  ],
};

export const quarterlyEvents: QuarterEvents[] = [autumn2025];

export const currentQuarterId = autumn2025.id;
