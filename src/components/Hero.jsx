import { Container, Button } from 'react-bootstrap';
import profileImg from '../assets/A143CDCF-0C92-4575-8731-2808440B0D01.PNG';


export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-center"
    >
      <Container fluid className="px-4 px-md-5">
        
        {/* Profile Image */}
        <div className="hero-image-wrapper mb-4">
          <img
            src={profileImg}
            alt="Raphael"
            className="hero-profile-img"
          />
        </div>

        <h1 className="hero-title">
          Hi, I’m <span>Raphael</span>
        </h1>

        <p className="hero-subtitle mt-3">
          Data Analyst • Backend Developer • Aspiring Full Stack Developer
        </p>

        <Button href="#projects" className="hero-cta mt-4">
          View My Work
        </Button>

      </Container>
    </section>
  );
}
