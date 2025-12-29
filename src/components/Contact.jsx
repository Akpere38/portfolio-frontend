import { useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert('Failed to send message');
      });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container className="text-center">

        <h2 className="about-title mb-4">Contact Me</h2>

        <Form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form mx-auto"
        >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Your Message"
              required
            />
          </Form.Group>

          <Button
            type="submit"
            className="contact-btn"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>

          {success && (
            <p className="mt-3 text-success">
              Message sent successfully!
            </p>
          )}
        </Form>

      </Container>
    </section>
  );
}
