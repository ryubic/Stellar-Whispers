import React, { useState } from 'react'

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
            <article className='md:max-w-[67vw] flex flex-col lg:flex-row gap-5
            font-onest border border-gray-500 p-7 hover:text-black/85 cursor-default'>
                {element.image_url ?
                    <div className='flex md:max-[30vw] lg:min-w-[30vw] justify-center'>
                        <img src={element.image_url} alt="" className='rounded min-w-full max-h-[250px]  sm:max-h-[full] sm:min-w-[425px] lg:min-w-full cursor-pointer'
                        onClick={visitURL}/>
                    </div>
                    : ""}
                <div className=' overflow-hidden flex flex-col gap-3 w-full'>
                    <div className='font-bold text-2xl flex justify-start cursor-pointer' onClick={visitURL} >{element.title}</div>
                    <div className='cursor-pointer' onClick={visitURL} >{element.summary}</div>
                    <div className='self-end text-right'>- {element.authors[0]? element.authors[0].name +', ':""}{element.news_site? element.news_site:""},<br />{date(element.published_at? element.published_at:"")}</div>
                </div>
            </article>
        </>
    )
}

export default HorizontalCard
