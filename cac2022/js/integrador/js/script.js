document.addEventListener('DOMContentLoaded', function() {

    const frmTickets = document.getElementById('frmTickets');
    const btnClear = document.getElementById('btnClear');
    const spanSubTotal = document.getElementById('subTotal');

    btnClear.addEventListener("click", () => { btnClear_click(spanSubTotal) });
    frmTickets.addEventListener("submit", (e) => { frmTickets_submit(e,spanSubTotal) });
});


const btnClear_click = (spnST) => {
    document.getElementById("frmTickets").reset();
    spnST.innerText = '';
}

const frmTickets_submit  = (e, spnST) => {
    e.preventDefault();
    let frmData = new FormData(e.currentTarget);
    let total = parseInt(frmData.get('amount')) * 200 * (100 - parseInt(frmData.get('category'))) / 100;
    spnST.innerText = total;
}
