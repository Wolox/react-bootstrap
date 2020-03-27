import React, { useCallback } from 'react';

import RecoverPassword from './layout';

function RecoverPasswordContainer() {
  const handleSubmit = useCallback((event: React.FormEvent<Element>) => {
    event.preventDefault();
    // TODO: Implement
  }, []);

  const handleEmailChange = useCallback((event: React.FormEvent<Element>) => {
    event.preventDefault();
    // TODO: Implement method
  }, []);
  return <RecoverPassword onSubmit={handleSubmit} onEmailChange={handleEmailChange} />;
}

export default RecoverPasswordContainer;
