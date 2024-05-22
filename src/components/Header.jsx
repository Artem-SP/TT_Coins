import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  const linkTitle = pathname === "/" ? "Multiple currencies prices" : "Home";
  const linkPath = pathname === "/" ? "/multiple_coins" : "/";
  const title =
    pathname === "/" ? "Bitcoin / USD rate" : "Multiple currencies prices";

  return (
    <div>
      <h4>{title}</h4>
      <Link href={linkPath}> {linkTitle} </Link>
    </div>
  );
};

export default Header;
