export function createInstance(
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
  /*   let el = document.createElement(type);
  [
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
      el[k] = props[k];
    }
  });
  return el; */
}
