const DEFAULT_MIN_SIZE = 12;

const DIRECTION_ATTRIBUTE_NAMES = {
  horizontal: {
    parentSize: "clientWidth",
    minSize: "minWidth",
    size: "width",
    mouse: "clientX",
    offset: "offsetLeft",
    childrenSize: "offsetWidth",
  },
  vertical: {
    parentSize: "clientHeight",
    minSize: "minHeight",
    size: "height",
    mouse: "clientY",
    offset: "offsetTop",
    childrenSize: "offsetHeight",
  },
};
