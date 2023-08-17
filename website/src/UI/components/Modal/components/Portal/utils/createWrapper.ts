export function createWrapper(wrapperId: string) {
  const wrapperElement = document.createElement('div');

  wrapperElement.style.cssText = `
    pointer-events: none;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  `;
  wrapperElement.setAttribute('id', wrapperId);
  document.body.append(wrapperElement);

  return wrapperElement;
}
