import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className="contact-container">
      <h1 id='contact'>Contact Us</h1>
      <p>If you have any questions or need more information, feel free to contact us. We're here to help!</p>

      <div className="contact-details">
        <div className="contact-info">
          <h2>Our Location</h2>
          <p>Best University,</p>
          <p>Bengaluru Main Campus, Karnataka, 560100</p>
          <p><strong>Phone:</strong> +91 98480-22338</p>
          <p><strong>Email:</strong> best@university.edu</p>
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us on the Map</h2>
        <iframe
          title="University Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093727!2d144.9630579157381!3d-37.81627944214009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f4f0d2dff7b!2sUniversity!5e0!3m2!1sen!2sus!4v1616269169489!5m2!1sen!2sus"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  )
}

export default Contact