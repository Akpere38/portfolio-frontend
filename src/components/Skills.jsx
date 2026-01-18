import { Container } from 'react-bootstrap';
import pythonIcon from "../assets/icons/python-16-svgrepo-com.svg";
import ReactIcon from "../assets/react.svg";
import DjangoIcon from "../assets/icons/django-svgrepo-com.svg";
import SqlIcon from "../assets/icons/sql-database-generic-svgrepo-com.svg";
import PowerBiIcon from "../assets/icons/powerbi-svgrepo-com.svg";
import PostgreSqlIcon from "../assets/icons/pgsql-svgrepo-com.svg";
import JavascriptIcon from "../assets/icons/javascript-svgrepo-com.svg";
import PandasIcon from "../assets/icons/pandas-svgrepo-com.svg";
import GitIcon from "../assets/icons/git-icon-svgrepo-com.svg";
import DockerIcon from "../assets/icons/docker-svgrepo-com.svg";
import FastApiIcon from "../assets/icons/fastapi-svgrepo-com.svg";

// Hard-coded skills data
const skillsData = [
  {
    id: 1,
    name: "Python",
    icon: pythonIcon,
  },
  {
    id: 2,
    name: "React",
    icon: ReactIcon,
  },
  {
    id: 3 ,
    name: "Django",
    icon: DjangoIcon,
  },
  {
    id: 11 ,
    name: "FastAPI",
    icon: FastApiIcon,
  },
  {
    id: 4,
    name: "SQL",
    icon: SqlIcon,
  },
  {
    id: 5,
    name: "PowerBi",
    icon: PowerBiIcon,
  },
  {
    id: 6,
    name: "Pandas",
    icon: PandasIcon,
  },
  {
    id: 7,
    name: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    id: 8,
    name: "PostgreSQL",
    icon: PostgreSqlIcon,
  },
  {
    id: 9,
    name: "Docker",
    icon: DockerIcon,
  },
  {
    id: 10,
    name: "Git",
    icon: GitIcon, 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>

        <div className="skills-wrapper mx-auto" style={{ maxWidth: '50%' }}>
          <div className="row justify-content-center">
            {skillsData.map(skill => (
              <div
                key={skill.id}
                className="col-6 col-sm-6 col-md-3 text-center mb-4 skill-card"
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon mb-2"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                )}
                <div>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
