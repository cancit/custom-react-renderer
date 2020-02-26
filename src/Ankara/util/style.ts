import { isUnitlessProperty } from "./css";

export function setStyles(domElement: any, styles: any) {
  Object.keys(styles).forEach(name => {
    const rawValue = styles[name];
    const isEmpty =
      rawValue === null || typeof rawValue === "boolean" || rawValue === "";

    // Unset the style to its default values using an empty string
    if (isEmpty) domElement.style[name] = "";
    else {
      const value =
        typeof rawValue === "number" && !isUnitlessProperty(name)
          ? `${rawValue}px`
          : rawValue;

      domElement.style[name] = value;
    }
  });
}
