// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ProjectDetail() {
    // const navigate = useNavigate();

    const handleBack = () => {
        window.history.back();
    };

    return (
        <section id="project-detail" className="py-5">

            {/* Back Button */}
            <div className="container pt-3">
                <button
                    onClick={handleBack}
                    className="btn btn-link text-decoration-none text-secondary back-project"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                    Kembali ke Projects
                </button>
            </div>

            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <p className="text-primary fw-semibold mb-2">
                        DETAIL PROJECT
                    </p>

                    <h1 className="fw-bold">
                        SIMEGA
                    </h1>

                    <p className="text-secondary">
                        Sistem Informasi Manajemen Magang
                    </p>
                </div>


                {/* Deskripsi + Landing Page */}
                <div className="row align-items-center g-5 mb-5">

                    {/* Image */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-sm overflow-hidden">
                            <img
                                src="/projects/landingpage.png"
                                alt="Landing Page SIMEGA"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-lg-6">

                        <span className="badge text-bg-primary mb-3">
                            Proyek Magang
                        </span>

                        <h2 className="fw-bold mb-3">
                            Tentang SIMEGA
                        </h2>

                        <p className="text-secondary">
                            SIMEGA (Sistem Informasi Manajemen Magang) merupakan
                            sistem informasi yang dikembangkan untuk membantu
                            Dinas Komunikasi dan Informatika dalam mengelola
                            kegiatan magang secara lebih terstruktur dan
                            terintegrasi.
                        </p>

                        <p className="text-secondary">
                            Sistem ini membantu proses pengelolaan data peserta
                            magang, kegiatan atau logbook, penilaian, hingga
                            pembuatan sertifikat secara digital.
                        </p>

                        {/* Technologies */}
                        <div className="mt-4">

                            <h6 className="fw-semibold mb-3">
                                Teknologi yang Digunakan
                            </h6>

                            <div className="d-flex flex-wrap gap-2">
                                {[
                                    "CodeIgniter 4",
                                    "PHP",
                                    "MySQL",
                                    "Bootstrap",
                                    "JavaScript"
                                ].map((technology) => (
                                    <span
                                        key={technology}
                                        className="badge text-bg-light border px-3 py-2 fw-normal"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>


                {/* Masalah */}
                <div className="mb-5">

                    <h2 className="fw-bold mb-3">
                        Masalah
                    </h2>

                    <p className="text-secondary">
                        Sebelum adanya SIMEGA, proses pengelolaan kegiatan
                        magang masih dilakukan secara manual menggunakan
                        Microsoft Excel dan Google Sheets. Kondisi tersebut
                        membuat proses pengelolaan data menjadi kurang
                        terintegrasi.
                    </p>

                    <ul className="text-secondary">
                        <li className="mb-2">
                            Data peserta magang masih tersebar pada beberapa
                            file.
                        </li>

                        <li className="mb-2">
                            Pengelolaan kegiatan dan logbook belum terintegrasi.
                        </li>

                        <li className="mb-2">
                            Proses penilaian masih dilakukan secara manual.
                        </li>

                        <li className="mb-2">
                            Pembuatan sertifikat membutuhkan proses tambahan.
                        </li>

                        <li>
                            Admin kesulitan dalam memantau status kegiatan
                            magang secara keseluruhan.
                        </li>
                    </ul>

                </div>


                {/* Solusi */}
                <div className="mb-5">

                    <h2 className="fw-bold mb-3">
                        Solusi
                    </h2>

                    <p className="text-secondary">
                        SIMEGA dibuat sebagai solusi untuk mengintegrasikan
                        seluruh proses pengelolaan kegiatan magang ke dalam
                        satu sistem berbasis web.
                    </p>

                    <p className="text-secondary">
                        Dengan adanya sistem ini, admin dapat mengelola data
                        peserta, memantau kegiatan magang, mengelola logbook,
                        melakukan penilaian, serta menghasilkan sertifikat
                        secara lebih terstruktur dan efisien.
                    </p>

                </div>


                {/* Alur Kerja Sistem */}
                <div className="mb-5">

                    <h2 className="fw-bold mb-4">
                        Alur Kerja Sistem
                    </h2>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="fs-3 mb-3">01</div>

                                    <h5 className="fw-bold">
                                        Data Peserta
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Admin mengelola data peserta magang dan
                                        informasi terkait kegiatan magang.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="fs-3 mb-3">02</div>

                                    <h5 className="fw-bold">
                                        Pelaksanaan Magang
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Peserta menjalankan kegiatan magang dan
                                        mencatat aktivitas melalui logbook.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="fs-3 mb-3">03</div>

                                    <h5 className="fw-bold">
                                        Penilaian
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Pembimbing melakukan penilaian terhadap
                                        kegiatan dan performa peserta magang.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="fs-3 mb-3">04</div>

                                    <h5 className="fw-bold">
                                        Monitoring
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Admin dapat memantau status dan perkembangan
                                        kegiatan magang melalui dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="fs-3 mb-3">05</div>

                                    <h5 className="fw-bold">
                                        Penyelesaian
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Setelah kegiatan selesai, data peserta
                                        dapat diproses ke tahap akhir.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="fs-3 mb-3">06</div>

                                    <h5 className="fw-bold">
                                        Sertifikat
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Sistem membantu menghasilkan sertifikat
                                        peserta setelah kegiatan magang selesai.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Fitur Utama */}
                <div className="mb-5">

                    <h2 className="fw-bold mb-4">
                        Fitur Utama
                    </h2>

                    <div className="row g-4">

                        {[
                            {
                                title: "Dashboard Statistik",
                                description:
                                    "Menampilkan informasi dan statistik kegiatan magang secara ringkas."
                            },
                            {
                                title: "Manajemen Data Magang",
                                description:
                                    "Mengelola data peserta, instansi, periode, dan informasi kegiatan magang."
                            },
                            {
                                title: "Logbook",
                                description:
                                    "Peserta dapat mencatat aktivitas dan kegiatan selama menjalankan magang."
                            },
                            {
                                title: "Penilaian",
                                description:
                                    "Pembimbing dapat melakukan penilaian terhadap peserta magang."
                            },
                            {
                                title: "Sertifikat",
                                description:
                                    "Membantu proses pembuatan dan pencetakan sertifikat peserta."
                            },
                            {
                                title: "Notifikasi",
                                description:
                                    "Memberikan informasi dan pengingat terkait kegiatan magang."
                            }
                        ].map((feature) => (
                            <div className="col-md-6 col-lg-4" key={feature.title}>

                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body p-4">

                                        <h5 className="fw-bold mb-3">
                                            {feature.title}
                                        </h5>

                                        <p className="text-secondary mb-0">
                                            {feature.description}
                                        </p>

                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>


                {/* Screenshot */}
                <div className="mb-5">

                    <h2 className="fw-bold mb-4">
                        Tangkapan Layar
                    </h2>

                    <div className="row g-4">

                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <img
                                    src="/img/Dashboard.png"
                                    alt="Dashboard SIMEGA"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <img
                                    src="/img/DataMagang.png"
                                    alt="Data Magang SIMEGA"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <img
                                    src="/img/Penilaian.png"
                                    alt="Penilaian SIMEGA"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <img
                                    src="/img/Sertifikat.png"
                                    alt="Sertifikat SIMEGA"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                    </div>

                </div>


                {/* GitHub */}
                <div className="text-center pt-4">

                    <h3 className="fw-bold mb-3">
                        Ingin Lebih Tahu Tentang SIMEGA, Klik Tombol di Bawah Ini.
                    </h3>

                    <p className="text-secondary mb-4">
                        Source code project SIMEGA tersedia di GitHub.
                    </p>

                    <a
                        href="https://github.com/Donimax99/Ci4-Aplikasi-SIMEGA-Sistem-Informasi-Manajemen-Pemagangan-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark px-4 py-2"
                    >
                        <FontAwesomeIcon icon={faGithub} /> Lihat di GitHub
                    </a>

                </div>

            </div>
        </section>
    );
}

export default ProjectDetail;