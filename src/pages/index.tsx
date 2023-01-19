import React from "react";
import About from "@components/about";
import Past from "@components/past";
import Header from "@components/header";
import Ideas from "@components/ideas";
import Design from "@components/design";
import p5Types from "p5";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

const BgSketch = () => {
  let x = 50,
    W;
  const y = 50;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noSmooth();
    W = p5.width;
  };

  const draw = (p5: p5Types) => {
    const m = 100;
    const topR = 255 * p5.noise(p5.frameCount / m);
    const topG = 255 * p5.noise(1000 + p5.frameCount / m);
    const topB = 255 * p5.noise(2000 + p5.frameCount / m);
    const bottomR = 255 * p5.noise(3000 + p5.frameCount / m);
    const bottomG = 255 * p5.noise(4000 + p5.frameCount / m);
    const bottomB = 255 * p5.noise(5000 + p5.frameCount / m);

    const topColor = p5.color(topR, topG, topB);
    const bottomColor = p5.color(bottomR, bottomG, bottomB);

    for (let y = 0; y < p5.height; y++) {
      const lineColor = p5.lerpColor(topColor, bottomColor, y / p5.height);

      p5.stroke(lineColor);
      p5.line(0, y, p5.width, y);
    }
  };

  const windowResized = function (p5: p5Types) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    W = p5.width;
  };

  return (
    <div className="sketch-container">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="page">
        <BgSketch />
        <section className="min-h-screen">
          <div className="wrapper mx-auto mb-20 px-3 text-stone-600">
            <Header />
            <About />
            <Past />
            <Ideas />
            <Design />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
