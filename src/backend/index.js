export default async function fetchData(api,setInto) {
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

// export async function blogLoader() {
//     console.log("loader is running");
    
//     try {
//         let response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/?limit=20')
//         if (!response.ok) {
//             console.log("error fetching data");
//         }
//         let data = await response.json()
//         return data
//     } catch (error) {
//         console.error("Loader error: ", error)
//         return { results: []}
//     }
// }