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
    coach_infos: { data: ICoachInfoAttributes[] };
  };
}

interface ICoachInfoAttributes {
  id: string;
  attributes: {
    title: string;
    description: string;
  };
}

export interface ICoachesResponseAttributes {
  data: ICoachAttributes[];
}
