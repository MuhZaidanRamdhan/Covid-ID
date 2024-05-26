import Card from "../Card/Card";
import styles from "./Global.module.css";

import data from "../../utils/constants/indonesia";

function Global() {
  const { indonesia } = data;
  
  return (
    <div className={styles.container}>
      <section className={styles.globals}>
        <h1 className={styles.globals__title}>Indonesia</h1>
        <h2 className={styles.globals__subtitle}>
          Data Covid Berdasarkan Indonesia
        </h2>
        <div className={styles.global__data}>
          {indonesia.map((item) => {
            return (
              <Card
                style={item.status}
                key={item.status}
                title={item.status}
                result={item.total.toLocaleString("id-ID")}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Global;
