import Link from "next/link";
import styles from "./Header.module.scss";
import SuperHeader from "@components/SuperHeader";
import { FiShoppingBag, FiSearch, FiMenu } from "react-icons/fi";
import MobileMenu from "@components/MobileMenu";
import React from "react";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <header className={styles.header}>
      <SuperHeader />
      <div className={styles.mainHeader}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a className={styles.logo}>My Store</a>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/categories/apparel">
            <a className={styles.navLink}>Apparel</a>
          </Link>

          <Link href="/categories/accessories">
            <a className={styles.navLink}>Accessories</a>
          </Link>

          <Link href="/stores">
            <a className={styles.navLink}>Stores</a>
          </Link>
        </nav>

        <div className={styles.mobileNav}>
          <FiShoppingBag size={32} />
          <FiSearch size={32} />
          <FiMenu
            size={32}
            onClick={() => setShowMenu((showMenu) => !showMenu)}
          />
        </div>

        <div className={styles.spacer}></div>
      </div>
      <MobileMenu isOpen={showMenu} onDismiss={() => setShowMenu(false)} />
    </header>
  );
};

export default Header;
