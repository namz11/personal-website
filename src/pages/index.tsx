import React from "react";
import About from "@components/about";
import Past from "@components/past";
import Header from "@components/header";
import Ideas from "@components/ideas";
import Design from "@components/design";

const Home = () => {
  const abc = "";

  return (
    <>
      <section className="min-h-screen bg-amber-50 page">
        <div className="wrapper mx-auto h-full mb-20 text-stone-500">
          <Header />
          <About />
          <Past />
          <Ideas />
          <Design />
        </div>
      </section>
    </>
  );
};

export default Home;
