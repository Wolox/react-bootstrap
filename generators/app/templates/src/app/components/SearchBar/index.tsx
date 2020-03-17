import React from 'react';

interface Props {
  buttonClassName?: string;
  className?: string;
  formClassName?: string;
  submitButtonText: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchBar({
  submitButtonText,
  className = '',
  formClassName,
  buttonClassName = '',
  onSubmit,
  children
}: Props) {
  return (
    <div className={className}>
      <form onSubmit={onSubmit} className={formClassName}>
        {children}
        <button className={buttonClassName} type="submit" data-testid="search-bar-submit-button">
          {submitButtonText}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
