/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GlobalStyle } from "./components/globalStyles";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}

export default App;
