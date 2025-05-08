import attrs from "#selectors/attrs";
import cnames from "#selectors/cnames";

export default function ($form) {
  let selectors = {
    $button: $form.querySelector("." + cnames.selectForm.button),
    $list: $form.querySelector("." + cnames.selectForm.list),
    $items: $form.querySelectorAll("." + cnames.selectForm.item),
    $announce: $form.querySelector("." + cnames.selectForm.announce),
  };

  selectors.data = {
    id: selectors.$button.getAttribute(attrs.data.id),
    snake: $form.getAttribute(attrs.data.snake),
    state: $form.getAttribute(attrs.data.state),
    group: $form.getAttribute(attrs.data.group),
    card: $form.getAttribute(attrs.data.card),
  };

  selectors.state = {
    isClosed: () => selectors.data.state == "closed",
  };

  selectors.click = {
    insideButton: (target) => selectors.$button.contains(target),
    insideList: (target) => selectors.$list.contains(target),
  };

  return selectors;
}
