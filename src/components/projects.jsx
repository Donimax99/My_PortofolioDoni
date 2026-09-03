import ProjectCard from "./ProjectCard";
import projects from "./ProjectsData";
import { Link } from "react-router-dom";

function Projects() {
  const featuredProject = {
    id: 1,
    title: "SIMEGA",
    category: "Proyek Magang",
    description:
      "Sistem Informasi Manajemen Magang yang dikembangkan untuk membantu proses pengelolaan kegiatan magang secara terintegrasi.",
    image: "/projects/landingpage.png",
    technologies: [
      "CodeIgniter 4",
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript"
    ],
    link: "#"
  };


  return (
    <section id="projects" className="py-5 section-blue">
      <div className="container">

        {/* Judul */}
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold mb-2">
            PROJECTS
          </p>

          <h2 className="fw-bold">
            Project Saya
          </h2>

          <p className="text-secondary mt-3">
            Beberapa project yang saya kerjakan selama kuliah
            dan magang.
          </p>
        </div>

        {/* Featured Project */}
        <div className="row justify-content-center mb-5">

          <div className="col-lg-10">

            <div className="card border-0 shadow-sm overflow-hidden">

              <div className="row g-0 align-items-center">

                {/* Image */}
                <div className="col-md-6">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="col-md-6">

                  <div className="card-body p-4 p-lg-5">

                    <span className="badge text-bg-primary mb-3">
                      ⭐ Featured Project
                    </span>

                    <h3 className="h2 fw-bold">
                      {featuredProject.title}
                    </h3>

                    <p className="text-secondary">
                      {featuredProject.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">

                      {featuredProject.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="badge text-bg-light border me-2 mb-2 px-3 py-2 fw-normal"
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                    <div className="d-flex flex-wrap gap-2">

                      <Link
                        to="/project/simega"
                        className="btn btn-primary"
                      >
                        Detail Project
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Other Projects */}
        <div className="row g-4">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;