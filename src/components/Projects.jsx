import { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://backend-portfolio-el2x.onrender.com/api/projects/')
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  // Helper: split array into chunks of size 3
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const projectChunks = chunkArray(projects, 3);

  return (
    <section id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>

      {projects.length === 0 ? (
        <p className="text-center">No projects to show.</p>
      ) : (
        <Carousel interval={null}>
          {projectChunks.map((chunk, idx) => (
            <Carousel.Item key={idx}>
              <div
                className="d-flex justify-content-center flex-wrap"
                style={{ pointerEvents: 'auto' }} // allows button clicks
              >
                {chunk.map(project => (
                  <div
                    key={project.id}
                    className="card mx-2 my-3"
                    style={{ minWidth: '300px', maxWidth: '350px', position: 'relative', zIndex: 1 }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                    )}
                    <div className="card-body text-center">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <div className="d-flex justify-content-center">
                        {project.code_url && (
                          <Button
                            href={project.code_url}
                            target="_blank"
                            variant="dark"
                            size="sm"
                            className="mx-1"
                          >
                            Code
                          </Button>
                        )}
                        {project.demo_url && (
                          <Button
                            href={project.demo_url}
                            target="_blank"
                            variant="primary"
                            size="sm"
                            className="mx-1"
                          >
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </section>
  );
}
