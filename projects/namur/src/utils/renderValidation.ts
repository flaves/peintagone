/* eslint no-useless-escape: 0 */
import { InputType } from '@/types/input';

/**
 * Return validation rules based on input type
 * This function can also received additional rules as a 3rd parameter
 * @param {InputType} [type] - The type of the input
 * @param {boolean} [required] - Is the input required?
 * @param {Record<string, any>} [rules] - Additional validation rules
 * @returns {Record<string, any>} The validation object to pass to validation fct ex: RHF register
 */
const renderInputValidation = (
  type?: InputType,
  required?: boolean,
  rules?: Record<string, any>,
): Record<string, any> => {
  const isRequired = required || false;

  switch (type) {
    case 'text':
      return { required: isRequired, minLength: 3, ...rules };
    case 'email':
      return {
        required: true,
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      };
    case 'tel':
      return {
        required: isRequired,
        pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,
        ...rules,
      };
    case 'textarea':
      return { required: isRequired, minLength: 10, ...rules };
    case 'radio':
      return { required: true };
    default:
      return { required: isRequired, ...rules };
  }
};

export default renderInputValidation;
