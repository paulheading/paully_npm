let get = {};

/**
 * @name toRems
 * @prop {Number} value
 * @returns {String}
 */

get.rems = (value = 1) => String(value * 0.0625 + "rem");

export { get };
