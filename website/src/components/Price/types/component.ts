export interface IPriceProps {
  prices: TPriceProps[];
}

export type TPriceProps = {
  id: string;
  title: string;
  price_infos: {
    id: string;
    price: number;
    name: string;
  }[];
};
