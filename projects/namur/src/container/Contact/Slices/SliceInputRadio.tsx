import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Radio from '@/components/atoms/Form/Radio';
import Label from '@/components/atoms/Form/Label';
import Grid from '@/components/atoms/Layout/Grid';
import ConnectForm from '@/components/atoms/Form/ConnectForm';

import InputProps from '@/types/input';
import renderInputValidation from '@/utils/renderValidation';

interface ValueProps {
  value: string;
  label: string;
}

interface Props extends InputProps {
  values?: ValueProps[];
}

const Root = styled(Grid)``;
const RadioStyled = styled(Radio)`
  margin-right: ${({ theme }) => theme.spacing(4)};
`;

const SliceInputRadio = ({ name, label, values }: Props): JSX.Element => {
  const validation = renderInputValidation('radio');

  const Radios = values?.map(
    ({ value, label: radioLabel }: ValueProps, index: number) => (
      <ConnectForm key={index.toString()}>
        {({ register }: any) => (
          <RadioStyled
            ref={register(validation)}
            checked={index === 0}
            id={value}
            value={value}
            name={name}
            label={radioLabel}
          />
        )}
      </ConnectForm>
    ),
  );

  return (
    <Root container alignItems="center">
      <Label htmlFor={name}>{label}</Label>
      {Radios}
    </Root>
  );
};

export const query = graphql`
  fragment SliceInputRadio on PrismicContactPageBodyRadioField {
    id
    slice_type
    primary {
      field_name
      field_label
    }
    items {
      radio_value
      radio_label
    }
  }
`;

export default SliceInputRadio;
