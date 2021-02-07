import React from 'react';
import styled from '@emotion/styled';

import SliceInputText from '@/container/Contact/Slices/SliceInputText';
import SliceInputTextArea from '@/container/Contact/Slices/SliceInputTextArea';
import SliceInputRadio from '@/container/Contact/Slices/SliceInputRadio';

import Grid from '@/components/atoms/Layout/Grid';

import mq from '@/styles/mq';

interface Props {
  body: any;
}

const GridItem = styled(Grid)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  ${mq('md')} {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    padding-right: ${({ theme }) => theme.spacing(5)};
  }
`;

const ContactFormSliceZone = ({ body }: Props): JSX.Element => {
  const Slices = body?.map((bodyContent: any, index: number) => {
    const type = bodyContent?.slice_type;

    if (type === 'text_field') {
      const {
        field_name,
        field_placeholder,
        field_label,
        field_type,
        required,
      } = bodyContent?.primary || {};

      const InputProps = {
        name: field_name,
        placeholder: field_placeholder,
        label: field_label,
        type: field_type,
        required,
      };

      return (
        <GridItem key={index.toString()} md={6} xxs={12}>
          <SliceInputText {...InputProps} />
        </GridItem>
      );
    }

    if (type === 'textarea_field') {
      const { field_name, field_placeholder, field_label, rows, required } =
        bodyContent?.primary || {};

      const InputProps = {
        name: field_name,
        placeholder: field_placeholder,
        label: field_label,
        rows,
        required,
      };

      return (
        <GridItem key={index.toString()} xxs={12}>
          <SliceInputTextArea {...InputProps} />
        </GridItem>
      );
    }

    if (type === 'radio_field') {
      const { field_name, field_label } = bodyContent?.primary || {};
      const { items } = bodyContent || {};

      const InputProps = {
        name: field_name,
        label: field_label,
        values: items?.map((el: any) => ({
          value: el?.radio_value,
          label: el?.radio_label,
        })),
      };

      return (
        <GridItem key={index.toString()} xxs={12}>
          <SliceInputRadio {...InputProps} />
        </GridItem>
      );
    }

    return <div key={index.toString()} />;
  });

  return <Grid container>{Slices}</Grid>;
};

export default ContactFormSliceZone;
