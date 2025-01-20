import apiKey from "./apiKey";

let api = `https://newsapi.org/v2/everything?q=all&apiKey=${apiKey}`
export default async function fetchData(setInto) {
    try {
        let response = await fetch(api)
        if (!response.ok) {
            console.log("error fetching data");
        }
        let data = await response.json()
        setInto(data.articles)
    } catch (error) {
        console.error(error.message)
    }
}
