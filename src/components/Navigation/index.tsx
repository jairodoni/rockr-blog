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
      <h1>
        Rockr Blog
      </h1>
      <nav>
        <div className={styles.buttons}>
          <Link href="/">
            <a>Posts</a>
          </Link>
        </div>

        <div className={styles.buttons} onClick={handleOpenCloseContact}>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </div>
        <div className={styles.newPost} >
          <Link href="/NewPost">
            <a>New Post</a>
          </Link>
        </div>
      </nav>
      <ContactModal
        isOpenContact={isOpenContact}
        onRequestClose={handleOpenCloseContact}
      />
    </div>
  )
}