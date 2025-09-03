const skills = [
  {
    name: "Python",
    iconClass: "fa-brands fa-python"
  },

  {
    name: "Java",
    iconClass: "fa-brands fa-java"
  },
  {
    name: "Bash",
    iconClass: "fa-solid fa-terminal"
  },
  {
    name: "Jenkins",
    iconClass: "fa-brands fa-jenkins"
  },
  {
    name: "Ansible",
    iconClass: "fa-brands fa-ansible"
  },
  {
    name: "Terraform",
    iconClass: "fa-brands fa-t"
  },
  {
    name: "Docker",
    iconClass: "fa-brands fa-docker"
  },
  {
    name: "Kubernetes",
    iconClass: "fa-brands fa-gears"
  },
  {
    name: "Cloud",
    iconClass: "fa-solid fa-cloud"
  },
  {
    name: "SonarQube",
    iconClass: "fa-solid fa-wave-square"
  },
  {
    name: "Veracode",
    iconClass: "fa-solid fa-shield-halved"
  },
  {
    name: "Kafka",
    iconClass: "fa-solid fa-server"
  },
  {
    name: "Prometheus",
    iconClass: "fa-solid fa-chart-line"
  },
  {
    name: "Grafana",
    iconClass: "fa-solid fa-chart-bar"
  },
  {
    name: "GitHub",
    iconClass: "fa-brands fa-github"
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h1 className="gold text-center uppercase">
          Skills <i className="fas fa-tasks"></i>
        </h1>

        <div className="pt-4 mt-lg-4 justify-content-center row">
          {
            skills.map((skill, index) => (
              <div className="mx-1 mx-lg-4 skill-card" data-aos="fade-up" delay="500" key={index}>
                <div className="card-body elegant-color-dark white-text">
                  <p className="card-text white-text font-weight-bold" >
                    <i class={skill.iconClass}></i> {skill.name}  </p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
}

export default Skills;
