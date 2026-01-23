import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <img src="photos/soft_ocean_final.png" alt="Your Logo" className="nav-logo" />
        <a href="#home-page">Home</a>
        <a href="#about">About Us</a>
        <a href="#projects">Projects</a>
        <a href="#portfolio">Aims</a>
        <a href="#FOLLOW-ME">Contact</a>
      </div>
    </nav>
  );
}
