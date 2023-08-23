import { IntlShape, injectIntl } from "react-intl";
import React, { Component } from "react";

import PropertiesPanelRegistry from "../properties-registry/PropertiesPanelRegistry";

interface PropertiesContentProps {
  intl: IntlShape;
  type: string;
  model: any;
}

type PropertiesContentState = {
  open: boolean;
};

class PropertiesContent extends Component<
  PropertiesContentProps,
  PropertiesContentState
> {
  state: PropertiesContentState;
  constructor(props: PropertiesContentProps) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { model, type } = this.props;
    const PropertyComponent =
      PropertiesPanelRegistry.getComponent(type).content;
    return (
      <React.Fragment>{<PropertyComponent model={model} />}</React.Fragment>
    );
  }
}
export default injectIntl(PropertiesContent);
