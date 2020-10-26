import React, { lazy, Suspense, useState, useContext } from 'react';
import { Button } from '../blocks';
import { get } from '../utils/fetch';
import { GlobalContext } from '../providers/GlobalProvider';
import styles from './Landing.module.css';

const Main = lazy(() => import('../features/Main'));
const renderLoader = () => <p>Loading...</p>;

export function LandingPage(): React.ReactElement {
  const [isFetching, setIsFetching] = useState(false);
  const { setData } = useContext(GlobalContext);

  const handleClick = async (): Promise<void> => {
    try {
      setIsFetching(true);

      const res = await get('/abilities');

      setData(res.abilities);

      setIsFetching(false);
    } catch (err) {
      setIsFetching(false);
    }
  };

  return (
    <section className={styles.section}>
      <header className={styles.section}>
        <h1 className={styles.header}>Welcome</h1>
      </header>

      <Suspense fallback={renderLoader()}>
        <Main />
      </Suspense>

      <Button disabled={isFetching} type="button" text="click me" onClick={handleClick} />
    </section>
  );
}
