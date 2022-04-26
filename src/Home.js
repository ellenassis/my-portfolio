import React, { useState, useEffect } from "react";
import "./styles/global.scss";
import SyncLoader from "react-spinners/SyncLoader";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
    {loading ? ( // tela de carregamento
        <span className="spinner">
          <SyncLoader size={30} color={"#ed217c"} loading={loading} />
        </span>
      ) : (
      <>
      <Header />
      <Hero />
      <About />
      <Works />
      <Contact />
      <footer>
        <p>&copy; 2022 | Ellen Penteado de Assis</p>
      </footer>
      </>
      )}
    </div>
  );
}

export default Home;
