import React from "react";

function date(isoDate) {
  const d = new Date(isoDate);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = d.toLocaleString("en-US", options);
  return formattedDate;
}

function HorizontalCard({ element }) {
  return (
    <>
      <article
        className="flex flex-col sm:flex-row gap-5
            font-onest border-b border-gray-500 px-8 py-7 cursor-default"
      >
        {element.image_url ? (
          <div className="sm:w-[40vw] sm:max-h-[350px] sm:max-w-full flex justify-center mr-3">
            <img
              src={`https://res.cloudinary.com/dpmcuhjyw/image/fetch/f_auto,q_auto,w_500/${element.image_url}`}
              alt=""
              className="rounded self-center max-h-full sm:h-fit"
              onError={(e) => {
                e.target.style.display = "none"; // hides the image element
              }}
            />
          </div>
        ) : (
          ""
        )}
        <div className=" overflow-hidden flex flex-col gap-3 w-full text-justify">
          <h2 className="font-bold text-2xl flex justify-start leading-tight">
            {element.title}
          </h2>
          <p>{element.summary}</p>
          <p className="self-end text-right">
            - {element.authors[0] ? element.authors[0].name + ", " : ""}
            {element.news_site ? element.news_site : ""},<br />
            {date(element.published_at ? element.published_at : "")}
          </p>
          <a
            href={`${element.url}`}
            className="self-end font-bold text-right text-blue-600 visited:text-purple-700 dark:text-[#8080ff] dark:visited:text-purple-600 underline"
          >
            Read full article
          </a>
        </div>
      </article>
    </>
  );
}

export default HorizontalCard;
