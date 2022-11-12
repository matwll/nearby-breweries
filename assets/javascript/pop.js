const popOver = document.querySelector('.popOver');

document.querySelector(".input-field").addEventListener('click', ()=> {
    popOver.innerHTML = '';

    localStorage.history.split(',').forEach(val => {
        popOver.innerHTML += `<button class="btn">${val}</button>`;
    });
    popOver.style.display = 'block';
})
