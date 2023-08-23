import { Dispatch, SetStateAction, useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ExpandableItem = (props: {
  render: (arg0: {
    open: boolean;
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => any;
}) => {
  const [open, setOpen] = useState(false);

  return props.render({ open, setOpen });
};

export default ExpandableItem;
