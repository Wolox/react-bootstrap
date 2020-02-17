export const getDisplayName = <P>(WrappedComponent: React.ComponentType<P>) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
