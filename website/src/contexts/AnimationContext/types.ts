export interface IAnimationContextProps {
  action: TActions;
  setAction: (action: TActions) => void;
}

export type TActions = 'app_load' | 'nav_start' | 'page_start' | 'route' | 'back_home';
