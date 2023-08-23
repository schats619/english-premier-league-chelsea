import { get } from "lodash";

class Registry {
  registry: any;
  constructor(registry: any = {}) {
    this.registry = registry;
  }

  getDefaultComponent(): any {
    return get(this.registry.components, "unknown", null);
  }

  getComponent(type: string): any {
    return get(this.registry.components, type, this.getDefaultComponent());
  }
}

export default Registry;
