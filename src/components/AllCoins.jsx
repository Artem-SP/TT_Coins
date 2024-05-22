"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAll } from "../store/getAll";

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
      console.log(status);
    }, 600000);
  };

  useEffect(() => {
    interval();
    return clearInterval(interval);
  }, []);

  return (
    <>
      {status !== "resolved" ? (
        <div>Loading...</div>
      ) : (
        <div>
          <table>
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
          <p>Updated at: {timeUpdated}</p>
        </div>
      )}
    </>
  );
};

export default MultipleCoins;
