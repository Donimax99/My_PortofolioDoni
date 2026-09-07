function About() {
  return (
    <section id="about" className="py-5 section-gray">
      <div className="container">

        {/* Judul */}
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold mb-2">
            ABOUT ME
          </p>

          <h2 className="fw-bold">
            Tentang Saya
          </h2>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-9">

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">

                <p className="text-secondary mb-4">
                  Saya merupakan lulusan S1 Teknik Informatika yang
                  memiliki ketertarikan pada pengembangan web, database, 
                  jarigan komputer, dan IT Support.
                </p>

                <p className="text-secondary mb-4">
                  Selama kuliah, saya mempelajari berbagai bidang dan matkul
                  seperti pemrograman web, basis data, rekayasa
                  perangkat lunak, jaringan komputer, sistem operasi,
                  mobile development, serta cloud computing dan DBMS.
                </p>

                <p className="text-secondary mb-4">
                  Saya juga memiliki pengalaman mengembangkan sistem
                  informasi selama kegiatan magang dan mengerjakan
                  berbagai project selama perkuliahan.
                </p>

                {/* Highlight */}
                <div className="row g-3 mt-4">

                  <div className="col-md-4">
                    <div className="text-center p-3 border rounded">
                      <h3 className="h5 fw-bold mb-1">
                        S1
                      </h3>

                      <small className="text-secondary">
                        Teknik Informatika
                      </small>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="text-center p-3 border rounded">
                      <h3 className="h5 fw-bold mb-1">
                        3+
                      </h3>

                      <small className="text-secondary">
                        Project
                      </small>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="text-center p-3 border rounded">
                      <h3 className="h5 fw-bold mb-1">
                        1
                      </h3>

                      <small className="text-secondary">
                        Pengalaman Magang 
                      </small>
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

export default About;