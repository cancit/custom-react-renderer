import { setStyles } from "../util/style";

export function commitUpdate(
  instance: any,
  updatePayload: any,
  type: any,
  oldProps: any,
  newProps: any,
  internalInstanceHandle: any
) {
  console.log("newProps.style", updatePayload, newProps.style);
  /* updatePayload.forEach((propName: string) => {
    if (propName === "style") {
      setStyles(instance, newProps.style);
    }
    if (propName === "onClick") {
      instance.removeEventListener("click", oldProps[propName]);
      instance.addEventListener("click", newProps[propName]);
    }
  }); */
}

/*
if (newProps[propName] || typeof newProps[propName] === "number") {
      if (propName === "onClick") {
        instance.removeEventListener("click", oldProps[propName]);
        instance.addEventListener("click", newProps[propName]);
      }
      instance.setAttribute(propName, newProps[propName]);
    } else {
      if (propName === "onClick") {
        instance.removeEventListener("click", oldProps[propName]);
      }
      instance.removeAttribute(propName, newProps[propName]);
    }
*/
