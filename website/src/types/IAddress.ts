interface IAddressAttributes {
  id: string;
  attributes: {
    address: string;
    latitude: number;
    longitude: number;
  };
}

export interface IAddressesResponseAttributes {
  data: IAddressAttributes[];
}
