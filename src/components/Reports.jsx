import HorizontalCard from "./HorizontalCard";
import useAppContext from "../context/context";
import fetchData from "../backend";

function Reports() {
  const { reportsResponse, reportsArray, setReportsResponse, isSmallScreen } =
    useAppContext();

  return (
    <>
      {reportsArray?.length > 0 ? (
        <>
          <div className="">
            <div className=" ">
              {reportsArray.map((element) => (
                <HorizontalCard key={element.title} element={element} />
              ))}
            </div>
          </div>
          <div className="w-screen flex justify-center py-5">
            <button
              onClick={() => {
                if (reportsResponse?.next) {
                  fetchData(reportsResponse.next, setReportsResponse);
                }
                return;
              }}
              className="font-onest font-bold text-2xl bg-[#1c1d22] text-gray-300 dark:bg-gray-300 dark:text-black rounded-3xl md:hover:rounded-lg px-4 py-2 md:active:scale-95 transition-all duration-500"
            >
              Read more
            </button>
          </div>
        </>
      ) : (
        <div className="h-[70vh] w-full text-2xl font-serif flex justify-center items-center">
          error: no reports are available
        </div>
      )}
    </>
  );
}

export default Reports;
