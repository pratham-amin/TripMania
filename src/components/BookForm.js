import "./Bookform.css";

export const BookForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Check if the form is valid
    const form = e.target;
    if (form.checkValidity()) {
      alert("Booking request placed! We will contact you shortly. ✅");
      form.reset(); // Reset form after submission
    } else {
      alert("Please fill out the form correctly. ⚠️");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <h3>Your Name*</h3>
          <input type="text" placeholder="Name" required name="name" />
        </div>
        <div className="inputbox">
          <h3>Email Address*</h3>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            name="email"
          />
        </div>
        <div className="inputbox">
          <h3>Contact Number*</h3>
          <input
            type="tel"
            placeholder="Number"
            required
            maxLength="10"
            pattern="[0-9]{10}"
            name="contact"
          />
        </div>
        <div className="inputbox">
          <h3>Enter Your Destination*</h3>
          <input
            type="text"
            placeholder="Destination"
            required
            name="destination"
          />
        </div>

        <div className="inputbox">
          <h3>Enter the Number of People</h3>
          <input
            type="number"
            min="1"
            max="15"
            placeholder="Number"
            required
            name="people"
          />
        </div>
        <div className="inputbox">
          <h3>Arrival</h3>
          <input type="date" required name="arrival" />
        </div>
        <div className="inputbox">
          <h3>Departure</h3>
          <input type="date" required name="dept" />
        </div>
        <div className="sub-btn">
          <button type="submit" className="subbtn">
            Book now
          </button>
        </div>
      </form>
    </>
  );
};
