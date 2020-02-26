import { isUnitlessProperty } from "../util/css";
import { setStyles } from "../util/style";

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
  /* const { children, ...otherProps } = props;

  ["className", "src", "alt", "href", "rel", "target", "title"].forEach(k => {
    if (props[k]) {
      parentInstance[k] = props[k];
    }
  }); */

  // Style
  /*   if (props["style"]) {
    setStyles(parentInstance, props["style"]);
  } */

  // Listeners
  /*   Object.keys(otherProps).forEach(propName => {
    if (propName === "onClick") {
      parentInstance.addEventListener("click", otherProps[propName]);
    }
  }); */

  return false;
  // If we return true `commitMount`, will be called after changes are applied.
  // Can be used for focusing on a textarea
}
