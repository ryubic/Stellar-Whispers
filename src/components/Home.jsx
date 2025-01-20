import HorizontalCard from './HorizontalCard'
import useAppContext from '../context/context'

function Home() {
    const {data, darkMode, togleTheme} = useAppContext()

    return (
        <>
            <div className='md:mx-[4vw] py-2 gird'>
                {data.map((element)=>{
                    if (element.author === null) {
                        return;
                    }
                    return <HorizontalCard key={element.title} element={element} />
                })}
            </div>
        </>
    )
}

export default Home
