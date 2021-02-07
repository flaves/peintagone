import { InputType } from '@/types/input';

/**
 * Return error message based on error type and input type
 * This function can also received additional rules as a 3rd parameter to complete error message
 * Example: It can receive minLength number and use it as variable in error message
 * @param {string} errorType - The type of the error
 * @param {InputType} [inputType] - The type of the input
 * @param {number} [characters] - The number of characters for the rules minLength and maxLength
 * @return {string} - The error message
 */
const renderFormError = (
  errorType: string,
  inputType?: InputType,
  characters?: number,
) => {
  switch (errorType) {
    case 'required':
      return 'Ce champ est requis';
    case 'minLength':
      if (characters)
        return `Ce champ doit contenir plus de ${characters} caractères`;
      return `Ce champ ne contient pas suffisamment de caratères`;
    case 'maxLength':
      if (characters)
        return `Ce champ doit contenir moins de ${characters} caractères`;
      return `Ce champ contient trop de caractères`;
    case 'pattern':
      if (inputType === 'email') return `L'adresse email est invalide`;
      if (inputType === 'tel') return `Le numéro de téléphone est invalide`;
      return `Ce champ est invalide`;
    default:
      return '';
  }
};

export default renderFormError;
