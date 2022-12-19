import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="faq-container">
        <h1 className="form-header">Frequently Asked Questions </h1>
        <h3> Why choose our services? </h3>
        <p className="faq-text">
          We are quick to respond and we have many happy customers! Feel free to
          call us for a <b> FREE </b> site quote and we will be within your
          location in a few business days. Feel free to reach out using the
          email below!
        </p>
        <h3> How do I get my quote? </h3>
        <p className="faq-text">
          Send me an email with the photos for rooms and the measurements that
          you want to change using the link below!
        </p>
        <h3> How does payment work? </h3>
        <p className="faq-text">
          After consulting our quotes and choosing our rates, we will charge
          half upfront and collect the rest when it's a job well done!
        </p>
        <h3> How long do our renovations usually take? </h3>
        <p className="faq-text">
          It varies on your desired renovation and on the footage of products
          being removed and installed. For average renovation timeline
          estimations, our bathrooms usually take 8 - 10 days, kitchen 3 - 5
          days and backsplash 2 - 3 days. For flooring, we cannot give an
          approximate estimation since our client's needs may vary.
        </p>
        <h3> When can you begin my desired renovation? </h3>
        <p className="faq-text">
          Our team will be able to start your desired renovation after 1 week of
          confirming every part of the project.
        </p>
      </div>
      <h1 className="form-header">Contact Us!</h1>
      <a className="email-link" href="mailto:joshuakotsopoulos1@gmail.com">
        Email me at JDK Contracting
      </a>
    </div>
  );
};

export default Contact;
