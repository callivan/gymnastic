import { config, useTransition } from '@react-spring/web';

interface IUseShowProps {
  isOpen: boolean;
  delay: number;
}

export const useShowAnimation = ({ isOpen, delay }: IUseShowProps) => {
  return useTransition(isOpen, {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    from: { opacity: 0, transform: 'translateY(-50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50px)' },
    delay,
    config: isOpen ? config.gentle : config.stiff,
  });
};
