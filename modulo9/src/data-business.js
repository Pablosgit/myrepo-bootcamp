
const getActors = () =>{
    return fetch("https://www.breakingbadapi.com/api/characters")
    .then(response =>
        response.json()
    )
};


const getEpisodes = () =>{
    return fetch("https://www.breakingbadapi.com/api/episodes")
    .then(response =>
        response.json()
    )
};


const getDeath = () =>{
    return fetch("https://www.breakingbadapi.com/api/deaths")
    .then(response =>
        response.json()
    )
};


const getQuote = (data) =>{
    return fetch("https://www.breakingbadapi.com/api/quotes")
    .then(response =>
        response.json()
    )
};


export { getActors, getEpisodes, getQuote, getDeath }