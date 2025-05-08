import attrs from "#selectors/attrs";
import cnames from "#selectors/cnames";

let query = {};

query.button = function (value = "") {
  return query.selector(attrs.button + "." + value);
};

query.buttonAll = function (value = "") {
  return query.selectorAll(attrs.button + "." + value);
};

query.class = function (value = "") {
  return query.selector("." + value);
};

query.classAll = function (value = "") {
  return query.selectorAll("." + value);
};

query.selector = function (value = "") {
  return document.querySelector(value);
};

query.selectorAll = function (value = "") {
  return document.querySelectorAll(value);
};

query.buttonAll = function (value = "") {
  return query.selectorAll(attrs.button + "." + value);
};

query.selectForm = function (value = "") {
  return query.selector("." + cnames.selectForm.form + value);
};

query.selectFormAll = function (value = "") {
  return query.selectorAll("." + cnames.selectForm.form + value);
};

export default query;
