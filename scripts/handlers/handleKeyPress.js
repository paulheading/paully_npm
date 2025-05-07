import $ from "#scripts/selectors";
import cnames from "#scripts/selectors/cnames";
import keyPress from "#scripts/helpers/keyPress";
import handleFormState from "#scripts/handlers/handleFormState";
import handleItemSelection from "#scripts/handlers/handleItemSelection";

let { getCurrentItem, changeCurrentFocus, selectCurrentOption } =
  handleItemSelection;

export default function (event) {
  let { key, target } = event;
  let $form = target.closest("." + cnames.selectForm.form);
  let { state, $items } = $.selectForm.selectors($form);

  if (state.isClosed()) {
    if (!keyPress.isOpenGroup(key)) return;
  }

  if (!state.isClosed()) {
    if (keyPress.isClose(key) || keyPress.isTab(key))
      return handleFormState.toggle(target);
  }

  event.preventDefault();

  if (state.isClosed()) {
    if (keyPress.isOpenGroup(key)) return handleFormState.toggle(target);
  }

  if (!state.isClosed()) {
    if (keyPress.isOpen(key)) {
      getCurrentItem($items, ($item) => selectCurrentOption($item));
    }
    if (keyPress.isDown(key)) {
      return changeCurrentFocus({ $items, increment: 1 });
    }

    if (keyPress.isUp(key)) {
      return changeCurrentFocus({ $items, increment: -1 });
    }
  }
}
