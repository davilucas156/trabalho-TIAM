import styles from './Footer.module.css';

export default function Footer() {
  return (
<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div className={styles.column}>
      <p>Loremi dolorist ametconsectetur</p>
      <p>adipiscing Vivamus</p>
      <p>odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
      <p>odio vitae adipiscing</p>
    </div>
    {[...Array(3)].map((_, index) => (
      <div key={index} className={styles.column}>
        <p><strong>Loremi</strong></p>
        <p>dolorist</p>
        <p>ametconsectetur</p>
        <p>adipiscing</p>
        <p>Vivamus</p>
      </div>
    ))}
  </div>
</footer>

  );
}
