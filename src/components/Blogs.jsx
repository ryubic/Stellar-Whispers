import HorizontalCard from "./HorizontalCard";
import useAppContext from "../context/context";
import fetchData from "../backend";

function Blogs() {
  const { blogsResponse, blogsArray, setBlogsResponse, isSmallScreen } =
    useAppContext();

  return (
    <>
      {blogsArray?.length > 0 ? (
        <>
          <div className="">
            <div className=" ">
              {blogsArray.map((element) => (
                <HorizontalCard key={element.title} element={element} />
              ))}
            </div>
          </div>
          <div className="w-screen flex justify-center py-5">
            <button
              onClick={() => {
                if (blogsResponse?.next) {
                  fetchData(blogsResponse.next, setBlogsResponse);
                }
                return;
              }}
              className="font-onest font-bold text-2xl bg-[#1c1d22] text-gray-300 dark:bg-gray-300 dark:text-black rounded-3xl active:rounded-lg md:hover:rounded-lg px-4 py-2 active:scale-95 transition-all duration-500"
            >
              Load more
            </button>
          </div>
        </>
      ) : (
        <div className="h-[70vh] w-full text-2xl font-serif flex justify-center items-center">
          error: no blogs are available
        </div>
      )}
    </>
  );
}

export default Blogs;
