import { useEffect, useRef } from "react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Portfolio from "../Portfolio/Portfolio";
import Follow from "../Follow/Follow";
import "./Homepage.css";

export default function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Wave canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId = 0;

    const wave = {
      y: window.innerHeight * 0.8,
      length: 0.01,
      amplitude: 100,
      frequency: 0.01,
    };

    let increment = wave.frequency;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      wave.y = canvas.height * 0.8;
    };

    const handleMouseMove = (e) => {
      const relativeYPosition = e.clientY / window.innerHeight;
      wave.amplitude = relativeYPosition * 100 + 50;
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(0, wave.y);

      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(
          i,
          wave.y +
            Math.sin(i * wave.length + increment) *
              wave.amplitude *
              Math.sin(increment)
        );
      }

      ctx.strokeStyle = "rgb(212, 212, 212)";
      ctx.lineWidth = 3;
      ctx.stroke();

      increment += wave.frequency;
    };

    // Interactive images click (go to html pages)
    const onDocClick = (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;

      if (target.classList.contains("interactive-image")) {
        const url = target.getAttribute("data-url");
        if (url) window.location.href = url;
      }
    };

    resize();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);
    document.addEventListener("click", onDocClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", onDocClick);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home-page" className="home-page">
        <div className="banner-text">
          <h1>SoftOcean Ltd</h1>
        </div>

        <div className="banner-logo">
          <img src="/photos/soft_ocean_final.png" alt="logo" />
        </div>

        <canvas ref={canvasRef} id="waveCanvas" />
      </section>

      {/* SECTIONS */}
      <About />
      <Projects />
      <Portfolio />
      <Follow />
    </>
  );
}
