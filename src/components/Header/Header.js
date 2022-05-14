import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>My Store</a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link href="/categories/apparel">
              <a>Apparel</a>
            </Link>
          </li>
          <li>
            <Link href="/categories/accessories">
              <a>Accessories</a>
            </Link>
          </li>
          <li>
            <Link href="/stores">
              <a>Find a Store</a>
            </Link>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button>
            <FaShoppingBag />
            {/* <span>
              $0.00
            </span> */}
          </button>
        </p>
        <ul className={styles.headerLocales}>
          <li>
            <Link href="#">
              <a>
                MS
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header;