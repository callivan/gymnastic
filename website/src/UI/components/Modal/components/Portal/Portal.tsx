import { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { IPortalProps } from './types/component';
import { createWrapper } from './utils/createWrapper';

export function Portal({ id, children }: IPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(id);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapper(id);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id]);

  return wrapperElement ? ReactDOM.createPortal(children, wrapperElement) : null;
}
