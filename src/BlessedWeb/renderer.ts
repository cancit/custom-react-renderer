import ReactReconciler from "react-reconciler";

const rootHostContext = {};
const childHostContext = {};

let reconciler = ReactReconciler({
  supportsMutation: true,

  supportsHydration: false,

  supportsPersistence: true,

  isPrimaryRenderer: true,

  createInstance(
    type: any,
    props: any,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any
  ) {
    console.log(
      type,
      props,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle
    );
    if (type === "blessed-box") {
      let el = document.createElement("div");
      return el;
    } else if (type === "blessed-button") {
      let el = document.createElement("button");
      return el;
    } else if (type === "blessed-text") {
      let el = document.createElement("span");
      return el;
    }
  },
  createTextInstance(
    text: string,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any
  ): any {
    console.log("createTextInstance", text);
    let textElement = document.createTextNode(text);
    return textElement;
  },
  appendChildToContainer(container, child) {
    container.appendChild(child);
  },
  appendInitialChild(parentInstance: any, child: any) {
    parentInstance.appendChild(child);
  },
  appendChildToContainerChildSet(childSet: any, child) {
    childSet.appendChild(child);
  },
  getRootHostContext: (rootContainerInstance: any) => {
    return rootHostContext;
  },
  removeChild(parentInstance: any, child: any) {
    parentInstance.removeChild(child);
  },
  getPublicInstance(instance: any) {},
  getChildHostContext(
    parentHostContext: any,
    type: any,
    rootContainerInstance: any
  ): any {
    return childHostContext;
  },
  prepareForCommit(containerInfo: any) {},
  resetAfterCommit(containerInfo: any) {},
  finalizeInitialChildren(
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
    if (props.width) {
      if (typeof props.width === "number") {
        parentInstance.style.width = props.width * 8 + "px";
      } else {
        parentInstance.style.width = props.width;
      }
    }
    if (props.height) {
      if (typeof props.height === "number") {
        parentInstance.style.height = props.height * 8 + "px";
      } else {
        parentInstance.style.height = props.height;
      }
    }

    if (type === "blessed-box") {
      parentInstance.style.padding = "2px";
      parentInstance.style.position = "relative";
      if (props.border) {
        if (props.border.type === "line") {
          parentInstance.style.borderWidth = "2px";
          parentInstance.style.borderStyle = "solid";
        }
        if (props.style.border && props.style.border.fg) {
          if (props.style.border.fg === "blue") {
            parentInstance.style.borderColor = "rgb(63,10,217)";
          } else {
            parentInstance.style.borderColor = props.style.border.fg;
          }
        }
      }
      if (props.top) {
        if (props.top === "center") {
          parentInstance.style.marginTop = "auto";
          parentInstance.style.marginBottom = "auto";
        }
      }
      if (props.left) {
        if (props.left === "center") {
          parentInstance.style.marginLeft = "auto";
          parentInstance.style.marginRight = "auto";
        }
      }
    }
    if (type === "blessed-button") {
      parentInstance.style.display = "flex";
      parentInstance.style.alignItems = "center";
      parentInstance.style.justifyContent = "center";

      parentInstance.style.fontSize = "16px";
      parentInstance.style.color = "white";
      parentInstance.style.background = "transparent";

      parentInstance.style.position = "absolute";
      parentInstance.style.top = props.top * 18 + "px";
      parentInstance.style.left = props.left * 8 + "px";
      parentInstance.style.width = props.width * 6 + "px";
      parentInstance.style.height = props.height * 10 + "px";
    }
    Object.keys(otherProps).forEach(attr => {
      if (attr === "className") {
        parentInstance.className = otherProps[attr];
      } else if (attr === "onPress") {
        const listener = otherProps[attr];
        if (parentInstance.__ourVeryHackCacheOfEventListeners) {
          parentInstance.__ourVeryHackCacheOfEventListeners.push(listener);
        } else {
          parentInstance.__ourVeryHackCacheOfEventListeners = [listener];
        }
        parentInstance.addEventListener("click", listener);
      }
    });
    return true;
  },
  prepareUpdate(
    instance: any,
    type: any,
    oldProps: any,
    newProps: any,
    rootContainerInstance: any,
    hostContext: any
  ) {},
  shouldSetTextContent(type: any, props: any) {
    return false;
  },
  shouldDeprioritizeSubtree(type: any, props: any) {
    return false;
  },

  scheduleDeferredCallback(
    callback: any,
    options?: { timeout: number }
  ): any {},
  cancelDeferredCallback(callbackID: any): void {},

  setTimeout(handler: (...args: any[]) => void, timeout: number) {},
  clearTimeout(handle: any): void {},
  now(): number {
    return Date.now();
  },

  commitMount() {
    console.log("commitMount");
  },
  commitTextUpdate(textInstance: any, oldText: string, newText: string) {
    textInstance.nodeValue = newText;
  },
  noTimeout: true
});
let CanDom = {
  render: (reactElement: any, domElement: any, callback?: any) => {
    //  console.log(arguments);
    // Create a root Container if it doesnt exist
    if (!domElement._rootContainer) {
      domElement.style.backgroundColor = "black";
      domElement.style.height = "100vh";
      domElement.style.color = "white";
      domElement.style.display = "flex";
      domElement.style.flexDirection = "column";
      //   domElement.style.alignItems = "center";
      //   domElement.style.justifyContent = "center";
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
