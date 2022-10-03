import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

function Breadcrumbs({ children }) {
  return <nav className={styles.wrapper}>{children}</nav>;
}

function Crumb({ href, children, ...delegated }) {
  return (
    <Link href={href} {...delegated}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
}

Breadcrumbs.Crumb = Crumb;

export default Breadcrumbs;
