export default function About() {
  return (
    <section id="about">
      <div className="title-text">
        <p>Currently</p>
        <h5>What we do</h5>
      </div>

      <div className="about-row">
        <div className="about-col">
          <p>
            As an Information technology consultancy company, we involve
            providing expert advice and strategic guidance to businesses on how
            best to utilize IT resources to meet their objectives. This includes
            assessing a company's current IT infrastructure, identifying
            technology gaps, recommending solutions for enhancement, and
            assisting with the implementation of these technologies. Our goal is
            to improve efficiency, boost productivity, and enable companies to
            achieve greater technological agility and competitiveness.
          </p>
        </div>

        <div className="about-col">
          <p>
            Additionally, we do Specialised design activities which involve in
            creating specific aesthetic or functional designs tailored to meet
            the needs of different industries or individual clients. The services
            may range from conceptualizing and drafting designs to overseeing the
            implementation of these designs in production processes or digital
            environments. The objective of these specialized design activities is
            to enhance the visual appeal, usability, and marketability of media,
            contributing to their success in the marketplace.
          </p>
        </div>

        {/* Image column handled via CSS background-image */}
        <div className="about-col" />
      </div>
    </section>
  );
}
