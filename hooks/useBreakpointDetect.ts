import { useEffect, useState } from 'react';

const useBreakpointDetect = () => {
  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isBlob, setIsBlob] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 768);
    setIsBlob(window.innerWidth >= 1280);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
      setIsBlob(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, isMobile, isBlob };
};

export default useBreakpointDetect;
