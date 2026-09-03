import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Certificates() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const certificates = [
    {
      id: 1,
      title: "Sertifikat Praktik Kerja Dinkominfo dan Bappeda Kota Pekalongan",
      issuer:
        "Dinas Komunikasi dan Informatika Kota Pekalongan dan Bappeda Kota Pekalongan",
      year: "2025",
      month: "Juli",
      pdf: "/certificate/Sertifikat Magang_Praktik Kerja Dinkominfo dan Bapperida Doni.pdf",
      image: "/certificate/Sertif Magang dinkominfo.png",
    },
    {
      id: 2,
      title: "CCNA Introduction to Networks",
      issuer: "Cisco Networking Academy",
      year: "2023",
      month: "Agustus",
      image: "/certificate/sertif-ccna.png",
      pdf: "/certificate/Sertifikat CCNA_DoniDS.pdf",
    },
    {
      id: 3,
      title: "Sertifikat Kompetensi Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      year: "2025",
      month: "Januari",
      image: "/certificate/dicoding pemrograman web.png",
      pdf: "/certificate/sertifikat_course_123_4081557_280826022401.pdf",
    },
    {
      id: 4,
      title: "Sertifikasi Kompetensi TKJ KKNI Level 2",
      issuer: "BNSP",
      year: "2022",
      image: "/certificate/kkni-tkj.jpg",
      pdf: "/certificate/Sertifikat_KKNI LEVEL II TKJ_DONI.pdf",
    },
  ];

  // Hanya tiga sertifikat pertama yang muncul di halaman utama
  const featuredCertificates = certificates.slice(0, 3);

  // Ganti dengan URL LinkedIn asli Anda
  const linkedinUrl = "https://www.linkedin.com/in/doni-dwi-saputro-a8812942b/";

  const openPdf = (pdf, title) => {
    setSelectedPdf(pdf);
    setSelectedTitle(title);
  };

  const closePdf = () => {
    setSelectedPdf(null);
    setSelectedTitle("");
  };

  return (
    <section id="certificates" className="py-4 section-gray">
      <div className="container">
        {/* Judul */}
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold mb-2">CERTIFICATES</p>
          <h2 className="fw-bold">Sertifikat</h2>
        </div>

        {/* Certificate Cards */}
        <div className="row g-4 justify-content-center">
          {featuredCertificates.map((certificate) => (
            <div
              className="col-sm-10 col-md-6 col-lg-4 d-flex"
              key={certificate.id}
            >
              <div className="card h-100 w-100 border-0 shadow-sm overflow-hidden">
                {/* Gambar Sertifikat */}
                <div
                  style={{
                    aspectRatio: "4 / 3",
                    overflow: "hidden",
                    backgroundColor: "#f1f1f1",
                  }}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h3 className="h6 fw-bold mb-1">{certificate.title}</h3>

                  <p className="text-secondary mb-1 small">
                    {certificate.issuer}
                  </p>

                  <small className="text-secondary mb-1 small">
                    {certificate.month} {certificate.year}
                  </small>

                  {/* Membuka PDF di modal, bukan tab baru */}
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-auto"
                    onClick={() => openPdf(certificate.pdf, certificate.title)}
                  >
                    Lihat PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol LinkedIn */}
        <div className="text-center mt-2 pb-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm px-3 py-2 rounded-pill d-inline-flex align-items-center gap-2"
          >
            <FontAwesomeIcon icon={faLinkedin} /> Lihat Semua Sertifikat di LinkedIn
          </a>
        </div>
      </div>

      {/* PDF Modal / Overlay */}
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
    </section>
  );
}

export default Certificates;
