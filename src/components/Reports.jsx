import HorizontalCard from './HorizontalCard'
import useAppContext from '../context/context'
import VerticalCard from './VerticalCard'
import fetchData from '../backend'

function Reports() {
    const { reportsResponse, reportsArray, setReportsResponse, isSmallScreen } = useAppContext()

    return (
        <>
            {reportsArray?.length > 0 ? (
                <>
                    <div className='lg:mx-[4vw] flex'>
                        <div className='md:min-w-[65vw] '>
                            {/* Every third (index) element of the array will be rendered in a vertical box */}
                            {isSmallScreen ?
                                reportsArray.map((element) => {
                                    return <HorizontalCard key={element.title} element={element} />
                                }) :
                                reportsArray.filter((e, index) => index % 3 !== 0 || index === 0).map((element) => {
                                    return <HorizontalCard key={element.title} element={element} />
                                })
                            }
                        </div>
                        <div className='hidden md:block'>
                            {reportsArray.map((element) => {
                                if (reportsArray.indexOf(element) % 3 !== 0 || reportsArray.indexOf(element) === 0) {
                                    return;
                                }
                                return <VerticalCard key={element.title} element={element} />
                            })}
                        </div>
                    </div>
                    <div className='w-screen flex justify-center py-5'>
                        <button
                            onClick={() => {
                                if (reportsResponse?.next) {
                                    fetchData(reportsResponse.next, setReportsResponse)
                                }
                                return
                            }}
                            className='font-onest font-bold text-2xl bg-[#1c1d22] dark:bg-white/80 text-white dark:text-black rounded-3xl hover:rounded-lg px-4 py-2 active:scale-95 transition-all duration-500'>Load more</button>
                    </div>
                </>

            ) : (
                <div className='h-[70vh] w-full text-2xl font-serif flex justify-center items-center'>error: No reports are available</div>
            )}

        </>
    )
}

export default Reports
