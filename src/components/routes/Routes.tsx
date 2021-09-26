import Players from "../../pages/players/Players";
import Home from "../../pages/home/Home";
import PointsTable from "../../pages/points-table/PointsTable";

const Routes = [
  {
    path: "/",
    name: "Home",
    icon: "home",
    component: Home,
  },
  {
    path: "/players",
    name: "Players",
    icon: "players",
    component: Players,
  },
  {
    path: "/points-table",
    name: "Points Table",
    icon: "pointstable",
    component: PointsTable,
  },
];

export default Routes;
