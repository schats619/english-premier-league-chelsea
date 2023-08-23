import Players from "../../pages/players/Players";
import Home from "../../pages/home/Home";
import PointsTable from "../../pages/points-table/PointsTable";
import Matches from "../../pages/matches/Matches";

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
  {
    path: "/matches",
    name: "Matches",
    icon: "matches",
    component: Matches,
  },
];

export default Routes;
