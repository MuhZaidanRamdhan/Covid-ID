import styles from "./Card.module.css";

function Card(props) {
  const {title, result,} = props;
  return (
    <>
      <div className={styles.global__card}>
        <h1 className={styles.global__title}>{title}</h1>
        <h1 className={styles.global__subtitle}>{result}</h1>
      </div>
    </>
  );
}

export default Card;
