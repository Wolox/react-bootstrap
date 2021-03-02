import React, { Suspense as ReactSuspense } from 'react';

interface Props {
  fallback: React.ElementType;
  children: React.ReactNode;
}

function Suspense({ fallback: Fallback, children }: Props) {
  return <ReactSuspense fallback={<Fallback />}>{children}</ReactSuspense>;
}

export default Suspense;
