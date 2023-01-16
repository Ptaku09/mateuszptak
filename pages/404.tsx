import { useEffect } from 'react';

const Error404 = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }, []);

  return null;
};

export default Error404;
