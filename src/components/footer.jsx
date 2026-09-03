function Footer() {
  return (
    <footer className="py-3 bg-primary text-white">
      <div className="container">

        <div className="row align-items-center">

          {/* Copyright */}
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              © 2026 Doni Dwi Saputro. All rights reserved.
            </p>
          </div>

          {/* Social Media */}
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">

            <a
              href="https://github.com/DoniMax99"
              className="text-white text-decoration-none me-3"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/doni-dwi-saputro-a8812942b/"
              className="text-white text-decoration-none"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;