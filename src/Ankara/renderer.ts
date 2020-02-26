import ReactReconciler from "react-reconciler";

import { createInstance } from "./create/createInstance";
import { createTextInstance } from "./create/createTextInstance";
import { finalizeInitialChildren } from "./create/finalizeInitialChildren";

import { prepareUpdate } from "./update/prepareUpdate";
import { commitUpdate } from "./update/commitUpdate";
import { commitTextUpdate } from "./update/commitTextUpdate";

const rootHostContext = {};
const childHostContext = {};

let reconciler = ReactReconciler({
  // create
  createInstance,
  createTextInstance,
  commitTextUpdate,
  finalizeInitialChildren,

  // Update
  prepareUpdate,
  commitUpdate,

  // Parent - Child
  appendChildToContainer(container, child) {
    // container.appendChild(child);
  },
  appendInitialChild(parentInstance: any, child: any) {
    // parentInstance.appendChild(child);
  },
  removeChild(parentInstance: any, child: any) {
    // parentInstance.removeChild(child);
  },
  insertBefore: (parentInstance: any, child, beforeChild) => {
    // parentInstance.insertBefore(child, beforeChild);
  },

  now(): number {
    return Date.now();
  },

  // Empty functions
  getRootHostContext: (rootContainerInstance: any) => {
    return {};
  },
  shouldSetTextContent(type: any, props: any) {
    return false;
  },
  shouldDeprioritizeSubtree(type: any, props: any) {
    return false;
  },
  getChildHostContext(
    parentHostContext: any,
    type: any,
    rootContainerInstance: any
  ): any {
    return {};
  },
  getPublicInstance(instance: any) {},

  scheduleDeferredCallback(
    callback: any,
    options?: { timeout: number }
  ): any {},
  cancelDeferredCallback(callbackID: any): void {},

  setTimeout(handler: (...args: any[]) => void, timeout: number) {},
  clearTimeout(handle: any): void {},
  commitMount() {},
  prepareForCommit(containerInfo: any) {},
  resetAfterCommit(containerInfo: any) {},
  appendChildToContainerChildSet(childSet: any, child) {},

  noTimeout: true,
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: true,
  isPrimaryRenderer: true
});
let CanDom = {
  render: (reactElement: any, domElement: any, callback?: any) => {
    //  console.log(arguments);
    // Create a root Container if it doesnt exist
    if (!domElement._rootContainer) {
      domElement._rootContainer = reconciler.createContainer(
        domElement,
        false,
        false
      );
    }

    // update the root Container
    return reconciler.updateContainer(
      reactElement,
      domElement._rootContainer,
      null,
      callback
    );
  }
};

export default CanDom;
