import React from "react";
import styles from "./SearchInput.module.scss";
import { FiSearch } from "react-icons/fi";

function SearchInput() {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search..." />
      <div className={styles.icon}>
        <FiSearch size={16} />
      </div>
    </div>
  );
}

export default SearchInput;
