function Paginador(json, p) {

    const { page, per_page, total, total_pages } = json;

    //console.log(page,per_page,total,total_pages)

    const html = `
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item ${(p == 1) ? 'disabled' : ''}">
                    <a href="javascript:void(0)" onClick="paginar(${p-1})" class="page-link">Previous</a>
                </li>

                ${genPags(total_pages, p)}

                <li class="page-item ${(p == total_pages) ? 'disabled' : ''}">
                    <a class="page-link" href="javascript:void(0)" onClick="paginar(${p+1})">Next</a>
                </li>
            </ul>
        </nav>
    `;

    document.getElementById('paginator').innerHTML = html;

    //return html;
    // ${userJson.map(user=>User(user)).join('')}

    /*
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
                */
}

function genPags(x, p) {
    let res = '';
    for(let i = 1; i<= x; i++)
        res += `<li class="page-item ${(i == p) ? 'active' : ''}"><a class="page-link" href="javascript:void(0)" onClick="paginar(${i})">${i}</a></li>`;
    return res;
}
