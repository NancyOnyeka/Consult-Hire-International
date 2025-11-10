class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e40af;
          color: white;
          padding: 3rem 2rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-links a {
          color: #e5e7eb;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #e5e7eb;
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="container">
          <div class="footer-section">
            <h3>Services</h3>
            <div class="footer-links">
              <a href="/">Employer Branding</a>
              <a href="/">Talent Strategy</a>
              <a href="/organizations.html">Tech Recruitment</a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Company</h3>
            <div class="footer-links">
              <a href="/about.html">About Us</a>
              <a href="/about.html">Contact</a>
              <a href="/terms.html">Terms of Service</a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Connect</h3>
            <div class="footer-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Email Us</a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} Consult&Hire International. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);