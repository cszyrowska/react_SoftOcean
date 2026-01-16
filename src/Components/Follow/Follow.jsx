export default function Follow() {
  return (
    <section id="FOLLOW-ME">
      <div className="title-text">
        <p>Get in touch</p>
        <h5>Contact</h5>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/company/softoceanltd/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="social-icon"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.facebook.com/SoftOceanLtd"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="social-icon"
        >
          <i className="fa-brands fa-facebook-square"></i>
        </a>
      </div>

      {/* Optional: add a simple email line (remove if you don't want it) */}
      <p style={{ color: "white", marginTop: "30px", fontSize: "18px" }}>
        Email: <a href="mailto:info@softocean.ltd" style={{ color: "#d4d0d0" }}>info@softocean.ltd</a>
      </p>
    </section>
  );
}
