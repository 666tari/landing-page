import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {

  return (
    <Container>
      <br/>
        <h1 className="text-white text-center" id="k  ontak">Contact Us</h1>
      <br/>
      <Row>
        <Col>
            <Form id="contact">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Nama Lengkap</Form.Label>
                <Form.Control type="email" placeholder="Nama Lengkap" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label class="text-white">Komen</Form.Label>
                <Form.Control type="password" placeholder="Ketikan Komen Anda" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
    </Col>
    </Row>
    </Container>
  );
}

export default Contact;