export function GetMoviesList({value, searchByValue, sortByValue, genres}) {
    let url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortByValue}&sortOrder=desc&search=${value}&searchBy=${searchByValue}&limit=9`;
    if (genres){
        url = url + `&filter=${genres}`;
    }
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const event = new CustomEvent('gotMoviesList', {
                detail: data
            });
            document.body.dispatchEvent(event);
        });
}

export function getMovieInfo(id){
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const event = new CustomEvent('gotMovieInfo', {
                detail: data
            });
            document.body.dispatchEvent(event);
        });
}
