import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-sm">

        <img
          src={project.image}
          alt={project.title}
          className="card-img-top"
          style={{
            height: "200px",
            objectFit: "cover"
          }}
        />

        <div className="card-body d-flex flex-column">

          <span className="badge text-bg-primary align-self-start mb-2">
            {project.category}
          </span>

          <h3 className="h5 fw-bold">
            {project.title}
          </h3>

          <p className="text-secondary">
            {project.description}
          </p>

          <div className="mt-auto">

            <div className="mb-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="badge text-bg-light border me-1 mb-1"
                >
                  {technology}
                </span>
              ))}
            </div>

            <Link
              to={`/see-project/${project.id}`}
              className="btn btn-outline-primary btn-sm"
            >
              See Project
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;