function createInitResize(resizeFuntion) {
  const stopResize = () => {
    window.removeEventListener("mousemove", resizeFuntion, false);
    window.removeEventListener("mouseup", stopResize, false);
  };
  return () => {
    window.addEventListener("mousemove", resizeFuntion, false);
    window.addEventListener("mouseup", stopResize, false);
  };
}

function initSize($childrens, totalSpaces, resizeDirection) {
  $childrens.forEach(($children) => {
    const parentSize =
      $childrens[0].parentElement[
        DIRECTION_ATTRIBUTE_NAMES[resizeDirection].parentSize
      ];
    // apply minSize style from data-min-size
    const childrenMinSize = Number(
      $children.dataset.minSize
        ? ($children.dataset.minSize / parentSize) * 100
        : (DEFAULT_MIN_SIZE / parentSize) * 100,
    );

    // apply init heigth from data-space
    const childrenSpace = Number($children.dataset.space ?? 1);
    const childrenNewSize = (100 / totalSpaces) * childrenSpace;

    $children.style[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].minSize] =
      Math.min(childrenMinSize, childrenNewSize) + "%";
    $children.style[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].size] =
      childrenNewSize + "%";
  });
}

function initHandlerEvents($handlers, resizeDirection, $childrens) {
  $handlers.forEach(($handler) => {
    const prevContainer =
      $handler.parentElement.previousSibling.previousSibling;
    const nextContainer = $handler.parentElement.nextSibling.nextSibling;

    function Resize(evt) {
      const prevMinSize = getMinSize(prevContainer, resizeDirection);
      const nextMinSize = getMinSize(nextContainer, resizeDirection);

      const { newPrevSize, newNextSize } = getNewSizes(
        evt,
        prevContainer,
        nextContainer,
        $childrens,
        resizeDirection,
      );

      if (newPrevSize >= prevMinSize && newNextSize >= nextMinSize) {
        prevContainer.style[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].size] =
          newPrevSize + "%";
        nextContainer.style[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].size] =
          newNextSize + "%";
      }
    }

    const initResize = createInitResize(Resize);
    $handler.addEventListener("mousedown", () => {
      initResize(prevContainer, nextContainer);
    });
  });
}
