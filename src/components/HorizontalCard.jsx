import React from 'react'

function HorizontalCard({element}) {   
    console.log(element);
    function visitURL(){
        // window.location.href= `${element.url}`
        window.open(`${element.url}`)
    }

    return (
        <>
            <article onClick={visitURL} className='md:max-w-[65vw] flex gap-5
            font-onest  border-[1px] p-7 border-gray-500 hover:text-black/75'>
                {element.urlToImage ? 
                <div className='md:max-w-[280px] sm:max-w-[200px] cursor-pointer'>
                <img src={element.urlToImage} alt="" className='max-h-full rounded md:min-w-20'/>
                </div>
                : ""}
                <div className=' overflow-hidden flex flex-col gap-3 cursor-pointer'>
                    <div className='font-bold text-2xl flex justify-start'>{element.title}</div>
                    <div className=''>{element.description}</div>
                    <div className='self-end'>- {element.author}</div>
                </div>
            </article>
        </>
    )
}

export default HorizontalCard
