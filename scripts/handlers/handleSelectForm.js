import $ from "#scripts/selectors";
import preventDefault from "#scripts/helpers/preventDefault";
import handleFormState from "#scripts/handlers/handleFormState";
import handleKeyPress from "#scripts/handlers/handleKeyPress";
import handleItemSelection from "#scripts/handlers/handleItemSelection";
import listenDocument from "#scripts/listeners/listenDocument";

let { handleItemClicks, toggleActiveItem, setFormButton } = handleItemSelection;

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
};
