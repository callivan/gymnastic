import * as S from './Contacts.styles';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useAnimationContext } from '@contexts';
import { useInfoAnimation, useMapAnimation } from './animations';
import { useLayoutEffect, useState } from 'react';
import { animated } from '@react-spring/web';
import { IconMarker, IconPhone, Loader, Scroll } from '@ui';
import { getAddresses, getPhons, getSocial, GET_SOCIAL_ICON } from '@utils';
import { IAddressProps, IPhonsProps, ISocialProps } from './types/component';
import { useNavigate } from 'react-router-dom';
import { Empty } from '@components';
import { Helmet } from 'react-helmet-async';

export default function PageContacts() {
  const navigate = useNavigate();

  const [isEmpty, setEmpty] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [addresses, setAddresses] = useState<IAddressProps[]>([]);
  const [phons, setPhons] = useState<IPhonsProps[]>([]);
  const [socials, setSocials] = useState<ISocialProps[]>([]);
  const [coords, setCoords] = useState<[number, number]>([0, 0]);

  const { action } = useAnimationContext();

  const { startMapAnimation, reverseMapAnimation, styleMap } = useMapAnimation();
  const { startInfoAnimation, reverseInfoAnimation, styleInfo } = useInfoAnimation();

  useLayoutEffect(() => {
    switch (action) {
      case 'page_start':
        setTimeout(() => {
          if (phons.length || addresses.length || socials.length) {
            startInfoAnimation();
          }
        }, 500);
        break;
      case 'back_home':
        reverseInfoAnimation();
        reverseMapAnimation();
        break;
    }
  }, [action, phons, addresses, socials]);

  useLayoutEffect(() => {
    if (action !== 'page_start') return;

    const loadContacts = async () => {
      const dataAddresses = await getAddresses((message) =>
        navigate('/error', { state: message, replace: true }),
      );
      const dataPhons = await getPhons((message) =>
        navigate('/error', { state: message, replace: true }),
      );
      const dataSocial = await getSocial((message) =>
        navigate('/error', { state: message, replace: true }),
      );

      setAddresses(dataAddresses ?? []);
      setPhons(dataPhons ?? []);
      setCoords(
        dataAddresses.length ? [dataAddresses[0].latitude, dataAddresses[0].longitude] : [0, 0],
      );
      setSocials(dataSocial ?? []);

      if (
        (!dataAddresses || !dataAddresses.length) &&
        (!dataPhons || !dataPhons.length) &&
        (!dataSocial || !dataSocial.length)
      ) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    };

    loadContacts();
  }, [action]);

  return (
    <>
      <Helmet>
        <title>Вверх | Контакты</title>
        <meta name="description" content="Контакты учебно-тренировочного центра 'Вверх'" />
        <meta name="keywords" content="Гимнастика, Акробатика, Спорт, Дети, Вверх, Контакты" />

        <meta property="og:title" content="Вверх | Контакты" />
        <meta property="og:description" content="Контакты учебно-тренировочного центра 'Вверх'" />
      </Helmet>
      <Scroll>
        <S.Wrapper style={{ justifyContent: !addresses.length ? 'center' : 'flex-end' }}>
          <animated.div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '16px',
              flexDirection: 'column',

              ...styleInfo,
            }}
          >
            <S.Text className="is-title">свяжитесь с нами:</S.Text>

            {socials.map(({ id, link, social, icon }) => (
              <S.Link key={id} href={link} target="_blank">
                {GET_SOCIAL_ICON.get(icon)}
                {social}

                <S.Line className="line" />
              </S.Link>
            ))}

            {phons.map(({ id, phone }) => (
              <S.Link key={id} href={`tel:+${phone.replace(/[^0-9]/gi, '')}`} target="_blank">
                <IconPhone />

                {phone}

                <S.Line className="line" />
              </S.Link>
            ))}

            {addresses.map(({ id, address, latitude, longitude }) => (
              <S.Button
                key={id}
                className={latitude === coords[0] && longitude === coords[1] ? 'active' : ''}
                onClick={() => setCoords([latitude, longitude])}
              >
                <IconMarker />

                {address}

                <S.Line className="line" />
              </S.Button>
            ))}
          </animated.div>

          {addresses.length ? (
            <S.MapWrapper>
              {isLoading ? <Loader className="not-padding" /> : null}

              <animated.div
                style={{
                  width: '100%',
                  height: '100%',
                  ...styleMap,
                }}
              >
                <YMaps>
                  <Map
                    width="100%"
                    height="100%"
                    onLoad={() => {
                      setLoading(false);

                      setTimeout(() => {
                        startMapAnimation();
                      }, 500);
                    }}
                    state={{ center: coords, zoom: 17 }}
                  >
                    <Placemark geometry={coords} />
                  </Map>
                </YMaps>
              </animated.div>
            </S.MapWrapper>
          ) : null}
        </S.Wrapper>
      </Scroll>

      <Empty isEmpty={isEmpty} />
    </>
  );
}
