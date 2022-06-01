/* eslint-disable no-console */
import { handleList } from './handleList';

export const handleSubscription = (body, setSubmitted, setError) => {
  fetch(`${process.env.SITE_URL}api/subscribe`, {
    method: 'POST',
    body,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Post Contact:', data.error);
      if (data.error) {
        setError(data.error);
      } else {
        handleList(JSON.stringify(data.data.Data[0]));
        setSubmitted(true);
        setError(null);
      }
    })

    .catch((error) => {
      console.error('Error:', error);
    });
};
