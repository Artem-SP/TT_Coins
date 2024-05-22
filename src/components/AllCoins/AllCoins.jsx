"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAll } from "../../store/getAll";

import styles from "./AllCoins.module.scss";

const MultipleCoins = () => {
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
    <>
      {status !== "resolved" ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Currensy</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(coins).map((item) => (
                <tr key={item.code}>
                  <td>{item.code}</td>
                  <td>{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.uploaded}>Updated at: {timeUpdated}</p>
        </div>
      )}
    </>
  );
};

export default MultipleCoins;
