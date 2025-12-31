import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
// import './Skills.css';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get('https://backend-portfolio-el2x.onrender.com/api/skills/')
      .then(res => setSkills(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>

        {skills.length === 0 ? (
          <p className="text-center">No skills to show.</p>
        ) : (
          <div className="skills-wrapper mx-auto" style={{ maxWidth: '50%' }}>
            <div className="row justify-content-center">
              {skills.map(skill => (
                <div
                  key={skill.id}
                  className="col-6 col-sm-6 col-md-3 text-center mb-4 skill-card"
                >
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon mb-2"
                    />
                  )}
                  <div>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
