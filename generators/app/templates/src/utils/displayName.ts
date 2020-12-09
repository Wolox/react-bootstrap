import { ComponentType } from 'react';

export const getDisplayName = <P>(WrappedComponent: ComponentType<P>) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
