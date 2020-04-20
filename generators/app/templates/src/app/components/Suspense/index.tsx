import React, { Suspense } from 'react';

import Loading from '../Spinner/components/loading';

interface Props {
  fallback?: React.ElementType;
  children: React.ReactNode;
}

function CustomSuspense({ fallback = Loading, children }: Props) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export default CustomSuspense;
