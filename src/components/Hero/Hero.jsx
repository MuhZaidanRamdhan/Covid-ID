import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__subtitle}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            assumenda ab quae non nihil a recusandae cum nobis corrupti. Esse
            qui dignissimos vel, recusandae rem ipsum quo alias dolor officiis
            iusto sit quaerat ratione ut in excepturi nesciunt officia assumenda
            laudantium cumque est architecto dicta ullam suscipit corporis.
            Libero veritatis harum quia accusantium possimus natus culpa in,
            nulla ex praesentium mollitia voluptatem similique facilis
            laboriosam aliquid, cum doloremque ipsum iste.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <div>
            <img
              className={styles.hero__image}
              src="../src/assets/covid.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
