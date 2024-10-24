import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Best University</h3>
                        <p>
                            Address: Best University, Bengaluru Main Campus, Karnataka, 560100<br />
                            Phone: +91 98480-22338<br />
                            Email: best@collegename.edu.in
                        </p>
                    </div>

                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/About">About Us</a></li>
                            <li><a href="/Courses">Courses</a></li>
                            <li><a href="/Blog">Blog</a></li>
                            <li><a href="/Contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Follow Us</h3>
                        <a href="https://www.facebook.com/">Facebook</a>
                        <a href="https://x.com/">Twitter</a>
                        <a href="https://www.instagram.com/">Instagram</a>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2024 Best University. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer