// import { useState } from "react";
import ConsultationsFormComponent from "../pages/consultations/CreateConsultation";
import InquiriesFormComponent from "../pages/inquiries/CreateInquiry";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const OurServicesComponent = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* Section 1 */}
      <Navbar />
      <div className="section section1 flex">
        {/* Left Half */}
        <div className="left-half flex justify-center items-center flex-1">
          <img
            src="src/assets/sunglass-image.jpg"
            alt="Description of your image"
            className="w-full h-full"
          />
        </div>
        {/* Right Half */}
        <div className="right-half flex flex-1 bg-gray-500 text-white p-4 flex justify-center items-center">
          <p className="text-3xl text-center text-bold">
            At Eye Site, we pride ourselves on providing
            eyewear services tailored to your needs. Our expert team offers
            precise eye examinations, personalized frame fittings, and lens
            customization to ensure you find the perfect pair of spectacles.
            With a focus on both vision correction and style, we are dedicated
            to delivering exceptional service and quality eyewear solutions.
            Eye Site, center of excellence.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section section2 flex">
        {/* Left Side */}
        <div className="w-1/2 bg-gray-800 p-8 text-white flex justify-center items-center">
          <div>
            <h2 className="text-4xl mb-4">BOOK A CONSULTATION TODAY!</h2>
            <p className="text-xl">
              Fill out the form here to schedule a consultation with us.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-gray-400">
          <ConsultationsFormComponent />
        </div>
      </div>

      {/* Section 3 */}
      {/* ----------------------------------------------------------------------------------------Section 3---------------------------------------------------------------------------------------------------------------- */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <div
        className="section section3"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          className="small-container"
          style={{
            width: "90%",
            maxWidth: "1450px",
            height: "50%",
            maxHeight: "600px",
            borderRadius: "10px",
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "#fff",
            textAlign: "center",
            backgroundImage: 'url("src/assets/eye_doctor.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="col-lg-8"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="icon-boxes"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="icon-box"
                style={{
                  marginRight: "100px",
                  marginTop: "270px",
                  textAlign: "center",
                  borderRadius: "10px",
                  background: "#fff",
                  boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.1)",
                  padding: "1rem 1rem",
                  outline: "2px solid transparent",
                  outlineColor: "#B91C1B",
                  width: "14rem",
                  height: "20rem",
                  overflow: "visible",
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{
                    fontSize: "40px",
                    color: "#1C2735",
                    marginBottom: "20px",
                  }}
                ></i>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  You are our priority!
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#2c4964",
                    lineHeight: "1.6",
                  }}
                >
                  We value our customers and their feedback immensely. Your
                  satisfaction is our top priority.
                </p>
              </div>
              <div
                className="icon-box"
                style={{
                  marginRight: "100px",
                  marginTop: "270px",
                  textAlign: "center",
                  borderRadius: "10px",
                  background: "#fff",
                  boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.1)",
                  padding: "1rem 1rem",
                  outline: "2px solid transparent",
                  outlineColor: "#B91C1B",
                  width: "14rem",
                  height: "20rem",
                  overflow: "visible",
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{
                    fontSize: "40px",
                    color: "#1C2735",
                    marginBottom: "20px",
                  }}
                ></i>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Need assistance?
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#2c4964",
                    lineHeight: "1.6",
                  }}
                >
                  Have questions or need assistance? Our team is here to help!
                  Reach out to us for inquiries about our services, products, or
                  any eyecare services.
                </p>
              </div>
              <div
                className="icon-box"
                style={{
                  marginTop: "270px",
                  textAlign: "center",
                  borderRadius: "10px",
                  background: "#fff",
                  boxShadow: "10px 15px 40px rgba(0, 0, 0, 0.1)",
                  padding: "1rem 1rem",
                  outline: "2px solid transparent",
                  outlineColor: "#B91C1B",
                  width: "14rem",
                  height: "20rem",
                  overflow: "visible",
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{
                    fontSize: "40px",
                    color: "#1C2735",
                    marginBottom: "20px",
                  }}
                ></i>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  Your opinions are valid!
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#2c4964",
                    lineHeight: "1.6",
                  }}
                >
                  Feedback is essential for us to continuously improve our
                  services and ensure your satisfaction. We value your opinions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------end of section 3----------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* Section 4 */}
      <div className="section section2 flex">
        {/* Left Side */}
        <div className="w-1/2 bg-gray-800">
          <InquiriesFormComponent />
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-gray-500 p-8 text-white flex justify-center items-center">
          <div>
            <h2 className="text-4xl mb-4">Got a Business? Inquire our Rates Today or Give us a feedback!</h2>
            <p className="text-xl">
              Fill out the form here to Inquire or give a feedback.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OurServicesComponent;
