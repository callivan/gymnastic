export type TCardProps = ICardOwnProps;

interface ICardOwnProps {
  id: string;
  imgUrl: string;
  imgPreviewUrl: string;
  firstname: string;
  lastname: string;
  coach_infos: TInfoProps[];
}

type TInfoProps = { id: string; title: string; description: string };
