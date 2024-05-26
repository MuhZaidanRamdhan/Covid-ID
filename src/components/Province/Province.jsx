import data from "../../utils/constants/provinces";
import Table from "../Table/Table";
import styles from "./Province.module.css";
import { useState } from "react";

function Province({ provinces }) {


  return (
    <div className={styles.container}>
      <section className={styles.provinces}>
        <h1 className={styles.provinces__title}>Provinsi</h1>
        <h2 className={styles.provinces__subtitle}>
          Data Covid Berdasarkan Provinsi
        </h2>
        <div className={styles.province__data}>
          <table className={styles.province__table} border={1}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            {provinces.map((item, index) => {
              return (
                <Table
                  key={index}
                  no={index + 1}
                  kota={item.kota}
                  kasus={item.kasus}
                  sembuh={item.sembuh}
                  meninggal={item.meninggal}
                  dirawat={item.dirawat}
                />
              );
            })}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Province;
