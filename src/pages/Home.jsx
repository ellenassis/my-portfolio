import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';

import "../styles/global.scss";

function Home() {
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {loading ? ( 
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
            <p>&copy; { year } | Ellen Penteado de Assis</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default Home;
