export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Past achievements</h2>

          <div className="projects-grid">
            <div className="project-item">
              <img
                src="photos/Screenshot 2024-05-29 124455.png"
                alt="Project 1"
                className="project-img"
              />
              <div className="project-info">
                <h3>EMI Creation</h3>
                <p>
                  Creation of a portable electromagnetic induction (EMI)
                  instrument for subsurface investigation, possibly for locating
                  underground utilities, archaeological features, or environmental
                  assessment.
                </p>
                <a href="#project1-gallery" className="project-link">
                  See gallery
                </a>
              </div>
            </div>

            <div className="project-item">
              <img
                src="photos/ToneKP_2_1_zoom.png"
                alt="Project 2"
                className="project-img"
              />
              <div className="project-info">
                <h3>Sylt Data Analysis</h3>
                <p>
                  This involves the examination of electromagnetic signals
                  collected using electrode pairs to assess the condition or
                  integrity of an underground cable.
                </p>
                <a href="#project2-gallery" className="project-link">
                  See gallery
                </a>
              </div>
            </div>

            <div className="project-item">
              <img
                src="photos/2024-05-13_19-33.png"
                alt="Project 3"
                className="project-img"
              />
              <div className="project-info">
                <h3>Geophysical surveys</h3>
                <p>
                  Geophysical surveys aim to understand the geological and
                  hydrological properties of the surveyed area without invasive
                  digging or drilling.
                </p>
                <a href="#project3-gallery" className="project-link">
                  See gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 1 Gallery */}
      <section id="project1-gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>EMI Creation</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="photos/Screenshot 2024-05-29 124417.png" alt="EMI 1" />
              <p className="image-caption">electromagnetic induction (EMI) instrument</p>
            </div>
            <div className="gallery-item">
              <img src="photos/Screenshot 2024-05-29 124443.png" alt="EMI 2" />
              <p className="image-caption">electromagnetic induction (EMI) instrument</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 Gallery */}
      <section id="project2-gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>Sylt Data Analysis Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="photos/singleLineData.png" alt="Sylt 1" />
              <p className="image-caption">a single line and more clearly visible anomaly</p>
            </div>
            <div className="gallery-item">
              <img src="photos/image.png" alt="Sylt 2" />
              <p className="image-caption">
                all covered paths and collected amplitudes value across the survey
              </p>
            </div>
            <div className="gallery-item">
              <img src="photos/ToneKP_2_1_zoom.png" alt="Sylt 3" />
              <p className="image-caption">
                Following the cable path with an SCT sensors show a distinct drop in the signal.
                Usually, such drops indicate cable’s shunt fault.
              </p>
            </div>
            <div className="gallery-item">
              <img src="photos/2024-05-13_19-54.png" alt="Sylt 4" />
              <p className="image-caption">
                This shows the crossing line around the assumed leakage. It can be observed that the
                amplitude rises where the boat crosses the cable path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project 3 Gallery */}
      <section id="project3-gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>Geophysical surveys</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="photos/2024-05-13_19-35.png"
                alt="Geo 1"
                className="interactive-image"
                data-url="/GeomaresSylt.html"
              />
              <p className="image-caption">Click image to interact</p>
            </div>
            <div className="gallery-item">
              <img
                src="photos/2024-05-13_19-36.png"
                alt="Geo 2"
                className="interactive-image"
                data-url="/vis_path_amp.html"
              />
              <p className="image-caption">Click image to interact</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
