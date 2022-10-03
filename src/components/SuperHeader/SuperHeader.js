import SearchInput from "@components/SearchInput";
import styles from "./SuperHeader.module.scss";
import { FiShoppingBag } from "react-icons/fi";

function SuperHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>Free shipping on orders above Rs.500</div>
      <SearchInput />
      <div className={styles.cartIcon}>
        <FiShoppingBag size={16} />
      </div>
    </div>
  );
}

export default SuperHeader;
