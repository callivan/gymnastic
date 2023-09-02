export interface IPriceAttributes {
  id: string;
  attributes: {
    title: string;
    info: IPriceInfoAttributes[];
  };
}

export interface IPriceInfoAttributes {
  id: string;
  price: number;
  name: string;
}

export interface IPriceInfoResponseAttributes {
  data: IPriceAttributes[];
}
