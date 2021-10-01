import { useState } from "react";
import Link from "next/link";
import { ContactModal } from "../ContactModal";

import styles from "./styles.module.scss"

export function Navigation() {
  const [isOpenContact, setIsOpenContact] = useState(false);

  function handleOpenCloseContact() {
    setIsOpenContact(!isOpenContact);
  }

  return (
    <div className={styles.navigation}>
      <Link href="/">
        <h1>
          Rockr Blog
        </h1>
      </Link>
      <nav>
        <Link href="/">
          <div className={styles.buttons}>
            <a>Posts</a>
          </div>
        </Link>

        <Link href="/">
          <div className={styles.buttons} onClick={handleOpenCloseContact}>
            <a>Contact</a>
          </div>
        </Link>
        <Link href="/NewPost">
          <div className={styles.newPost} >
            <a>New Post</a>
          </div>
        </Link>
      </nav>
      <ContactModal
        isOpenContact={isOpenContact}
        onRequestClose={handleOpenCloseContact}
      />
    </div>
  )
}