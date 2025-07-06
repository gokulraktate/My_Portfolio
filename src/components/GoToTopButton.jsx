import React, { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {visible && (
        <button className="go-to-top-button" onClick={scrollToTop}>
          <svg
            className="svgIcon"
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M169.4 164.7L41.4 292.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0L192 255.9l94.1 94.1c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L214.6 164.7c-9.5-9.4-24.6-9.4-34.2 0z" />
          </svg>
        </button>
      )}

      <style>{`
        .go-to-top-button {
          position: fixed;
          bottom: 20px;
          right: 16px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #141414;
          border: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          z-index: 9999;
          animation: floatUpDown 1.2s infinite cubic-bezier(0.33, 0.66, 0.66, 1);
        }

        @keyframes floatUpDown {
          0% {
            transform: translateY(0px);
          }
          30% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .svgIcon {
          width: 12px;
          transition: transform 0.3s ease;
        }

        .svgIcon path {
          fill: white;
        }

        .go-to-top-button:hover {
          width: 120px;
          border-radius: 50px;
          background-color: rgb(181, 160, 255);
        }

        .go-to-top-button:hover .svgIcon {
          transform: translateY(-200%);
        }

        .go-to-top-button::before {
          position: absolute;
          bottom: -20px;
          content: "Back to Top";
          color: white;
          font-size: 0px;
        }

        .go-to-top-button:hover::before {
          font-size: 12px;
          opacity: 1;
          bottom: unset;
          transition: font-size 0.3s ease, opacity 0.3s ease;
        }

        /* Mobile responsive touch area */
        @media (max-width: 640px) {
          .go-to-top-button {
            width: 48px;
            height: 48px;
            right: 12px;
            bottom: 16px;
          }

          .go-to-top-button:hover {
            width: 110px;
          }
        }
      `}</style>
    </>
  );
};

export default GoToTopButton;
