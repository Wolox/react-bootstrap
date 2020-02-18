import React from 'react';

interface Props {
  buttonClassName?: string;
  className?: string;
  formClassName?: string;
  textButtonSearch?: string;
  children?: React.ReactNode;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchBarContainer({
  textButtonSearch = 'Buscar',
  className = '',
  formClassName,
  buttonClassName = '',
  handleSubmit,
  children
}: Props) {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={formClassName}>
        {children}
        <button className={buttonClassName} type="submit">
          {textButtonSearch}
        </button>
      </form>
    </div>
  );
}

export default SearchBarContainer;
