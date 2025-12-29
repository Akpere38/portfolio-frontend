import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-section py-4 mt-5">
      <Container className="text-center">

        {/* Social icons */}
        <div className="footer-social mb-3">
          <a href="mailto:akpereraphael@email.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/akpere38" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/raphael-akpere-0a4120287" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Text */}
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Raphael Akpere. All rights reserved.
        </p>

      </Container>
    </footer>
  );
}
