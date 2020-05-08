import React from 'react';
import i18next from 'i18next';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import styles from './styles.module.scss';

interface Props extends Pick<ReactPaginateProps, 'onPageChange'> {
  pageCount?: number;
}

function Paginator({ pageCount, ...props }: Props) {
  return (
    <ReactPaginate
      previousLabel={i18next.t('Paginator:prev')}
      nextLabel={i18next.t('Paginator:next')}
      breakLabel="..."
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      containerClassName={styles.paginator}
      activeClassName={styles.active}
      disabledClassName={styles.disabled}
      {...props}
      pageCount={pageCount!}
    />
  );
}

export default Paginator;
