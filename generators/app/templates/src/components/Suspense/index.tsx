import React, { Suspense as ReactSuspense } from 'react';

interface Props {
  fallback?: React.ElementType;
  children: React.ReactNode;
}

// eslint-disable-next-line react/no-multi-comp
function Suspense({ fallback: Fallback = () => <div>Loading...</div>, children }: Props) {
  return <ReactSuspense fallback={<Fallback />}>{children}</ReactSuspense>;
}

export default Suspense;
