import React, { useEffect } from 'react';

const NotFound = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Not Found';
  }, []);

  return (
    <>
      <p className="text-3xl text-center text-red-800 sm:text-5xl md:text-6xl">Page Not Found</p>
    </>
  );
};

export default NotFound;
