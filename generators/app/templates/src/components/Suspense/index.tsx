import { ReactNode, Suspense as ReactSuspense } from 'react';

interface Props {
  fallback?: ReactNode;
  children: ReactNode;
}

function Suspense({ fallback, children }: Props) {
  return <ReactSuspense fallback={fallback || <div>Loading...</div>}>{children}</ReactSuspense>;
}

export default Suspense;
