import React from 'react'

// Converts ISO date string to a human-readable format
function date(isoDate) {
    const d = new Date(isoDate)
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const formattedDate = d.toLocaleString("en-US", options)
    return formattedDate
}


function VerticalCard({ element }) {

    function visitURL() {
        window.open(`${element.url}`)
    }

    return (
        <>
            <article className='md:max-w-[65vw] flex flex-col gap-5
            font-onest border border-gray-500 p-7 hover:text-black/75 dark:hover:text-white/90'>
                {element.image_url ?
                    <div className='cursor-pointer'>
                        <img src={`https://res.cloudinary.com/dpmcuhjyw/image/fetch/f_auto,q_auto,w_400/${element.image_url}`} alt="" className='max-h-full min-w-full rounded' />
                    </div>
                    : ""}
                <div className='overflow-hidden flex flex-col gap-3 cursor-pointer'>
                    <h2 className='font-bold text-2xl flex justify-start'>{element.title}</h2>
                    <p className=''>{element.summary}</p>
                    <p className='self-end text-right'>- {element.authors?.[0] ? element.authors[0].name + ", " : ""}{element.news_site ? element.news_site : ""},<br />{date(element.published_at ? element.published_at : "")}</p>
                    <a href={`${element.url}`} className="self-end text-right visited:text-purple-700 underline">
            Read full article
          </a>
                </div>
            </article>
        </>
    )
}

export default VerticalCard
