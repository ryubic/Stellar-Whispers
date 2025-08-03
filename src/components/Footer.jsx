import React from "react";

function Footer() {
  return (
    <>
      <div className="w-screen bg-[#1c1d22] text-gray-500 self-center p-5 font-onest text-xl items-center text-center">
        
          <p className="text-base">
            <span>This website uses data from </span>
            <a
              className="text-indigo-400 visited:text-purple-700 underline"
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
