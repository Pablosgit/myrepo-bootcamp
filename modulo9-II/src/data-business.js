
const getActors = (param) =>{
    return fetch("https://rickandmortyapi.com/api/character/?page="+param)
    .then(response =>
        response.json()
    )
};


const getEpisodes = () =>{
    return fetch("https://rickandmortyapi.com/api/episode")
    .then(response =>
        response.json()
    )
};



export { getActors, getEpisodes }