import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Link from "next/link";
import styles from "./MobileMenu.module.scss";
import { FiX } from "react-icons/fi";

function MobileMenu({ isOpen, onDismiss }) {
  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      className={styles.overlay}
    >
      <DialogContent className={styles.content} aria-label="Menu">
        <div className={styles.closeButton}>
          <FiX size={32} onClick={onDismiss} />
        </div>
        <div className={styles.spacer}></div>
        <nav className={styles.nav}>
          <Link href="/categories/apparel">
            <a>Apparel</a>
          </Link>

          <Link href="/categories/accessories">
            <a>Accessories</a>
          </Link>

          <Link href="/stores">
            <a>Stores</a>
          </Link>
        </nav>
        <footer className={styles.footer}>
          <Link href="#">
            <a>Terms and Conditions</a>
          </Link>

          <Link href="#">
            <a>Privacy Policy</a>
          </Link>

          <Link href="#">
            <a>Contact Us</a>
          </Link>
        </footer>
      </DialogContent>
    </DialogOverlay>
  );
}

export default MobileMenu;
