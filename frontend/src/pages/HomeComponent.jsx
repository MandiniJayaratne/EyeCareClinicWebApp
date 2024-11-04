import { useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./HomeComponent.css";

const HomeComponent = () => {
  const whyUsRef = useRef(null);

  const scrollToWhyUs = () => {
    whyUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      ></link>

      <section id="hero" className="d-flex align-items-center ">
        <div className="container">
          <h1>Welcome to Eye Site</h1>
          <h2>Where your vision finds calrity and style</h2>
          <button className="btn-get-started" onClick={scrollToWhyUs}>
            Get Started
          </button>
        </div>
      </section>

      <main id="main">
        {/* why us */}

        <section id="why-us" ref={whyUsRef}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="content mt-10">
                  <h3 className="font-bold">Why Choose Eye-Site?</h3>
                  <p>
                    Eye-Site Opticals for personalized eye care backed by
                    expertise and innovation. With cutting-edge technology and a
                    dedicated team, were committed to enhancing your vision and
                    providing unmatched service. Choose clarity, choose Eye-Site
                    Opticals.
                  </p>
                  <div className="text-center"></div>
                  <button className="more-btn">Learn More</button>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="icon-boxes">
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="icon-box border border-solid border-grey-800">
                        <i className="fas fa-check-circle"></i>
                        <h4>Commitment to Excellence</h4>
                        <p>
                          We prioritize precision, quality, and continuous
                          improvement to deliver unparalleled service and
                          results.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="icon-box border border-solid border-grey-800">
                        <i className="fas fa-check-circle"></i>
                        <h4>Professional service</h4>
                        <p>
                          {" "}
                          Our team of experts is dedicated to providing
                          attentive and knowledgeable assistance at your eye
                          care journey.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="icon-box border border-solid border-grey-800">
                        <i className="fas fa-check-circle"></i>
                        <h4>Epitome of Quality</h4>
                        <p>
                          Only the finest materials and advanced technologies to
                          enhances your vision but also reflects your unique
                          style and personality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* About */}

      <main id="main">
        <section id="about-us">
          <div className="container">
            <div className="row">
              {/* Left Container */}
              <div className="col-lg-6">
                <img
                  src="src/assets/store-front.jpg"
                  alt="Image Description"
                  className="img-fluid mb-10"
                />
              </div>
              {/* Right Container */}
              <div className="col-lg-6">
                <div className="content">
                  <h3>About Us</h3>
                  <p>
                    Empowering vision for a brighter tomorrow, Eye-Site Opticals
                    is your trusted partner in exceptional eye care.
                  </p>
                  {/* List of Points */}
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i> Precision-focused
                      eye care solutions tailored to your needs.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Dedicated team
                      delivering expert care and attention to detail.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Comprehensive
                      services ranging from exams to advanced vision correction.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Personalized
                      approach prioritizing your eye health and overall
                      well-being
                    </li>
                  </ul>
                  <div className="text-center">\</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <iframe
          title="Eye Site Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21384.473738743014!2d79.86685294171843!3d6.837373978697427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ae7c4420c03%3A0xdfa66e19dcb89743!2sEye%20Site!5e0!3m2!1sen!2slk!4v1715587136918!5m2!1sen!2slk"
          width="1479"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
      <Footer />
    </div>
  );
};

export default HomeComponent;
