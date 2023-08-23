import MasonMountPropertiesContent from "../properties-content/MasonMountPropertiesContent";
import PropertiesUnknownContent from "../properties-content/PropertiesUnknownContent";
import Registry from "./Registry";
const registry = new Registry({
  components: {
    playerInformation: {
      title: "property.panel.heading.playerInformation",
      content: PropertiesUnknownContent,
    },
    masonMountInformation: {
      title: "property.panel.heading.masonMountInformation",
      content: MasonMountPropertiesContent,
    },
  },
});

export default registry;
