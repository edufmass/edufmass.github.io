const urlApi = "https://reqres.in/api/users";

function buscarEnServicioRest(page) {
    let url = urlApi;
    if(page > 0) {
        url += '?page=' + page;
    }
    return fetch(url);
}
