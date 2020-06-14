export function GetMoviesList({query, searchByValue, sortByValue, genres}) {
    let url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByValue}&sortOrder=desc&search=${query}&searchBy=${searchByValue}&limit=9`;
    if (genres){
        url = url + `&filter=${genres.join('%2C%20').replace(' ','%20')}`;
    }
   return fetch(url).then((response) =>  response.json())
}

export function getMovieInfo(id){
    return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
        .then((response) =>  response.json());
}
