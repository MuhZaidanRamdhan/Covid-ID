import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footer__left}>
          <h1>
            COVID ID
          </h1>
          <h2>
            Developed by mzaidanrmdhan
          </h2>
        </div>
        <div className={styles.footer__right}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>about</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
