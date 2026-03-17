import { useState } from "react";
import EnquiryPopup from "../BookingForm/Model";
const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className="bg_footer pt-4">
      <div className="container">
        {/* City List */}
        <p className="small mb-3 py-2 text-center text-md-start">
          <strong>100% Trusted Local Service 🇮🇳</strong>
          <br />
          <span className="fw-bold">We Are Available in Delhi NCR</span>
          <br />

          {/* Hide long list on very small screen */}
          <small className="d-none d-md-block">
            Delhi: Saket | Sultanpur | Kashmere Gate | Rohini | Dwarka |
            Janakpuri | Lajpat Nagar | Karol Bagh | Rajouri Garden | Uttam Nagar
            | Vasant Kunj | Malviya Nagar | Hauz Khas | Pitampura | Punjabi Bagh
            | Connaught Place | Mayur Vihar | Preet Vihar | Shahdara | Kalkaji
            <br />
            Gurgaon: DLF Phase 1 | DLF Phase 2 | DLF Phase 3 | DLF Phase 4 | DLF
            Phase 5 | Sohna Road | Golf Course Road | Golf Course Extension |
            Sushant Lok | Palam Vihar | Sector 14 | Sector 22 | Sector 23 |
            Sector 31 | Sector 40 | Sector 45 | Sector 46 | Sector 49 | Sector
            56 | Sector 57
            <br />
            Noida: Sector 1 | Sector 2 | Sector 12 | Sector 15 | Sector 18 |
            Sector 22 | Sector 27 | Sector 37 | Sector 41 | Sector 50 | Sector
            51 | Sector 52 | Sector 61 | Sector 62 | Sector 63 | Sector 71 |
            Sector 72 | Sector 75 | Sector 76 | Sector 78
          </small>

          {/* Short text for mobile */}
          <small className="d-block d-md-none">
            Serving across Delhi, Gurgaon & Noida
          </small>
        </p>

        <hr />

        <div className="row text-center text-md-start">
          {/* About */}
          <div className="col-12 col-md-6 mb-4">
            <img
              src="/assets/img/green GIT without TM.png"
              alt="logo"
              className="footer_logo mb-2"
            />

            <p className="small">
              Sarv Laxmi Green India Pvt. Ltd. provides reliable and affordable
              home services across Delhi NCR. Our mission is to bring skilled
              professionals to your doorstep with quality and trusted service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4">
            <h6>Quick Links</h6>

            <ul className="list-unstyled small">
              <li>
                <a href="https://greenindiateam.com/about-us">
                  About Us
                </a>
              </li>

              <li>
                <a href="https://greenindiateam.com/term-condition">
                 Terms & conditions
                </a>
              </li>
               <li>
                <a href="https://greenindiateam.com/privacy-policy">
                 Privacy policy
                </a>
              </li>
               <li>
                <a href="https://greenindiateam.com/refund-policy">
                Refund Policy
                </a>
              </li>
               <li>
                <a href="https://greenindiateam.com/disclaimer">
                 Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-12 col-md-3 mb-4">
            <h6>Keep In Touch</h6>

            <ul className="social-icon d-flex justify-content-center justify-content-md-start gap-3 list-unstyled mt-3">
              <li>
                <a
                  href="https://greenindiateam.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/icons/link.svg"
                    width="22"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/greenindiateams/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/icons/fb.svg"
                    width="22"
                    alt="facebook"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/greenindiateams/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/icons/instagram.svg"
                    width="22"
                    alt="instagram"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@GREENINDIATEAM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/icons/youtube.svg"
                    width="22"
                    alt="youtube"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/green-india-team/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/icons/linkedin.svg"
                    width="22"
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="floating-contact">
          <a href="tel:+918090400401" className="call-btn">
            <img
              src="/assets/img/icons/call-calling.svg"
              width="32"
              alt="call"
            />
          </a>

          <a
            href="https://wa.me/918090400401 "
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <img
              src="/assets/img/icons/whatsapp.svg"
              width="32"
              alt="whatsapp"
            />
          </a>
        </div>

        <div className="enquiry-fixed">
          <a onClick={() => setShowModal(true)}>Enquiry Now</a>
        </div>

         {/* Popup Modal */}
      {showModal && (
        <EnquiryPopup closeModal={() => setShowModal(false)} />
      )}
        <hr />

        <p className=" footer_reserved-key">
          © 2025 Sarv Laxmi Green India Pvt. Ltd. All Rights Reserved.
          CIN: U51909DL2022PTC406952
        </p>
      </div>
    </footer>
  );
};

export default Footer;
