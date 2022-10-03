import Link from "next/link";
import styles from "./Header.module.scss";
import SuperHeader from "@components/SuperHeader";

const Header = () => {
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

        <div className={styles.spacer}></div>
      </div>
    </header>
  );
};

export default Header;
