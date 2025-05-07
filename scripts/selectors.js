import attrs from "#scripts/selectors/attrs";
import cnames from "#scripts/selectors/cnames";
import selectForm from "#scripts/selectors/selectForm";
import query from "#scripts/selectors/queries";

export { attrs, cnames };

export default {
  selectForm: {
    selectors: selectForm,
  },
  query,
};
