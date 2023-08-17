interface IPriceAttributes {
  id: string;
  attributes: {
    title: string;
    price_infos: { data: IPriceInfoAttributes[] };
  };
}

interface IPriceInfoAttributes {
  id: string;
  attributes: {
    price: number;
    name: string;
  };
}

export interface IPriceInfoResponseAttributes {
  data: IPriceAttributes[];
}
