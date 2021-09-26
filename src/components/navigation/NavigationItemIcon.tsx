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
      return <SearchIcon style={{ maxHeight: maxHeight }} />;
    case "players":
      return <HomeIcon style={{ maxHeight: maxHeight }} />;
    // case "dashboard":
    //   return <DashboardIcon style={{ maxHeight: maxHeight }} />;
    // case "datacatalog":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiMonitor} />
    //     </SvgIcon>
    //   );
    // case "metadata":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiTable} />
    //     </SvgIcon>
    //   );
    // case "systems":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiServer} />
    //     </SvgIcon>
    //   );
    // case "environments":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiDatabase} />
    //     </SvgIcon>
    //   );
    // case "tables":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiTable} />
    //     </SvgIcon>
    //   );
    // case "columns":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiTableColumn} />
    //     </SvgIcon>
    //   );
    // case "mappings":
    //   return (
    //     <SvgIcon
    //       style={{
    //         maxHeight: maxHeight,
    //         transform: "rotate(-90deg)",
    //       }}
    //     >
    //       <path d={mdiSitemap} />
    //     </SvgIcon>
    //   );
    // case "todo":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiFormatListCheckbox} />
    //     </SvgIcon>
    //   );
    // case "businessterms":
    //   return <MenuBookIcon style={{ maxHeight: maxHeight }} />;
    // case "businesspolicies":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiTextBoxMultipleOutline} />
    //     </SvgIcon>
    //   );
    // case "businessrules":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiClipboardListOutline} />
    //     </SvgIcon>
    //   );
    // case "customassets":
    //   return <WidgetsIcon style={{ maxHeight: maxHeight }} />;
    // case "referencedata":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiTextBoxOutline} />
    //     </SvgIcon>
    //   );
    // case "releases":
    //   return (
    //     <SvgIcon style={{ maxHeight: maxHeight }}>
    //       <path d={mdiNewspaperVariantMultipleOutline} />
    //     </SvgIcon>
    //   );
    // case "requirements":
    //   return <ViewListIcon style={{ maxHeight: maxHeight }} />;
    // case "reports":
    //   return <InsertChartIcon style={{ maxHeight: maxHeight }} />;
    default:
      return <WidgetsIcon style={{ maxHeight: maxHeight }} />;
  }
};
export default NavigationItemIcon;
