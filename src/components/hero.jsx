import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const cv = {
    title: "Curriculum Vitae Doni Dwi Saputro",
    pdf: "/cv/CV_Doni-Dwi-Saputro.pdf",
  };

  const openPdf = (pdf, title) => {
    setSelectedPdf(pdf);
    setSelectedTitle(title);
  };

  const closePdf = () => {
    setSelectedPdf(null);
    setSelectedTitle("");
  };

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section
        id="home"
        className="section-blue d-flex align-items-center"
        style={{
          minHeight: "calc(100vh - 66px)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* Text */}
            <div className="col-lg-7 text-center text-lg-start">

              <p className="text-primary fw-semibold mb-2">
                HELLO, I'M
              </p>

              <h1 className="display-3 fw-bold mb-3">
                Doni Dwi Saputro
              </h1>

              <h2 className="h3 text-secondary mb-3">
                Fresh Graduate Teknik Informatika
              </h2>

              <p className="lead text-secondary mb-4">
                Memiliki ketertarikan pada Web Development,
                IT Support, Networking, dan Database.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">

                <button
                  type="button"
                  className="btn btn-outline-primary px-4"
                  onClick={() => openPdf(cv.pdf, cv.title)}
                >
                  Lihat CV/Download PDF
                </button>

                <a
                  href="https://github.com/DoniMax99"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark px-4"
                >
                  <FontAwesomeIcon icon={faGithub} className="me-1" />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/doni-dwi-saputro-a8812942b/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark px-4"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="me-1" />
                  LinkedIn
                </a>

              </div>
            </div>

            {/* Profile Image */}
            <div className="col-lg-5 text-center mt-5 mt-lg-0">

              <img
                src="/img/myfoto.jpg"
                alt="Doni Dwi Saputro"
                className="img-fluid rounded-3 shadow"
                style={{
                  width: "200px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          PDF MODAL
      ========================== */}
      {selectedPdf && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          }}
          onClick={closePdf}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${selectedTitle}`}
        >
          <div
            className="bg-white rounded-4 shadow overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "1100px",
              height: "90vh",
            }}
            onClick={(event) => event.stopPropagation()}
          >

            {/* Header Modal */}
            <div className="d-flex align-items-center justify-content-between gap-3 p-3 border-bottom">

              <h3 className="h6 fw-bold mb-0 text-truncate">
                {selectedTitle}
              </h3>

              <button
                type="button"
                className="btn-close flex-shrink-0"
                aria-label="Tutup PDF"
                onClick={closePdf}
              />

            </div>

            {/* PDF Viewer */}
            <iframe
              src={selectedPdf}
              title={selectedTitle}
              className="w-100"
              style={{
                height: "calc(90vh - 65px)",
                border: "none",
              }}
            />

          </div>
        </div>
      )}
    </>
  );
}

export default Hero;