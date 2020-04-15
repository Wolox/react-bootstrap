import React from 'react';

interface Props {
  buttonClassName?: string;
  className?: string;
  formClassName?: string;
  submitButtonContent: React.ReactNode;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchBar({ submitButtonContent, className = '', buttonClassName = '', onSubmit, children }: Props) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
      <button className={buttonClassName} type="submit" data-testid="search-bar-submit-button">
        {submitButtonContent}
      </button>
    </form>
  );
}

export default SearchBar;
