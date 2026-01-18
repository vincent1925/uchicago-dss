import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "events",
    path: "/events",
    newTab: false,
  },
  {
    id: 3,
    title: "projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "join us",
    path: "/join",
    newTab: false,
  },
  {
    id: 5,
    title: "people",
    path: "/people",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "board",
        path: "/people",
        newTab: false,
      },
      {
        id: 32,
        title: "committee members",
        path: "/people/committee",
        newTab: false,
      },
      {
        id: 33,
        title: "project leaders",
        path: "/people/project-leaders",
        newTab: false,
      },
      {
        id: 34,
        title: "alumni",
        path: "/people/alumni",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "contact us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
