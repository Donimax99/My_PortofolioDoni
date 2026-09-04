function Experience() {
  const experiences = [
    {
      id: 1,
      position: "Web Developer / IT Intern",
      company: "Dinas Komunikasi dan Informatika",
      period: "Maret 2025 – Juli 2025",
      description:
        "Mengembangkan sistem informasi untuk membantu proses pengelolaan kegiatan magang secara lebih terintegrasi.",
      responsibilities: [
        "Merancang dan Mengembangkan Sistem Informasi Manajemen Magang (SIMEGA) dari tahap analisis kebutuhan hingga deploymnet ke server internal menggunakan aaPanel.",
        "Menyusun dokumentasi panduan pengguna seperti manual book yang berhasil membawa aplikasi SIMEGA secara resmi diadopsi oleh Dinkominfo Kota Pekalongan sebagai Teknologi Tepat Guna (TTG) dan launching di bulan Agustus 2025.",
        "Membantu dalam pembuatan dokumen inovasi untuk bapperida kota pekalongan dari inovasi Diskominfo kota pekalongan yaitu Kuda Mantan dalam Innovative Government Award (IGA) 2025"
      ],
      technologies: [
        "CodeIgniter 4",
        "PHP",
        "MySQL",
        "Bootstrap",
        "JavaScript"
      ]
    }
  ];

  return (
    <section id="experience" className="py-4 section-blue">
      <div className="container">

        {/* Judul */}
        <div className="text-center mb-3">
          <p className="text-primary fw-semibold mb-2 small">
            EXPERIENCE
          </p>

          <h2 className="fw-bold mb-3">
            Pengalaman
          </h2>

          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: "600px" }}>
            Pengalaman yang saya peroleh selama kegiatan magang
            dan pengembangan sistem informasi.
          </p>
        </div>

        {/* Experience */}
        <div className="row justify-content-center">

          {experiences.map((experience) => (
            <div
              className="col-lg-9"
              key={experience.id}
            >
              <div className="card experience-card border-0 shadow-sm">

                <div className="card-body p-4 p-lg-4">

                  {/* Header */}
                  <div className="experience-header mb-4">

                    <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                      {experience.period}
                    </span>

                    <h3 className="h5 fw-bold mb-1">
                      {experience.position}
                    </h3>

                    <h4 className="h6 text-secondary mb-0">
                      {experience.company}
                    </h4>

                  </div>

                  {/* Description */}
                  <p className="text-secondary small lh-lg mb-4">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-4">

                    <h5 className="h6 fw-bold mb-3">
                      Tanggung Jawab & Pekerjaan
                    </h5>

                    <ul className="experience-list text-secondary small mb-0">
                      {experience.responsibilities.map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Technologies */}
                  <div>

                    <h5 className="h6 fw-bold mb-2">
                      Teknologi yang Digunakan
                    </h5>

                    <div className="d-flex flex-wrap gap-1">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="experience-tech"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
