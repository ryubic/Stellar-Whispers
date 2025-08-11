import React from "react";

function Footer() {
  return (
    <>
      <div className="w-screen bg-[#1c1d22] text-gray-500 self-center p-5 font-onest text-xl items-center text-justify">
        <p className="text-base">
          This website uses data from <a className="underline text-blue-400" href="https://www.spaceflightnewsapi.net/" alt="link to spaceflight api website">Spaceflight News API</a> to provide up-to-date
          space-related news. A huge thanks to them for their valuable resources! 
        </p>
      </div>
    </>
  );
}

export default Footer;
