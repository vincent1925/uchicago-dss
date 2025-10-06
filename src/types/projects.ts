export type ProjectResource = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  resources?: ProjectResource[];
};
