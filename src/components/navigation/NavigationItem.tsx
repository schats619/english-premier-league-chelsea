import React, { Component } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Collapse, Tooltip } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NavigationItemIcon from "./NavigationItemIcon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import NavigationList from "./NavigationList";

interface NavigationListItem {
  id: number;
  name: string;
  title: string;
  link?: string;
  iconElement: JSX.Element;
  styles: any;
  items: Array<NavigationListItem>;
  objectTypeId?: string;
}

interface NavigationItemProps {
  item: NavigationListItem;
  depth: number;
}

type NavigationItemState = {
  open: boolean;
  item: NavigationListItem;
  depth: number;
};

class NavigationItem extends Component<
  NavigationItemProps & RouteComponentProps,
  NavigationItemState
> {
  constructor(props: NavigationItemProps & RouteComponentProps) {
    super(props);
    this.state = {
      open: false,
      item: this.props.item,
      depth: this.props.depth,
    };
  }
  render() {
    const {
      location: { pathname },
    } = this.props;
    const { open, item, depth } = this.state;

    // if (item.items && item.items instanceof Array && item.items.length !== 0) {
    return (
      <>
        <ListItem button key={item.id}>
          <ListItemIcon>
            <NavigationItemIcon name={item.name} depth={depth} />
          </ListItemIcon>
          <Tooltip title={item.title} placement="bottom-start">
            <ListItemText primary={item.title} />
          </Tooltip>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <NavigationList items={item.items} depth={depth + 1} />
      </>
    );
    //   );
    // } else if (item.link) {
    //   const nodeLink = item.objectTypeId
    //     ? item.link + "/" + item.objectTypeId
    //     : item.link;
    //   return (
    //     <>
    //       <ListItem
    //         button
    //         key={item.id}
    //         component={Link}
    //         to={nodeLink}
    //         selected={nodeLink === pathname}
    //       >
    //         <ListItemIcon>
    //           <NavigationItemIcon name={item.name} depth={depth} />
    //         </ListItemIcon>
    //         <Tooltip title={item.title} placement="bottom-start">
    //           <ListItemText
    //             primaryTypographyProps={{ noWrap: true }}
    //             primary={item.title}
    //           />
    //         </Tooltip>
    //       </ListItem>
    //     </>
    //   );
    // }
  }
}

export default withRouter(NavigationItem);
