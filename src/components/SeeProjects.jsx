import { Link, useParams } from "react-router-dom";
import projects from "./ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SeeProject() {
    const { id } = useParams();

    const project = projects.find(
        (project) => project.id === Number(id)
    );

    const handleBack = () => {
        window.history.back();
    };


    if (!project) {
        return (
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold">Project tidak ditemukan</h2>

                    <Link
                        to="/#projects"
                        className="btn btn-primary mt-3"
                    >
                        Kembali ke Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-5">
            <div className="container">

                <button
                    onClick={handleBack}
                    className="btn btn-link text-decoration-none text-secondary back-project"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                    Kembali ke Projects
                </button>

                {/* Header */}
                <div className="text-center mt-4 mb-5">

                    <span className="badge text-bg-primary mb-3">
                        {project.category}
                    </span>

                    <h1 className="fw-bold">
                        {project.title}
                    </h1>

                    <p className="text-secondary mt-3">
                        {project.description}
                    </p>

                </div>

                {/* Project Image */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-9">

                        <img
                            src={project.image}
                            alt={project.title}
                            className="img-fluid rounded shadow-sm w-100"
                        />

                    </div>
                </div>

                {/* Information */}
                <div className="row g-4">

                    {/* Technologies */}
                    <div className="col-md-6">

                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">

                                <h3 className="h5 fw-bold mb-3">
                                    Technologies
                                </h3>

                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="badge text-bg-light border me-2 mb-2 px-3 py-2 fw-normal"
                                    >
                                        {technology}
                                    </span>
                                ))}

                            </div>
                        </div>

                    </div>

                    {/* Features */}
                    <div className="col-md-6">

                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">

                                <h3 className="h5 fw-bold mb-3">
                                    Main Features
                                </h3>

                                <ul className="mb-0">
                                    {Array.isArray(project.feature) ? (
                                        project.feature.map((feature, index) => (
                                            <li key={index} className="mb-2">
                                                {feature}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="mb-2">
                                            {project.feature}
                                        </li>
                                    )}
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>

                {/* GitHub */}
                {project.github && (
                    <div className="text-center mt-5">

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            View Source Code
                        </a>

                    </div>
                )}

            </div>
        </section>
    );
}

export default SeeProject;