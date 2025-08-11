import HorizontalCard from "./HorizontalCard";
import useAppContext from "../context/context";
import fetchData from "../backend";

function Articles() {
  const {
    articlesResponse,
    articlesArray,
    setArticlesResponse,
    isSmallScreen,
  } = useAppContext();

  return (
    <>
      {articlesArray?.length > 0 ? (
        <>
          <div className="">
            <div className=" ">
              {articlesArray.map((element) => (
                <HorizontalCard key={element.title} element={element} />
              ))}
            </div>
          </div>
          <div className="w-screen flex justify-center py-5">
            <button
              onClick={() => {
                if (articlesResponse?.next) {
                  fetchData(articlesResponse.next, setArticlesResponse);
                }
                return;
              }}
              className="font-onest font-bold text-2xl bg-[#1c1d22] text-gray-300 dark:bg-gray-300 dark:text-black rounded-3xl md:hover:rounded-lg px-4 py-2 active:scale-95 transition-all duration-500"
            >
              Read more
            </button>
          </div>
        </>
      ) : (
        <div className="h-[70vh] w-full text-2xl font-serif flex justify-center items-center">
          error: No articles are available
        </div>
      )}
    </>
  );
}

export default Articles;
