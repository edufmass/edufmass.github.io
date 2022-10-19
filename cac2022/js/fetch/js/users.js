function Users(userJson) {

    const html = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Avatar</th>
            </tr>
            </thead>
            <tbody>
                ${userJson.map(user=>User(user)).join('')}
            </tbody>
        </table>
    `;

    document.getElementById('users').innerHTML = html;

    //return html;
}

function User(user) {
    const html = `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${UserImage(user.avatar)}</td>
        </tr>
    `;
    return html;
}

function UserImage(urlImagePath) {
    return `<img src="${urlImagePath}">`;
}
