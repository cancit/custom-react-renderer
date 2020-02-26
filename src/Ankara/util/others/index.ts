export const others = {
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
  appendChildToContainerChildSet(childSet: any, child: any) {},

  noTimeout: true,
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: true,
  isPrimaryRenderer: true
};
