const $rezisables = [...$$(".resizable")];

$rezisables.forEach(($rezisable) => {
  const $handlers = [...$$("&>.handler-container>.handler", $rezisable)];
  const $childrens = [...$$("&>.children", $rezisable)];
  const resizeDirection = getResizeDirection($rezisable);
  const totalSpaces = getTotalSpaces($childrens);

  initSize($childrens, totalSpaces, resizeDirection);
  initHandlerEvents($handlers, resizeDirection, $childrens);
});
