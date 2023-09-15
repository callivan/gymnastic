import { Empty, Price, TPriceProps } from '@components';
import { useAnimationContext } from '@contexts';
import { Scroll } from '@ui';
import { getPrices } from '@utils';
import { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function PagePrices() {
  const navigate = useNavigate();

  const { action } = useAnimationContext();
  const [isEmpty, setEmpty] = useState<boolean>(false);
  const [prices, setPrices] = useState<TPriceProps[]>([]);

  useLayoutEffect(() => {
    if (action !== 'page_start') return;

    const loadPrices = async () => {
      const data = await getPrices((message) =>
        navigate('/error', { state: message, replace: true }),
      );

      setPrices(data ?? []);

      if (!data || !data.length) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    };

    loadPrices();
  }, [action]);

  return (
    <>
      <Helmet>
        <title>Вверх | Цены</title>
        <meta property="og:title" content="Вверх | Цены" />
        <meta name="twitter:title" content="Вверх | Цены" />
      </Helmet>
      <Scroll>
        <Price prices={prices} />
      </Scroll>

      <Empty isEmpty={isEmpty} />
    </>
  );
}
