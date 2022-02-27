const ContactForm = () => {
  return (
    <div className="contact-form-body">
      <form>
        <div className="firstname">
          <h4>First Name *</h4>
          <input type="text" placeholder="First Name" />
        </div>

        <div className="lastname">
          <h4>Last Name *</h4>
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="email">
          <h4>Email *</h4>
          <input type="text" placeholder="Email" />
        </div>

        <div className="message">
          <h4>Message *</h4>
          <textarea placeholder="Message"></textarea>
        </div>

        <div className="submit-contact">
          <a className="btn btn-default btn-border" href="#">
            Submit
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
