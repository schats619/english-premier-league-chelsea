import React, { Component } from "react";
import { List } from "@material-ui/core";
import NavigationItem from "./NavigationItem";

interface NavigationListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Array<any>;
  depth: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavigationListState {}

class NavigationList extends Component<
  NavigationListProps,
  NavigationListState
> {
  render(): JSX.Element {
    const { items, depth } = this.props;
    return (
      <List component="div" disablePadding>
        {items.map((item, index) => {
          <React.Fragment key={`${index}`}>
            <NavigationItem item={item} depth={depth + 1} />
          </React.Fragment>;
        })}
      </List>
    );
  }
}

export default NavigationList;
