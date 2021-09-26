import Link from "next/link";

import styles from "./styles.module.scss"

export function Navigation() {
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

        <div className={styles.buttons}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}