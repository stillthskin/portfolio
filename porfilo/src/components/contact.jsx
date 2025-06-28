function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or just want to say hi, feel free to reach out!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;