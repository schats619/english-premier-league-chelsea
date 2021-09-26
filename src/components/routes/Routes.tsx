import React from "react";
import Players from "../../pages/players/Players";
import Home from "../../pages/home/Home";
import PointsTable from "../../pages/points-table/PointsTable";
// const Standings: React.FC = () => {
//   return <h1>Standings</h1>;
// };

// const Teams: React.FC = () => {
//   return <h1>Teams</h1>;
// };

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
    component: PointsTable,
  },
];

export default Routes;
