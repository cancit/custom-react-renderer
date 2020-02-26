import { isUnitlessProperty } from "../util/css";

export function finalizeInitialChildren(
  parentInstance: any,
  type: any,
  props: any,
  rootContainerInstance: any,
  hostContext: any
) {
  console.log(
    "finalizeInitialChildren",
    parentInstance,
    type,
    props,
    rootContainerInstance,
    hostContext
  );
  // rootContainerInstance.appendChild(parentInstance);
  const { children, ...otherProps } = props;
  /* [
    "className",
    "src",
    "alt",
    "href",
    "rel",
    "target",
    "title",
    "style"
  ].forEach(k => {
    if (props[k]) {
      parentInstance[k] = props[k];

    //  if (k == "style") {
    //    setStyles(parentInstance, props[k]);
    //  }
    }
  }); */

  /*   Object.keys(otherProps).forEach(attr => {
    if (attr === "onClick") {
      const listener = otherProps[attr];
      if (parentInstance.__ourVeryHackCacheOfEventListeners) {
        parentInstance.__ourVeryHackCacheOfEventListeners.push(listener);
      } else {
        parentInstance.__ourVeryHackCacheOfEventListeners = [listener];
      }
      parentInstance.addEventListener("click", listener);
    }
  }); */

  return false;
  // If we return true `commitMount`, will be called after changes are applied.
  // Can be used for focusing on a textarea
}

function setStyles(domElement: any, styles: any) {
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
