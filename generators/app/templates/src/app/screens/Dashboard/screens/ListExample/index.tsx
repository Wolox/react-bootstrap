import React from 'react';
import i18next from 'i18next';

import { getList } from '~services/ListExampleService';
import { useRequest } from '~app/hooks/useRequest';
import Paginator from '~components/Paginator';

import styles from './styles.module.scss';

function ListExample() {
  const [list, loading, error, getPage] = useRequest({ request: getList, payload: { page: 1 } }, []);

  return (
    <div className="column center">
      <h1 className={`${styles.title} m-bottom-3 m-top-3`}>{i18next.t('ListExample:title')}</h1>
      {loading && i18next.t('ListExample:loading')}
      {error ? (
        i18next.t('ListExample:error')
      ) : (
        <>
          {list?.page?.map(item => (
            <div key={item} className={styles.item}>
              {item}
            </div>
          ))}
          <Paginator
            pageCount={list?.totalPages}
            onPageChange={currentPage => getPage({ page: currentPage.selected + 1 })}
          />
        </>
      )}
    </div>
  );
}

export default ListExample;
