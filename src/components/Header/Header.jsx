import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname();

  const linkTitle =
    pathname === "/" ? "Multiple currencies prices" : " < Bitcoin/USD";
  const linkPath = pathname === "/" ? "/multiple_coins" : "/";
  const title =
    pathname === "/" ? "Bitcoin / USD rate" : "Multiple currencies prices";

  return (
    <div className={styles.header}>
      <h4>{title}</h4>
      <Link href={linkPath}> {linkTitle} </Link>
    </div>
  );
};

export default Header;
