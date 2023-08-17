export interface INavigationProps {
  items: TNavigationItemProps[];
}

export type TNavigationItemProps = { id: string; name: string; onClick: () => void };
