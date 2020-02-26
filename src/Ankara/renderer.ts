import ReactReconciler from "react-reconciler";

import { createInstance } from "./create/createInstance";
import { createTextInstance } from "./create/createTextInstance";
import { finalizeInitialChildren } from "./create/finalizeInitialChildren";

import { prepareUpdate } from "./update/prepareUpdate";
import { commitUpdate } from "./update/commitUpdate";
import { commitTextUpdate } from "./update/commitTextUpdate";
import { others } from "./util/others";

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
  ...others
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
    // puts react element inside container
    return reconciler.updateContainer(
      reactElement,
      domElement._rootContainer,
      null,
      callback
    );
  }
};

export default CanDom;
