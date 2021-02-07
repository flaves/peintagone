import React from 'react';
import { graphql } from 'gatsby';

import Textarea from '@/components/atoms/Form/Textarea';
import ConnectForm from '@/components/atoms/Form/ConnectForm';
import FormError from '@/components/atoms/Form/FormError/Error';

import renderFormError from '@/utils/renderFormError';
import renderInputValidation from '@/utils/renderValidation';

import { TextAreaProps } from '@/types/input';

const SliceInputTextArea = ({
  name,
  label,
  placeholder,
  required,
  rows,
}: TextAreaProps): JSX.Element => {
  const validation = renderInputValidation('textarea', required);

  return (
    <ConnectForm>
      {({ register, errors }: any) => (
        <>
          <Textarea
            ref={register(validation)}
            name={name}
            placeholder={placeholder}
            label={label}
            required={required}
            rows={rows}
          />
          {errors?.[name] && (
            <FormError>
              {renderFormError(
                errors?.[name]?.type,
                'textarea',
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
  fragment SliceInputTextArea on PrismicContactPageBodyTextareaField {
    id
    slice_type
    primary {
      field_name
      field_placeholder
      field_label
      rows
      required
    }
  }
`;

export default SliceInputTextArea;
