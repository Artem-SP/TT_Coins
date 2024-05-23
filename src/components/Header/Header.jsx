import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <h4>{title}</h4>

      {pathname === "/" ? (
        <Link href={linkPath}> Multiple currencies prices </Link>
      ) : (
        <Link href={linkPath}> &#767; Bitcoin/USD </Link>
      )}
    </div>
  );
};

export default Header;
