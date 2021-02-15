import { useState } from 'react';
import useNotifications from '@/hooks/useNotifications';
import qs from 'querystring';

interface OutProps {
  loading: boolean;
  executeFetch: (data: any) => Promise<any>;
}

const usePostNetlifyForm = (url: string, formName: string): OutProps => {
  const { showSuccess, showError } = useNotifications();
  const [loading, setLoading] = useState<boolean>(false);

  const checkStatus = (res: Response): Promise<JSON> | null => {
    if (res.ok) {
      // res.status >= 200 && res.status < 300
      return res.json();
    }
    showError(`Une erreur est survenue, code: ${res.status}`);
    throw new Error(res.statusText);
  };

  const executeFetch = async (data: any) => {
    setLoading(true);

    console.log('executing fetch ...');

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({
          ...data,
          'form-name': formName,
        }),
      });

      const test = await checkStatus(response);

      console.log('check status result => ', test);

      setLoading(false);
      showSuccess('Votre formulaire a bien été envoyé');

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: 'Form sent',
      };
    } catch (e) {
      showError('Désolé une erreur est survenue, veuillez réassayer');
      setLoading(false);

      return {
        statusCode: 500,
        body: e.message,
      };
    }
  };

  return { executeFetch, loading };
};

export default usePostNetlifyForm;
