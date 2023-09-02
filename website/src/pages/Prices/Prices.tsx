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
        <meta
          name="description"
          content="Цены на различные услуги учебно-тренировочного центра 'Вверх'"
        />
        <meta name="keywords" content="Гимнастика, Акробатика, Спорт, Дети, Вверх, Цены" />

        <meta property="og:title" content="Вверх | Цены" />
        <meta
          property="og:description"
          content="Цены на различные услуги учебно-тренировочного центра 'Вверх'"
        />
        <meta property="og:image" content="/logo-social.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />

        <meta name="twitter:title" content="Вверх | Цены" />
        <meta
          name="twitter:description"
          content="Цены на различные услуги учебно-тренировочного центра 'Вверх'"
        />
        <meta name="twitter:image" content="/logo-social.png" />
      </Helmet>
      <Scroll>
        <Price prices={prices} />
      </Scroll>

      <Empty isEmpty={isEmpty} />
    </>
  );
}
