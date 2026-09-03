function Contact() {
  const contacts = [
    {
      title: "Lokasi",
      value: "Lowa, Kec. Comal, Kab. Pemalang, Jawa Tengah, Indonesia",
      link: "https://maps.app.goo.gl/N6UCNtfhrj7Xeffx8",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
    {
      title: "Email",
      value: "donidwisaputro39@gmail.com",
      link: "mailto:donidwisaputro39@gmail.com",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      title: "Telepon / WhatsApp",
      value: "081990776088",
      link: "https://wa.me/6281990776088",
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.78 2 2 0 0 1-.45 2.11L8.1 9.1a16 16 0 0 0 6.8 6.8l.49-.49a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.78.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-5 bg-transparent"
    >
      <div className="container">
        {/* Judul */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "620px" }}>
          <p className="text-primary fw-semibold mb-2">CONTACT</p>

          <h2 className="fw-bold text-dark mb-3">Kontak Saya</h2>

        </div>

        {/* Kartu kontak */}
        <div className="row g-4 justify-content-center">
          {contacts.map((contact) => (
            <div className="col-md-6 col-lg-4" key={contact.title}>
              <a
                href={contact.link}
                target={contact.title !== "Email" ? "_blank" : undefined}
                rel={
                  contact.title !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-decoration-none d-block h-100"
              >
                <div
                  className="card border-0 h-100 text-center p-4 p-lg-5"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 12px 30px rgba(31, 86, 160, 0.10)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 36px rgba(13, 110, 253, 0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(31, 86, 160, 0.10)";
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "18px",
                      color: "#0d6efd",
                      backgroundColor: "#e9f2ff",
                    }}
                  >
                    {contact.icon}
                  </div>

                  <h3 className="h5 fw-bold text-dark mb-2">
                    {contact.title}
                  </h3>

                  <p className="text-secondary mb-0">{contact.value}</p>

                  <span className="text-primary small fw-semibold mt-3">
                    Lihat detail →
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA email */}
        <div className="text-center mt-5">
          <a
            href="mailto:donidwisaputro39@gmail.com"
            className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
          >
            Kirim Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
