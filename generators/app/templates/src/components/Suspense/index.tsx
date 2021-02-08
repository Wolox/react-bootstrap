import React, { Suspense } from 'react';

interface Props {
  fallback?: React.ElementType;
  children: React.ReactNode;
}

function CustomSuspense({ fallback: Fallback = () => <div>Loading...</div>, children }: Props) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

export default CustomSuspense;
