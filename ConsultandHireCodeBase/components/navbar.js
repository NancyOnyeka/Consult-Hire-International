class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e40af;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #1e40af;
        }
        .nav-links a.active {
          color: #1e40af;
          font-weight: 600;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="container">
          <a href="/" class="logo">Consult&Hire</a>
          <div class="nav-links">
            <a href="/">Home</a>
            <a href="/organizations.html">For Organizations</a>
            <a href="/candidates.html">For Candidates</a>
            <a href="/about.html">About</a>
          </div>
          <button class="mobile-menu-btn">☰</button>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);