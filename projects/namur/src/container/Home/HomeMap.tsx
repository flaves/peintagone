import React, { useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import mapboxgl from 'mapbox-gl';
import styled from '@emotion/styled';
import {
  faClock,
  faEnvelopeOpen,
  faMapMarkerCheck,
  faPhone,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@/components/atoms/Grid';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/atoms/Container';

import { useCompanyInfosContext } from '@/contexts/companyInfosContext';

import mq from '@/styles/mq';

interface Props {
  title?: React.ReactNode;
}

const Root = styled(Container)<Props>`
  padding: 0;

  ${mq('lg')} {
    padding: 0;
  }
`;
const CompanyInfos = styled(Grid)`
  background-color: ${({ theme }) => theme.color.primary.main};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(5.5)};
  padding-right: ${({ theme }) => theme.spacing(5.5)};

  ${mq('sm')} {
    padding-top: ${({ theme }) => theme.spacing(4.2)};
    padding-bottom: ${({ theme }) => theme.spacing(4.2)};
    padding-left: ${({ theme }) => theme.spacing(6)};
    padding-right: ${({ theme }) => theme.spacing(3)};
  }

  ${mq('lg')} {
    padding-top: ${({ theme }) => theme.spacing(4.2)};
    padding-bottom: ${({ theme }) => theme.spacing(4.2)};
    padding-left: ${({ theme }) => theme.spacing(10)};
    padding-right: ${({ theme }) => theme.spacing(3)};
  }
`;
const Title = styled(Typography)`
  text-align: center;

  ${mq('lg')} {
    text-align: left;
  }
`;
const InfosContainer = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.color.white.main};

  ${mq('lg')} {
    flex-direction: row;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
`;
const ItemText = styled(Typography)`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1.5)};

  ${mq('lg')} {
    text-align: left;
    margin-top: 0;
    margin-left: ${({ theme }) => theme.spacing(3)};
  }
`;
const MapContainer = styled(Grid)`
  display: none;

  ${mq('sm')} {
    display: flex;
    position: relative;
    height: 645px;
  }

  ${mq('lg')} {
    display: flex;
    position: relative;
    height: 545px;
  }
`;
const Map = styled.div`
  position: absolute !important;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const HomeMap = ({ title }: Props): JSX.Element => {
  const [mapState] = useState({
    lng: 4.886223020496686,
    lat: 50.45529785683485,
    zoom: 15,
  });
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const { companyInfos } = useCompanyInfosContext();
  const { address, phone, email, schedule } = companyInfos;

  useEffect(() => {
    // @ts-ignore
    mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API;

    if (!mapContainer.current) return;

    // @ts-ignore
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom,
    });
  }, []);

  return (
    <Root maxWidth="xxl">
      <Grid container alignItems="stretch">
        <CompanyInfos lg={5} sm={6} xxs={12}>
          <Title variant="h2" color="white">
            {title}
          </Title>
          <InfosContainer>
            <InfoItem>
              <Icon icon={faMapMarkerCheck} />
              <ItemText variant="h3" color="white">
                {address}
              </ItemText>
            </InfoItem>
            <InfoItem>
              <Icon icon={faClock} />
              <ItemText variant="h3" color="white">
                {schedule}
              </ItemText>
            </InfoItem>
            <InfoItem>
              <Icon icon={faEnvelopeOpen} />
              <ItemText variant="h3" color="white">
                {email}
              </ItemText>
            </InfoItem>
            <InfoItem>
              <Icon icon={faPhone} />
              <ItemText variant="h3" color="white">
                {phone}
              </ItemText>
            </InfoItem>
          </InfosContainer>
        </CompanyInfos>
        <MapContainer lg={7} sm={6}>
          <Map ref={mapContainer} />
        </MapContainer>
      </Grid>
    </Root>
  );
};

export const query = graphql`
  fragment HomeMap on PrismicHomePageDataType {
    map_section_title {
      raw
    }
  }
`;

export default HomeMap;
