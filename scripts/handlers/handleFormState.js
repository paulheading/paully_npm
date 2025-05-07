import $ from "#scripts/selectors";
import attrs from "#scripts/selectors/attrs";
import cnames from "#scripts/selectors/cnames";

function close($form) {
  let { $button } = $.selectForm.selectors($form);

  $form.setAttribute(attrs.data.state, "closed");

  $button.setAttribute(attrs.aria.expanded, "false");
}

function open($form) {
  let { $button } = $.selectForm.selectors($form);

  $form.setAttribute(attrs.data.state, "open");

  $button.setAttribute(attrs.aria.expanded, "true");
}

function toggle(target) {
  let $form = target.closest("." + cnames.selectForm.form);

  let { state } = $.selectForm.selectors($form);

  state.isClosed() ? open($form) : close($form);
}

export default { close, open, toggle };
