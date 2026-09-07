function Education() {
  return (
    <section id="education" className="py-5 section-blue">
      <div className="container">

        {/* Judul */}
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold mb-2 small">
            EDUCATION
          </p>

          <h2 className="fw-bold mb-3">
            Pendidikan
          </h2>

          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: "600px" }}>
            Riwayat Pendidikan 
          </p>
        </div>

        {/* Timeline */}
        <div className="education-timeline">

          {/* Pendidikan S1 */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="card education-card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-4">

                <div className="row align-items-center">

                  {/* Informasi */}
                  <div className="col-md-8">

                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge bg-primary-subtle text-primary px-3 py-2">
                        2022 – 2026
                      </span>

                      <span className="small text-secondary">
                        S1
                      </span>
                    </div>

                    <h3 className="h5 fw-bold mb-2">
                      S1 Teknik Informatika
                    </h3>

                    <h4 className="h6 text-secondary mb-3">
                      Institut Widya Pratama
                    </h4>

                    <p className="text-secondary small mb-0 lh-lg">
                    Mempelajari berbagai bidang dan matkul seperti pemrograman web, basis data, rekayasa
                  perangkat lunak, jaringan komputer, sistem operasi,
                  mobile development, serta cloud computing dan DBMS.
                    </p>

                  </div>

                  {/* IPK */}
                  <div className="col-md-4 mt-4 mt-md-0">
                    <div className="education-score text-center rounded-3 p-3">

                      <p className="text-secondary small mb-1">
                        IPK
                      </p>

                      <h3 className="fw-bold text-primary mb-1">
                        3.92
                      </h3>

                      <span className="small fw-semibold">
                        Cumlaude
                      </span>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Pendidikan SMK */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="card education-card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-4">

                <div className="row align-items-center">

                  {/* Informasi */}
                  <div className="col-md-8">

                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge bg-primary-subtle text-primary px-3 py-2">
                        2019 – 2022
                      </span>

                      <span className="small text-secondary">
                        SMK
                      </span>
                    </div>

                    <h3 className="h5 fw-bold mb-2">
                      Teknik Komputer dan Jaringan
                    </h3>

                    <h4 className="h6 text-secondary mb-3">
                      SMK Nusantara 1 Comal
                    </h4>
                    <p className="text-secondary small mb-0 lh-lg">
                      Mempelajari dasar-dasar jaringan komputer seperti subnetting, vlan, DHCP, IP Address topologi jaringan, 7 layer protocol dll, 
                      pemrograman HTML dan php dasar, macam-macam perangkat jaringan, penginstalan sistem operasi serta crimping kabel LAN RJ45.
                      Mempelajari dasar-dasar jaringan komputer, pemrograman,
                      administrasi sistem, keamanan jaringan, serta pengembangan
                      perangkat lunak.
                    </p>

                  </div>

                  {/* Nilai */}
                  <div className="col-md-4 mt-4 mt-md-0">
                    <div className="education-score text-center rounded-3 p-3">

                      <p className="text-secondary small mb-1">
                        Nilai Rata-rata
                      </p>

                      <h3 className="fw-bold text-primary mb-1">
                        88,69
                      </h3>

                      <span className="small fw-semibold">
                        Sangat Memuaskan
                      </span>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
