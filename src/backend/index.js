// Function to fetch data and set it into a state
export default async function fetchData(api, setInto) {
    try {
        let response = await fetch(api)
        if (!response.ok) {
            console.log("error fetching data");
        }
        let data = await response.json()
        setInto(data)
    } catch (error) {
        console.error(error.message)
    }
}
