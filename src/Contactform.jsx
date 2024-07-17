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
      <h1>Contact Form</h1>
      <div>
        <form id="contactform" onSubmit={(e) => submitForm(e)}>
          <label>Name:</label>
          <input type="text" id="name" required />
          <div>
            <label>Gender:</label>
            <select required id="gender">
              <option value="select one">Select One:</option>
              <option value="male">Male:</option>
              <option value="female">Female:</option>
            </select>
          </div>
          <div>
            <label>Message:</label>
            <textarea required name="message" id="message"></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button onClick={resetForm}> Reset</button>
          </div>
        </form>
        <div id="thankYou"></div>
      </div>
    </>
  );
};

export default ContactForm;
