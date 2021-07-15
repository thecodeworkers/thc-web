import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Legal from "../components/Legal/Legal";
import { privacidadText } from "../data/Legal/privacidad";

const PoliticaPrivacidadPage = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <NavBar routing={true} />
      <Legal bodyArray={privacidadText} bodyTitle={"Política de Privacidad"} />
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadPage;
