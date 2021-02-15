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

  const executeFetch = async (data: any) => {
    setLoading(true);

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({
          ...data,
          'form-name': formName,
        }),
      });

      showSuccess('Votre formulaire a bien été envoyé');
    } catch (e) {
      showError('Désolé une erreur est survenue, veuillez réessayer');
    } finally {
      setLoading(false);
    }
  };

  return { executeFetch, loading };
};

export default usePostNetlifyForm;
