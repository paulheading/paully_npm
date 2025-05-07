import attrs from "#selectors/attrs";
import cnames from "#selectors/cnames";
import selectForm from "#selectors/selectForm";
import query from "#selectors/queries";

export { attrs, cnames };

export default {
  selectForm: {
    selectors: selectForm,
  },
  query,
};
