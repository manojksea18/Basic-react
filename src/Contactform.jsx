import { Form, Button } from "react-bootstrap";
const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;
    if (name && gender && message) {
      document.getElementById("thankYou").innerHTML = "Thank you contacting us";
    }
    setTimeout(() => {
      document.getElementById("thankYou").innerHTML = "";
    }, 4000);
  };
  const resetForm = () => {
    document.getElementById("contactform").reset();
  };
  return (
    <>
      <div className="container">
        <h1>Contact Form</h1>

        <Form id="contactform" onSubmit={(e) => submitForm(e)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="name" placeholder="enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Gender:</Form.Label>
            <Form.Select required id="gender">
              <option value="">Select One:</option>
              <option value="male">Male:</option>
              <option value="female">Female:</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              row={4}
              required
              id="message"
              placeholder="Leave a comment here"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Button as="input" type="submit" value="Submit" />{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Button as="input" type="reset" value="Reset " />{" "}
          </Form.Group>
          <div>
            <button onClick={resetForm}> Reset</button>
          </div>
        </Form>
        <div id="thankYou"></div>
      </div>
    </>
  );
};

export default ContactForm;
