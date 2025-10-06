export type EventStatus = "scheduled" | "tbd" | "draft";

export type EventItem = {
  id: string;
  title: string;
  /**
   * Provide either an ISO date (YYYY-MM-DD) or a human-friendly label via dateLabel.
   * When both are present the label takes precedence for rendering.
   */
  date?: string;
  dateLabel?: string;
  time?: string;
  location?: string;
  description?: string;
  status?: EventStatus;
};

export type EventCategory = {
  id: string;
  label: string;
  description?: string;
  items: EventItem[];
};

export type QuarterEvents = {
  id: string;
  quarter: string;
  year: number;
  timeframe: string;
  summary: string;
  categories: EventCategory[];
};
