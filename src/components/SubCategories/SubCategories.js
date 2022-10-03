import Link from "next/link";
import styles from "./SubCategories.module.scss";

function SubCategories() {
  return (
    <aside className={styles.wrapper}>
      <Link href="/">
        <a className={styles.link}>Tshirts</a>
      </Link>
      <Link href="/">
        <a className={styles.link}>Jeans</a>
      </Link>
      <Link href="/">
        <a className={styles.link}>Kurta</a>
      </Link>
      <Link href="/">
        <a className={styles.link}>SweatShirts</a>
      </Link>
    </aside>
  );
}

export default SubCategories;
