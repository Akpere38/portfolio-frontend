import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container fluid className="px-4 px-md-5 text-center">

        <h2 className="about-title mb-4">About Me</h2>

        <p className="about-text mx-auto">
          I design <strong>data-driven solutions</strong>, develop
            <strong> scalable backend systems</strong> and
            <strong> interactive web applications</strong> using <strong>Python</strong>,
            <strong>Django</strong>, <strong>React</strong>, <strong>SQL</strong>, and <strong>Machine Learning</strong>.

          I enjoy working on projects that combine clean <strong>architecture</strong>, <strong>automate workflows</strong>, <strong>uncover insights</strong>, and use <strong>real-world data</strong> to solve
          practical problems.
        </p>

      </Container>
    </section>
  );
}

