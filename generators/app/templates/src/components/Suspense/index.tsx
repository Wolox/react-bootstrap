import React, { Suspense as ReactSuspense } from 'react';

interface Props {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

function Suspense({ fallback, children }: Props) {
  return <ReactSuspense fallback={fallback || <div>Loading...</div>}>{children}</ReactSuspense>;
}

export default Suspense;
