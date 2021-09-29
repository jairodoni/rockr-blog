import styles from './styles.module.scss'

export function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.lds_ellipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}