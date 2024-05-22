"use client";

import React, { useEffect } from "react";
import Image from "next/image";
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

  console.log(coins);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          {status !== "resolved" ? (
            <div>Loading...</div>
          ) : (
            <div>
              <div>{coins.USD.rate}</div>
              <div>&#65284;</div>
              <p>Updated at: {timeUpdated}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
