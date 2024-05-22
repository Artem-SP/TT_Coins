"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Header from "../components/Header/Header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>"Coins price"</title>
      </head>
      <body className={inter.className}>
        <Header />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
