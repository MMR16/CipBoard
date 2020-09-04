const copyBtn = document.getElementById('cpy');
const pstBtn = document.getElementById('pst');

copyBtn.addEventListener('click', () => {
    const txt = document.getElementById('txt').value;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(txt);
    } else {
        alert('This Feature is not available at this moment to your browser, Plase try Anothe one');
    }

});

pstBtn.addEventListener('click', () => {
    const txt2 = document.querySelectorAll('textarea')[1];
    if (navigator.clipboard.readText) {
        navigator.clipboard.readText().then(text => txt2.innerText = text);
    } else {
        alert('This Feature is not available at this moment to your browser, Plase try Anothe one');
    }
})