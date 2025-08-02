import React from "react";

function Footer() {
  return (
    <>
      <div className="w-screen bg-[#1c1d22] text-white self-center p-5 font-onest text-xl items-center text-center">
        
          <p className="text-base">
            <span>This website uses data from </span>
            <a
              className="text-orange-300 underline"
              href="https://www.spaceflightnewsapi.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spaceflight News API
            </a>
            <span>
              {" "}
              to provide up-to-date space-related news. A huge thanks to these platforms for their valuable resources!
            </span>
          </p>
        </div>
    </>
  );
}

export default Footer;
