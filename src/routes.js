import HomePage from "./homepage/homePage";
import Showfood from "./mainContainer/showFood";

const routes = [
  {
    path: "/home",
    isProtected: true,
    roles: ["admin"],
    section: "",

    component: HomePage,
  },
  {
    path: "/shop",
    isProtected: true,
    roles: ["admin"],
    section: "",

    component: Showfood,
  },
];

export default routes;
