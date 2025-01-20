export default async function fetchData(setInto) {
    try {
        let response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9b0b2611cfdf439dbc4f55817cd20edb')
        if (!response.ok) {
            console.log("error fetching data");
        }
        let data = await response.json()
        setInto(data.articles)
    } catch (error) {
        console.error(error.message)
    }
}
