import HorizontalCard from './HorizontalCard'
import useAppContext from '../context/context'
import VerticalCard from './VerticalCard'
import { useEffect, useState } from 'react'

function Reports() {
    const { reportsResponse, setArticlesResponse, darkMode, togleTheme } = useAppContext()
    const [data, setData] = useState([])
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    
    // Check if user is on small screen
    useEffect(() => {
        setIsSmallScreen(window.innerWidth < 768)
    }, [window.innerWidth])

    useState(()=>{
        if (reportsResponse?.results) {
            setData(reportsResponse.results)
        }
    }, [reportsResponse])

    return (
        <>
            { reportsResponse && data?.length > 0 ? (
                <div className='lg:mx-[4vw] flex'>
                    <div className='md:min-w-[65vw] '>
                        {isSmallScreen ?
                            data.map((element) => {
                                return <HorizontalCard key={element.title} element={element} />
                            }) :
                            data.filter((e, index) => index % 3 !== 0 || index === 0).map((element) => {
                                return <HorizontalCard key={element.title} element={element} />
                            })
                        }
                    </div>
                    <div className='hidden md:block'>
                        {data.map((element) => {
                            if (data.indexOf(element) % 3 !== 0 || data.indexOf(element) === 0) {
                                return;
                            }
                            return <VerticalCard key={element.title} element={element} />
                        })}
                    </div>
                </div>
            ) : (
                <div className='h-[70vh] w-full text-2xl font-serif flex justify-center items-center'>fk</div>
            )}

        </>
    )
}

export default Reports
