import * as S from './Contacts.styles';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useAnimationContext } from '@contexts';
import { useInfoAnimation, useMapAnimation } from './animations';
import { useLayoutEffect, useState } from 'react';
import { animated } from '@react-spring/web';
import { IconMarker, IconPhone, Loader, Scroll } from '@ui';
import { getContacts, GET_SOCIAL_ICON } from '@utils';
import { useNavigate } from 'react-router-dom';
import { Empty } from '@components';
import { Helmet } from 'react-helmet-async';
import { IAddressAttributes, IPhoneAttributes, ISocialAttributes } from '@types';

export default function PageContacts() {
  const navigate = useNavigate();

  const [isEmpty, setEmpty] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [addresses, setAddresses] = useState<IAddressAttributes[]>([]);
  const [phons, setPhons] = useState<IPhoneAttributes[]>([]);
  const [socials, setSocials] = useState<ISocialAttributes[]>([]);
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
      const data = await getContacts((message) =>
        navigate('/error', { state: message, replace: true }),
      );

      if (!data) return;

      setAddresses(data.attributes.addresses ?? []);
      setPhons(data.attributes.phones ?? []);
      setSocials(data.attributes.socials ?? []);

      setCoords(
        data.attributes.addresses.length
          ? [data.attributes.addresses[0].latitude, data.attributes.addresses[0].longitude]
          : [0, 0],
      );

      if (
        data.attributes.addresses.length ||
        data.attributes.phones.length ||
        data.attributes.socials.length
      ) {
        setEmpty(false);
      } else {
        setEmpty(true);
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
        <meta property="og:image" content="/logo-social.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />

        <meta name="twitter:title" content="Вверх | Контакты" />
        <meta name="twitter:description" content="Контакты учебно-тренировочного центра 'Вверх'" />
        <meta name="twitter:image" content="/logo-social.png" />
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
