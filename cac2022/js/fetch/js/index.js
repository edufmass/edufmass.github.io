async function buscar(texto) {
    
    const response = await buscarEnServicioRest(texto);

    if(response.ok) {
    const data = response.json();
    data.then( json => Users(json.data));
    } else {
        console.log(response.status);
    }
    //recorrer el json.data
    //e ir filtrando ya sea los nombres o los apellidos que contegan
    //const usuariosFiltrados = response.data.filter(u => u.first_name.includes(texto) || u.last_name.includes(texto));
    //Users(usuariosFiltrados);
}

async function paginar(pos) {
    const response = await buscarEnServicioRest(pos);

    if(response.ok) {
        const data = response.json();
        data.then( json => {
            Users(json.data);
            Paginador(json,pos);
        });
    } else {
        console.log(response.status);
    }
}

//funcion principal
async function render() {
    //invoco la funcion que esta en el archivo navbar.js
    const parametros = {
        contenedor: 'navbar',
        titulo: 'MI NAVBAR',
    };
    Navbar(parametros);

    // no cargo más desde el json de script.js
    //Users(json.data);

    // traigo toda la lista utilizando la lista
    const response = await buscarEnServicioRest(0);

    if(response.ok) {
        const data = response.json();
        data.then( json => {
            Users(json.data);
            //const { page, per_page, total, total_pages } = json;
            Paginador(json, 1);
        });
    } else {
        console.log(response.status);
    }
}

//invocar a la funcion
render();
