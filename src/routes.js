import Showfood from "./features/shop/showFood";
import AboutSlise from "./features/about/about";
import Home from "./Pages/home";
import ItemPage from "./Pages/item";

const routes = [
  {
    path: "/",
    isProtected: true,
    roles: ["admin"],
    section: "",
    component: Home,
  },
  {
    path: "/item/:id",
    isProtected: true,
    roles: ["admin" ,'user'],
    section: "",
    component: ItemPage,
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
