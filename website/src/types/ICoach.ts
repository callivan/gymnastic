interface ICoachAttributes {
  id: string;
  attributes: {
    img: {
      data: {
        attributes: { formats: { md: { url: string }; preview: { url: string } } };
      };
    };
    firstname: string;
    lastname: string;
    info: ICoachInfoAttributes[];
  };
}

interface ICoachInfoAttributes {
  id: string;
  title: string;
  description: string;
}

export interface ICoachesResponseAttributes {
  data: ICoachAttributes[];
}
