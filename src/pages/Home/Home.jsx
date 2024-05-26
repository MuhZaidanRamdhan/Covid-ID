import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import FormCovid from "../../components/FormCovid/FormCovid";
import Global from "../../components/GlobalSection/Global";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Province from "../../components/Province/Province";
import data from "../../utils/constants/provinces";


function HomePage() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <div>
      <Navbar />
      <Hero />
      <Global />
      <Province provinces={provinces} setProvinces={setProvinces} />
      <FormCovid provinces={provinces} setProvinces={setProvinces} />
      <Footer />
    </div>
  );
}

export default HomePage;
