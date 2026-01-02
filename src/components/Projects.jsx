import { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import HeartfailureImage from '../assets/images/heart failure.png';
import NoShowImage from '../assets/images/hospital no show.png';
import EmployeeAttritionImage from '../assets/images/ChatGPT Image Jan 2, 2026, 07_48_31 AM.png';
import SanmartinsImage from '../assets/images/San martins store.png'
import MediterraneanCameraImage from '../assets/images/camera co.png';


// import MeetingSummarizerImage from '../assets/projects/meeting_summarizer.png';

// Hard-coded projects array
const projectsData = [
  {
    id: 1,
    title: "Heart Failure Prediction App",
    description: "A Streamlit-based machine learning application designed to predict a patient’s risk of heart failure using clinical and demographic data. The app allows users to input patient information and receive a risk prediction with probability scores, helping translate complex model outputs into clear, actionable insights.",
    image: HeartfailureImage,
    code_url: "https://github.com/Akpere38/heart-failure-predictor",
    demo_url: "https://heart-failure-prediction-akpere38.streamlit.app/"
  },
  {
    id: 2,
    title: "Patient No-Show Predictor",
    description: "A machine learning project focused on predicting hospital appointment no-shows to help healthcare providers reduce missed appointments and improve operational efficiency. The model analyzes patient demographics, appointment details, and scheduling patterns to estimate the likelihood of a patient failing to attend a scheduled visit.",
    image: NoShowImage,
    code_url: "https://github.com/Akpere38/patient-no-show-predictor",
    demo_url: "https://patient-no-show-predictor-akpere38.streamlit.app/"
  },
  {
    id: 3,
    title: "Employee Attrition Dashboard",
    description: "A Streamlit-based interactive dashboard built to predict employee attrition using machine learning and to support data-driven HR decision-making. The application enables users to explore workforce data, generate attrition risk predictions, and understand the key factors influencing employee turnover.",
    image: EmployeeAttritionImage,
    code_url: "https://github.com/Akpere38/employee-attrition-dashboard",
    demo_url: "https://employee-attrition-dashboard-akpere38.streamlit.app/"
  },
  {
    id: 4,
    title: "San Martin’s Stores Analysis",
    description: "The dashboard explores key metrics such as total sales, revenue trends, store performance, and product-level analysis. Interactive visuals allow users to drill down by time period, store location, and product categories, helping identify high-performing stores and underperforming segments.",
    image: SanmartinsImage,
    code_url: "https://github.com/Akpere38/San-Martin-s-Stores-Analysis",
    demo_url: ""
    },
    {
      id: 5,
      title: "Mediterranean Camera Co. Analysis",
      description: "This dashboard provides insights into sales performance, customer demographics, and product trends for Mediterranean Camera Co. Users can explore interactive charts and graphs to analyze sales by region, product category, and time period, helping identify growth opportunities and optimize marketing strategies.",
      image: MediterraneanCameraImage,
      code_url: "Mediterranean-Camera-Co.-Analysis",
      demo_url: "",
    }
  // add more projects as needed
];

export default function Projects() {
  const [projects] = useState(projectsData);

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

      <Carousel interval={3000} pause="hover" indicators={false} controls={true}>
        {projectChunks.map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="d-flex justify-content-center flex-wrap"
              style={{ pointerEvents: 'auto' }}
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
    </section>
  );
}
