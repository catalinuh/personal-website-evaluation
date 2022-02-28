import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, getMessages } from '../store/message';

const ContactForm = () => {
  const dispatch = useDispatch();
  const messages = useSelector(getMessages);
  const submit = useCallback(
    async (newMessage) => dispatch(sendMessage(newMessage)),
    [dispatch]
  );
  const [message, setMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(message);
    setMessage({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    seeMessages();
  };

  const seeMessages = () => {
    console.log('List of messages: ', messages.messages);
  };

  return (
    <div className="contact-form-body">
      <form onSubmit={handleSubmit}>
        <div className="firstname">
          <h4>First Name *</h4>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={message.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="lastname">
          <h4>Last Name *</h4>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={message.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="email">
          <h4>Email *</h4>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={message.email}
            onChange={handleChange}
          />
        </div>

        <div className="message">
          <h4>Message *</h4>
          <textarea
            placeholder="Message"
            name="message"
            value={message.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="submit-contact">
          <button className="btn btn-default btn-border" href="#" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
