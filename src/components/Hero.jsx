import heroBg from "../assets/hero/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={heroBg}
        alt="Hero background"
        className="hero-image"
      />

      {/* Center scroll indicator (optional) */}
      <div className="hero-content">
        <span className="scroll-indicator">
          Scroll <br /> ↓
        </span>
      </div>

      {/* Bottom fade */}
      <div className="fade-bottom"></div>
    </section>
  );
}
