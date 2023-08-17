interface IPhoneAttributes {
  id: string;
  attributes: {
    phone: string;
  };
}

export interface IPhonsResponseAttributes {
  data: IPhoneAttributes[];
}
