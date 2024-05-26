import styles from "./FormCovid.module.css";
import data from "../../utils/constants/provinces";
import { useState } from "react";
function FormCovid(props) {
  const { provinces, setProvinces } = props;

  const [isSelectError, setIsSelectError] = useState(false);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [updateData, setUpdateData] = useState({
    kasus: 0,
    sembuh: 0,
    meninggal: 0,
    dirawat: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData({ ...updateData, [name]: Number(value) });
  };

  const handleSelectProvince = (event) => {
    setSelectedProvince(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (selectedProvince == "") {
      setIsSelectError(true);
    } else {
      const updatedProvinces = provinces.map((province) => {
        if (province.kota === selectedProvince) {
          return { ...province, ...updateData };
        }
        return province;
      });

      setProvinces(updatedProvinces);
      setSelectedProvince("");
      setUpdateData({ kasus: 0, sembuh: 0, meninggal: 0, dirawat: 0 });
      setIsSelectError(false)
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.covids}>
        <div className={styles.covid__left}>
          <img
            className={styles.covid__image}
            src="https://i.pinimg.com/originals/d2/76/fd/d276fd88e7bf2514fc3eb96ee88aa4a7.gif"
            alt=""
          />
        </div>
        <div className={styles.covid__right}>
          <h1>Form Covid</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="provinsi" className={styles.form__title}>
              Provinsi
            </label>
            <select
              name=""
              id="provinsi"
              onChange={handleSelectProvince}
              className={styles.form__select}
            >
              <option value="" selected>
                ---Pilih Provinsi---
              </option>
              {provinces.map((province) => (
                <option key={province.kota} value={province.kota}>
                  {province.kota}
                </option>
              ))}
            </select>
            {isSelectError ? <p className={styles.error}>Provinsi wajib dipilih!</p> : ""}
            <label htmlFor="kasus" className={styles.form__title}>
              kasus
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="kasus"
              value= {updateData.kasus === 0 ? '' : updateData.kasus}
              className={styles.form__status}
            />
            <label htmlFor="sembuh" className={styles.form__title}>
              Sembuh
            </label>
            <input
              onChange={handleChange}
              type="number"
              id="sembuh"
              name="sembuh"
              value={updateData.sembuh === 0 ? "" : updateData.sembuh}
              className={styles.form__status}
            />
            <label htmlFor="meninggal" className={styles.form__title}>
              meninggal
            </label>
            <input
              onChange={handleChange}
              type="number"
              id="meninggal"
              name="meninggal"
              value={updateData.meninggal === 0 ? "" : updateData.meninggal}
              className={styles.form__status}
            />
            <label htmlFor="dirawat" className={styles.form__title}>
              dirawat
            </label>
            <input
              onChange={handleChange}
              type="number"
              id="dirawat"
              name="dirawat"
              value={updateData.dirawat === 0 ? "" : updateData.dirawat}
              className={styles.form__status}
            />
            <button className={styles.form__submit}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormCovid;
