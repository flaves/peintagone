import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image, { FluidObject } from 'gatsby-image';

import Grid from '@/components/atoms/Layout/Grid';
import mq from '@/styles/mq';
import Typography from '@/components/atoms/Typography';
import Container from '@/components/atoms/Layout/Container';

import { ImageType } from '@/types/image';

interface MemberProps {
  image_1?: ImageType | null | undefined;
  image_2?: ImageType | null | undefined;
  role?: React.ReactNode;
  name?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  image?: ImageType | null | undefined;
  title?: React.ReactNode;
  text?: React.ReactNode;
  members?: MemberProps[];
}

// For XXL screen
const RootContainer = styled(Container)`
  padding: 0;

  ${mq('lg')} {
    padding: 0;
  }
`;
const RootGrid = styled(Grid)`
  margin-top: ${({ theme }) => theme.spacing(6)};

  // Stretch side image to full height
  ${mq('md')} {
    justify-content: initial;
    align-items: initial;
  }

  ${mq('lg')} {
    margin-top: ${({ theme }) => theme.spacing(10)};
    align-items: center;
  }
`;
const SideImageContainer = styled(Grid)`
  display: none;

  ${mq('md')} {
    display: flex;
  }
`;
const SideImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ContentContainer = styled(Grid)`
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  ${mq('lg')} {
    padding-left: ${({ theme }) => theme.spacing(5)};
  }

  ${mq('xl')} {
    padding-left: ${({ theme }) => theme.spacing(8)};
  }
`;
const Title = styled(Typography)`
  text-align: center;

  ${mq('lg')} {
    text-align: left;
  }
`;
const Text = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  text-align: center;

  ${mq('lg')} {
    text-align: left;
  }
`;
const MembersContainer = styled(Grid)`
  margin-top: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
  align-items: center;

  ${mq('sm')} {
    flex-direction: row;
    justify-content: center;
  }

  ${mq('md')} {
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacing(1)};
  }

  ${mq('lg')} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const MemberContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3.5)};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq('sm')} {
    padding-left: ${({ theme }) => theme.spacing(2.5)};
    padding-right: ${({ theme }) => theme.spacing(2.5)};
  }

  ${mq('md')} {
    margin-top: ${({ theme }) => theme.spacing(1.5)};
    padding-left: ${({ theme }) => theme.spacing(0)};
    padding-right: ${({ theme }) => theme.spacing(0)};
  }

  ${mq('lg')} {
    margin-top: 0;
    padding-right: ${({ theme }) => theme.spacing(3.5)};
  }
`;
const MemberImage = styled(Image)`
  ${mq('md')} {
    height: 200px;
    object-fit: cover;
  }

  ${mq('lg')} {
    height: 350px;
    object-fit: cover;
  }
`;
const Role = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  text-align: center;
  opacity: 1;
  font-weight: 800;
`;
const Name = styled(Typography)`
  text-align: center;
`;
const Description = styled(Typography)`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(1)};
  // image width
  max-width: 300px;
`;

const Fade = styled.div`
  position: relative;
  width: 300px;
  height: 350px;

  ${mq(`md`)} {
    height: 200px;
  }

  ${mq(`lg`)} {
    height: 350px;
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: opacity 0.5s ease;

    &:first-of-type {
      opacity: 1;
    }

    &:last-of-type {
      opacity: 0;
    }
  }

  &:hover {
    & > div {
      &:first-of-type {
        opacity: 0;
      }

      &:last-of-type {
        opacity: 1;
      }
    }
  }
`;

const Member = ({
  image_1,
  image_2,
  role,
  name,
  description,
}: MemberProps): JSX.Element => {
  return (
    <MemberContainer>
      <Fade>
        <div>
          <MemberImage fluid={image_1?.fluid as FluidObject} />
        </div>
        <div>
          <MemberImage fluid={image_2?.fluid as FluidObject} />
        </div>
      </Fade>
      <Role color="primary" variant="textSm">
        {role}
      </Role>
      <Name variant="h3">{name}</Name>
      <Description variant="textDefault">{description}</Description>
    </MemberContainer>
  );
};

const HomeTeam = ({ title, text, image, members }: Props): JSX.Element => {
  const Members = members?.map((member, index) => (
    <Member key={index.toString()} {...member} />
  ));

  return (
    <RootContainer maxWidth="xxl">
      <RootGrid container>
        <SideImageContainer lg={5} md={6}>
          {/* Sizes matches grid size */}
          <SideImage fluid={image?.fluid as FluidObject} />
        </SideImageContainer>
        <ContentContainer lg={7} md={6} xxs={12}>
          <Title variant="h2">{title}</Title>
          <Text variant="textMd">{text}</Text>
          <MembersContainer container>{Members}</MembersContainer>
        </ContentContainer>
      </RootGrid>
    </RootContainer>
  );
};

export const query = graphql`
  fragment HomeTeam on PrismicHomePageDataType {
    team_section_title {
      raw
    }
    team_section_text {
      raw
    }
    team_section_side_image {
      fluid {
        ...GatsbyPrismicImageFluid
      }
    }
    team_members {
      image_1 {
        fluid {
          ...GatsbyPrismicImageFluid
        }
      }
      image_2 {
        fluid {
          ...GatsbyPrismicImageFluid
        }
      }
      role {
        raw
      }
      name {
        raw
      }
      description {
        raw
      }
    }
  }
`;

export default HomeTeam;
