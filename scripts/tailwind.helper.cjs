/**
 * Recursively replace all `rem` values from root font-size 16px to root font-size `10px`.
 *
 * @param {any} value value to convert, all rem values are assumed to be based on a root font-size of `16px`
 * @returns {any} value with all rem values converted to a root font-size of `10px`
 */
module.exports = function replaceRem(value) {
  if (value == null) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(replaceRem);
  } else if (typeof value === "object") {
    return Object.entries(value).reduce(
      (prev, [key, value]) => ({ ...prev, [key]: replaceRem(value) }),
      {}
    );
  } else if (typeof value === "function") {
    return (...args) => replaceRem(value(...args));
  } else if (typeof value === "string" && value.endsWith("rem")) {
    const originalValue = parseFloat(value.replace("rem", ""));
    return `${(originalValue * 16) / 10}rem`;
  }

  return value;
};
