import React from 'react';
import { graphql } from 'gatsby';
import { css, Theme } from '@emotion/react';

import Input from '@/components/atoms/Form/Input';
import ConnectForm from '@/components/atoms/Form/ConnectForm';
import FormError from '@/components/atoms/Form/FormError';

import renderInputValidation from '@/utils/renderValidation';
import renderFormError from '@/utils/renderFormError';

import InputProps from '@/types/input';

const labelStyled = (theme: Theme) => css`
  margin-bottom: ${theme.spacing(0.8)};
`;

const SliceInputText = ({
  name,
  label,
  placeholder,
  required,
  type,
  rules,
}: InputProps): JSX.Element => {
  const validation = renderInputValidation(type, required, rules);

  return (
    <ConnectForm>
      {({ register, errors, clearErrors }: any) => (
        <>
          <Input
            ref={register(validation)}
            name={name}
            label={label}
            placeholder={placeholder}
            required={required}
            aria-invalid={errors?.[name] ? 'true' : 'false'}
            type={type}
            classes={{ label: labelStyled }}
            onChange={() => clearErrors()}
          />
          {errors?.[name] && (
            <FormError>
              {renderFormError(
                errors?.[name]?.type,
                type,
                validation?.[errors?.[name]?.type],
              )}
            </FormError>
          )}
        </>
      )}
    </ConnectForm>
  );
};

export const query = graphql`
  fragment SliceInputText on PrismicContactPageBodyTextField {
    id
    slice_type
    primary {
      field_name
      field_placeholder
      field_label
      field_type
      required
    }
  }
`;

export default SliceInputText;
