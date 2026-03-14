import { useState, useEffect } from "react";
import Booking from "./EnquiryPopup";

const EnquiryPopup = () => {
  const [showModal, setShowModal] = useState(false);

  // Auto open popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 30000); // 30000 ms = 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fixed Enquiry Button */}
      <div className="enquiry-fixed">
        <a onClick={() => setShowModal(true)}>Enquiry Now</a>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close-btn " onClick={() => setShowModal(false)}>
              ✖
            </button>
            <Booking/>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryPopup;
