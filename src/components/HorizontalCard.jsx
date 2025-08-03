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
            font-onest border-b border-gray-500 p-7 cursor-default"
      >
        {element.image_url ? (
            <img
              src={`https://res.cloudinary.com/dpmcuhjyw/image/fetch/f_auto,q_auto,w_600/${element.image_url}`}
              alt=""
              className="rounded self-center h-[200px] sm:h-fit max-w-fit sm:w-[37vw]"
            />
        ) : (
          ""
        )}
        <div className=" overflow-hidden flex flex-col gap-3 w-full">
          <h2 className="font-bold text-2xl flex justify-start leading-tight">
            {element.title}
          </h2>
          <p>{element.summary}</p>
          <p className="self-end text-right">
            - {element.authors[0] ? element.authors[0].name + ", " : ""}
            {element.news_site ? element.news_site : ""},<br />
            {date(element.published_at ? element.published_at : "")}
          </p>
          <a href={`${element.url}`} className="self-end text-right text-indigo-600 dark:text-indigo-400 visited:text-purple-700 underline">
            Read full article
          </a>
        </div>
      </article>
    </>
  );
}

export default HorizontalCard;
