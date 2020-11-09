import React, { Suspense } from 'react';

import Loading from '../Spinner/components/loading';

interface Props {
  fallback?: React.ElementType;
  children: React.ReactNode;
}

function CustomSuspense({ fallback: Fallback = Loading, children }: Props) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

export default CustomSuspense;
