import { shallowDiff } from "../util/diff";

export function prepareUpdate(
  instance: any,
  type: any,
  oldProps: any,
  newProps: any,
  rootContainerInstance: any,
  hostContext: any
) {
  console.log("prepareUpdate", type, oldProps, newProps);
  // return shallowDiff(oldProps, newProps);
}
