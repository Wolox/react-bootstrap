import React, { useCallback } from 'react';

import Registration from './layout';

function RegistrationContainer() {
  const handleSubmit = useCallback((event: React.FormEvent<Element>) => {
    event.preventDefault();
    // TODO: Implement
  }, []);

  const handleInputChange = useCallback((event: React.FormEvent<Element>) => {
    event.preventDefault();
    // TODO: Implement method
  }, []);

  return <Registration onSubmit={handleSubmit} onInputChange={handleInputChange} />;
}

export default RegistrationContainer;
