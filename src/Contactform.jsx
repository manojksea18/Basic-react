const Contactform = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;
    if (name && gender && message) {
      document.getElementById("thankYou").innerHTML =
        "Thank you for contacting us";
      setTimeout(() => {
        document.getElementById("thankYou").innerHTML = "";
      }, 3000);
    }
  };
  const resetForm = () => {
    document.getElementById("contactform").reset();
  };
  return (
    <>
      <h1>Contact form</h1>

      <div>
        <form id="contactform" onSubmit={(e) => submitForm(e)}>
          <label>Name:</label>
          <input type="text" id="name" />
          <label>gender:</label>
          <select required id="gender">
            <option value="selectone">Select one</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label>Message:</label>
          <textarea rows={1} required id="message"></textarea>
          <button type="submit">Submit</button>
          <button onClick={resetForm}>Reset</button>
        </form>
        <div id="thankYou"></div>
      </div>
    </>
  );
};

export default Contactform;
