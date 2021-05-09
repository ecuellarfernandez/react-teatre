export function fetchDataHelper(url){
    return fetch(url)
    .then(response=> response.json())
    .catch(e=>console.log(e.message))
}