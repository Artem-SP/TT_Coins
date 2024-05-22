"use client";

import React, { useEffect } from "react";
import styles from "./page.module.scss";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAll } from "../store/getAll";

export default function Home() {
  const dispatch = useAppDispatch();
  const { status, coins, timeUpdated } = useAppSelector((state) => {
    return state.coin;
  });

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const interval = () => {
    setInterval(async () => {
      dispatch(getAll());
    }, 600000);
  };

  useEffect(() => {
    interval();
    return clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      {status !== "resolved" ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.content}>
          <div className={styles.symbol}>$</div>
          <div className={styles.rate}>{coins.USD.rate}</div>
          <p className={styles.uploaded}>Updated at: {timeUpdated}</p>
        </div>
      )}
    </main>
  );
}
