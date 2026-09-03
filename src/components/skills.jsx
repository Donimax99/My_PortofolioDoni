function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "Python", icon: "devicon-python-plain" }
      ]
    },
    {
      title: "Framework & Library",
      skills: [
        // { name: "Laravel", icon: "devicon-laravel-plain" },
        { name: "CodeIgniter 4", icon: "devicon-codeigniter-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Firebase", icon: "devicon-firebase-plain" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: "devicon-html5-plain" },
        { name: "CSS", icon: "devicon-css3-plain" },
        { name: "Responsive Design", icon: "devicon-css3-plain" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "Postman", icon: "devicon-postman-plain" },
        { name: "Figma", icon: "devicon-figma-plain" },
        { name: "XAMPP", icon: "devicon-xampp-plain" },
        { name: "Laragon", icon: "devicon-laragon-plain" }
      ]
    },
    {
      title: "Networking",
      skills: [
        { name: "Jaringan Komputer", icon: "devicon-networking-plain" },
        { name: "Troubleshooting", icon: "devicon-tools-plain" },
        { name: "Mikrotik", icon: "devicon-mikrotik-plain" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-5 section-gray">
      <div className="container py-4">

        {/* Judul */}
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold mb-2">
            SKILLS
          </p>

          <h2 className="fw-bold">
            Keahlian
          </h2>

          <p className="text-secondary mt-3">
            Teknologi dan tools yang saya pelajari dan gunakan.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="row g-4">

          {skillCategories.map((category) => (
            <div
              className="col-md-6 col-lg-4"
              key={category.title}
            >
              <div className="card h-100 border-0 shadow-sm">

                <div className="card-body p-4">

                  <h3 className="h5 fw-bold mb-4">
                    {category.title}
                  </h3>

                  <div className="d-flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-item d-flex align-items-center gap-1"
                      >
                        <i className={`${skill.icon} skill-icon`}></i>

                        <span className="skill-name">
                          {skill.name}
                        </span>
                      </div>
                    ))}
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

export default Skills;