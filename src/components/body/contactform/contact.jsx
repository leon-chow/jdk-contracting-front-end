import "./contact.css";

const ContactForm = () => {
  return (
    <div>
      <h1 className="form-header">FAQ</h1>
      <h3> How do I get my quote? </h3>
      <p>
        Send me an email with the photos for rooms and the measurements that you
        want to change, or send me an email below!
      </p>
      <h1 className="form-header">Contact Us!</h1>
      <a className="email-link" href="mailto:joshuakotsopoulos1@gmail.com">
        Email me at JDK Contracting
      </a>
    </div>
  );
};

export default ContactForm;
