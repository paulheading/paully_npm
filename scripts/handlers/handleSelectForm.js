import $ from "#selectors";
import preventDefault from "#helpers/preventDefault";
import handleFormState from "#handlers/handleFormState";
import handleKeyPress from "#handlers/handleKeyPress";
import handleItemSelection from "#handlers/handleItemSelection";
import listenDocument from "#listeners/listenDocument";

let { handleItemClicks, toggleActiveItem, setFormButton, focusOnItem } =
  handleItemSelection;

function setupFormListeners($form) {
  $form.addEventListener("submit", preventDefault);

  let { $button, $items } = $.selectForm.selectors($form);

  $button.addEventListener("keydown", handleKeyPress);

  $items.forEach(handleItemClicks);

  listenDocument(function (target) {
    handleDocumentInteraction($form, target);
  });
}

function handleDocumentInteraction($form, target) {
  let { $list, click, state } = $.selectForm.selectors($form);

  if (click.insideButton(target)) {
    return handleFormState.toggle(target);
  }

  if (!click.insideList(target) && !state.isClosed()) {
    return handleFormState.toggle($list);
  }
}

export default {
  toggleActiveItem,
  setupFormListeners,
  setFormButton,
  focusOnItem,
};
