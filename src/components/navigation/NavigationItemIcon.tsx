import {
  mdiClipboardListOutline,
  mdiDatabase,
  mdiFormatListCheckbox,
  mdiMonitor,
  mdiNewspaperVariantMultipleOutline,
  mdiServer,
  mdiSitemap,
  mdiTable,
  mdiTableColumn,
  mdiTextBoxMultipleOutline,
  mdiTextBoxOutline,
} from "@mdi/js";

import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SvgIcon from "@material-ui/core/SvgIcon";
import ViewListIcon from "@material-ui/icons/ViewList";
import WidgetsIcon from "@material-ui/icons/Widgets";
import TableViewIcon from "@material-ui/icons/TableChart";
import PlayersIcon from "@material-ui/icons/Person";
import MatchesIcon from "@material-ui/icons/Timeline";

interface NavigationItemIconProps {
  name: any;
  depth: number;
}
const NavigationItemIcon: React.FC<NavigationItemIconProps> = (
  props: NavigationItemIconProps
) => {
  const { name, depth } = props;
  const maxHeight = 24 - depth * 2;
  switch (name) {
    case "home":
      return <HomeIcon style={{ maxHeight: maxHeight, color: "#fff" }} />;
    case "players":
      return <PlayersIcon style={{ maxHeight: maxHeight, color: "#fff" }} />;
    case "pointstable":
      return <TableViewIcon style={{ maxHeight: maxHeight, color: "#fff" }} />;
    case "matches":
      return <MatchesIcon style={{ maxHeight: maxHeight, color: "#fff" }} />;
    default:
      return <WidgetsIcon style={{ maxHeight: maxHeight, color: "#fff" }} />;
  }
};
export default NavigationItemIcon;
