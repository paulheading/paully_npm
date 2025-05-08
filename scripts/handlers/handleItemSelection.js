import $ from "#selectors";
import cnames from "#selectors/cnames";
import attrs from "#selectors/attrs";
import handleFormState from "#handlers/handleFormState";

function getCurrentItem($items, callback) {
  $items.forEach(function ($item, index) {
    let isCurrent = $item.classList.contains("current");

    if (!isCurrent) return;

    if (callback) callback($item, index);
  });
}

function selectCurrentOption(target) {
  let $form = target.closest("." + cnames.selectForm.form);

  let { tagName } = target;

  let { $items, $button } = $.selectForm.selectors($form);

  let isButton = tagName == "BUTTON";

  if (isButton) target = $items[0];

  let { innerText } = target;

  let value = target.getAttribute(attrs.data.id);

  setFormButton({ $button, innerText, value });

  $items.forEach(function ($item) {
    toggleActiveItem({ $item, active: $item == target });
  });

  handleFormState.close($form);
}

function changeCurrentFocus({ $items, increment }) {
  let isForward = increment > 0;
  let lastItem = $items.length - 1;
  let focus = 0;

  function callback($item, index) {
    focus = index + increment;

    if (isForward && index == lastItem) focus = 0;

    if (!isForward && index == 0) focus = lastItem;

    $item.classList.remove("current");
  }

  getCurrentItem($items, callback);

  let $nextFocus = $items[focus];

  $nextFocus.classList.add("current");

  focusOnItem($nextFocus);
}

function focusOnItem($item) {
  $item.focus();
  $item.scrollIntoView({ block: "nearest" });
}

function toggleActiveItem({ $item, active }) {
  active ? $item.classList.add("active") : $item.classList.remove("active");
  $item.setAttribute(attrs.aria.selected, active.toString());

  if (active) announceActiveItem($item);
}

function setFormButton({ $button, innerText, value }) {
  $button.setAttribute(attrs.data.id, value);
  $button.innerText = innerText;
}

function announceActiveItem(target) {
  let $form = target.closest("." + cnames.selectForm.form);
  let { $announce } = $.selectForm.selectors($form);

  $announce.innerText = target.innerText;
  $announce.setAttribute(attrs.aria.live, "assertive");

  setTimeout(function () {
    $announce.innerText = "";
    $announce.setAttribute(attrs.aria.live, "off");
  }, 1000);
}

function handleItemClicks($item) {
  $item.addEventListener("click", ({ target }) => selectCurrentOption(target));
}

export default {
  getCurrentItem,
  selectCurrentOption,
  changeCurrentFocus,
  announceActiveItem,
  handleItemClicks,
  toggleActiveItem,
  setFormButton,
  focusOnItem,
};
