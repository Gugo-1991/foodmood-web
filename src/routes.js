import Showfood from "./features/shop/showFood";
import AboutSlise from "./features/about/about";
import HomePage from "./features/home/homePage";

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
  {
    path: "/about",
    isProtected: true,
    roles: ["admin"],
    section: "",

    component: AboutSlise,
  },
];

export default routes;
