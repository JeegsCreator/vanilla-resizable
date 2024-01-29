function $(query, parent = document) {
  return parent.querySelector(query);
}

function $$(query, parent = document) {
  return parent.querySelectorAll(query);
}

function getSiblingsTotalHeight(prevElement, nextElement) {
  const siblings = $childrens.filter(
    (children) =>
      !children.isSameNode(prevElement) && !children.isSameNode(nextElement),
  );
  let heigth = 0;
  siblings.forEach((sibling) => (heigth += sibling.offsetHeight));
  return heigth;
}

function getSiblingsTotalSize(
  prevElement,
  nextElement,
  resizeDirection,
  $childrens,
) {
  const siblings = $childrens.filter(
    (children) =>
      !children.isSameNode(prevElement) && !children.isSameNode(nextElement),
  );
  let size = 0;
  siblings.forEach(
    (sibling) =>
      (size +=
        sibling[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].childrenSize]),
  );
  return size;
}

function getMinSize(container, resizeDirection) {
  return Number(
    container.style[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].minSize].replace(
      "%",
      "",
    ),
  );
}

function getNewSizes(
  evt,
  prevContainer,
  nextContainer,
  $childrens,
  resizeDirection,
) {
  const parentSize =
    $childrens[0].parentElement[
      DIRECTION_ATTRIBUTE_NAMES[resizeDirection].parentSize
    ];

  const newPrevSize =
    ((evt[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].mouse] -
      prevContainer[DIRECTION_ATTRIBUTE_NAMES[resizeDirection].offset]) /
      parentSize) *
    100;

  const newNextSize =
    100 -
    newPrevSize -
    (getSiblingsTotalSize(
      prevContainer,
      nextContainer,
      resizeDirection,
      $childrens,
    ) /
      parentSize) *
      100;

  return { newPrevSize, newNextSize };
}

function getResizeDirection($parent) {
  const resizeDirection = $parent.dataset.direction ?? "vertical";
  if (resizeDirection !== "horizontal" && resizeDirection !== "vertical")
    throw new Error(
      `data-direction attribute is "${resizeDirection}" and it can be just "horizontal" or "vertical"`,
    );

  return resizeDirection;
}

function getTotalSpaces($childrens) {
  let totalSpaces = 0;
  $childrens.forEach(
    ($children) => (totalSpaces += Number($children.dataset.space)),
  );

  return totalSpaces;
}
