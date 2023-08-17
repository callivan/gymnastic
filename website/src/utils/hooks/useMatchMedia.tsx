import { useLayoutEffect, useState } from 'react';

interface IUseMatchMediaProps {
  sizeNames: string[];
  queries: string[];
}

export function useMatchMedia({ sizeNames, queries }: IUseMatchMediaProps) {
  const result: Record<string, boolean> = {};

  const mediaQueriesList = queries.map((query) => matchMedia(query));

  const getMatches = () => mediaQueriesList.map((media) => media.matches);

  const [matches, setMatches] = useState<boolean[]>(getMatches());

  useLayoutEffect(() => {
    const handleSetMatches = () => {
      setMatches(getMatches());
    };

    mediaQueriesList.forEach((media) => media.addEventListener('change', handleSetMatches));

    return () => {
      mediaQueriesList.forEach((media) => media.removeEventListener('change', handleSetMatches));
    };
  });

  sizeNames.forEach((name, index) => {
    result[name] = matches[index];
  });

  return result;
}
