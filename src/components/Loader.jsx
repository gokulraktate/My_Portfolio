import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050414]">
      <div className="spinner relative w-11 h-11 animate-spinner3D">
        <div className="absolute bg-[rgba(0,77,255,0.2)] h-full w-full border border-[#004dff]"></div>
        <div className="absolute bg-[rgba(0,77,255,0.2)] h-full w-full border border-[#004dff]"></div>
        <div className="absolute bg-[rgba(0,77,255,0.2)] h-full w-full border border-[#004dff]"></div>
        <div className="absolute bg-[rgba(0,77,255,0.2)] h-full w-full border border-[#004dff]"></div>
        <div className="absolute bg-[rgba(0,77,255,0.2)] h-full w-full border border-[#004dff]"></div>
        <div className="absolute bg-[rgba(0,77,255,0.2)] h-full w-full border border-[#004dff]"></div>
      </div>

      <style>
        {`
          .spinner {
            transform-style: preserve-3d;
          }

          .spinner div:nth-of-type(1) {
            transform: translateZ(-22px) rotateY(180deg);
          }
          .spinner div:nth-of-type(2) {
            transform: rotateY(-270deg) translateX(50%);
            transform-origin: top right;
          }
          .spinner div:nth-of-type(3) {
            transform: rotateY(270deg) translateX(-50%);
            transform-origin: center left;
          }
          .spinner div:nth-of-type(4) {
            transform: rotateX(90deg) translateY(-50%);
            transform-origin: top center;
          }
          .spinner div:nth-of-type(5) {
            transform: rotateX(-90deg) translateY(50%);
            transform-origin: bottom center;
          }
          .spinner div:nth-of-type(6) {
            transform: translateZ(22px);
          }

          @keyframes spinner-y0fdc1 {
            0% {
              transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
            }
            50% {
              transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
            }
            100% {
              transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
            }
          }

          .animate-spinner3D {
            animation: spinner-y0fdc1 2s infinite ease;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
