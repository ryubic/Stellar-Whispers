import React from 'react'

function date(isoDate){
    const d = new Date(isoDate)
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const formattedDate = d.toLocaleString("en-US", options)
    return formattedDate
}

function HorizontalCard({ element }) {
    function visitURL() {
        // window.location.href= `${element.url}`
        window.open(`${element.url}`)
    }

    return (
        <>
            <article 
            onDoubleClick={visitURL} 
            className='md:max-w-[67vw] flex flex-col lg:flex-row gap-5
            font-onest border-b sm:border border-gray-500 p-7 hover:text-black/85 dark:hover:text-white/90 cursor-default'>
                {element.image_url ?
                    <div className='flex justify-center'>
                        <img src={element.image_url} alt="" className='rounded min-w-full max-h-[250px] sm:max-h-[full] lg:max-w-[35vw]'
                        />
                    </div>
                    : ""}
                <div className=' overflow-hidden flex flex-col gap-3 w-full'>
                    <div className='font-bold text-2xl flex justify-start'>{element.title}</div>
                    <div>{element.summary}</div>
                    <div className='self-end text-right'>- {element.authors[0]? element.authors[0].name +', ':""}{element.news_site? element.news_site:""},<br />{date(element.published_at? element.published_at:"")}</div>
                </div>
            </article>
        </>
    )
}

export default HorizontalCard
