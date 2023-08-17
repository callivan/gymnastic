import { createContext, useContext, useState } from 'react';
import { IAnimationContextProps, TActions } from './types';

const AnimationContext = createContext<IAnimationContextProps>({} as IAnimationContextProps);

export function AnimationProvider({ children }: { children: React.ReactElement }) {
  const [action, setAction] = useState<TActions>('' as TActions);

  return (
    <AnimationContext.Provider value={{ action, setAction }}>{children}</AnimationContext.Provider>
  );
}

export const useAnimationContext = () => useContext(AnimationContext);
