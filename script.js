const addlisthead = document.getElementById('addListHead');
const addlistmain = document.getElementById('add-list');
const list = document.getElementById('list');
const addList = document.getElementById('addList');
const cancelList = document.getElementById('delete');
const plusList = document.getElementById('plus');
const mainList = document.getElementById('main-list');
const addButton = document.getElementById('list-button');
const containerList = document.getElementById('list-container');
let listCard = [];

addlisthead.addEventListener('click', () => {
    list.classList.toggle('bang');
    addList.classList.add('hidden');
});
plusList.addEventListener('click', () => {
    list.classList.toggle('bang');
    addList.classList.toggle('hidden');
});
cancelList.addEventListener('click', () => {
    list.classList.remove('bang');
});


addButton.addEventListener('click', () => {
    saveData();
    list.classList.remove('bang');
    writelist()
});




function saveData(e) {

    const listCard = {
        title: document.getElementById('title-list').value,
        teks: document.getElementById('large').value,
        id: Date.now()
    };

    const allData = JSON.parse(localStorage.getItem('save-title')) || [];

    allData.push(listCard);

    localStorage.setItem('save-title', JSON.stringify(allData));

}

function writelist() {
    const allData = JSON.parse(localStorage.getItem('save-title'));
    if (!allData || allData.length === 0) {
        addList.classList.remove('hidden');
        containerList.innerHTML = ''
    } else {
        addList.classList.add('hidden')
        containerList.innerHTML = allData.map(listData =>
            `<div class="list-note" id="list-note" data-id='${listData.id}'>
                    <div class="head-note">                
                        <h2>${listData.title}</h2>
                        <p class="delete-list">x</p>
                    </div>
                    <p>${listData.teks}</p>
        </div>`
        ).join('')
    }

}

containerList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-list')) { // Memilih class/target 
        const listNote = e.target.closest('.list-note'); //parent untuk elemen
        const deleteId = parseInt(listNote.getAttribute('data-id')); // untuk menentukkan id atau untuk menhapus id

        let allData = JSON.parse(localStorage.getItem('save-title')) || []; // mengambil data kembali
        allData = allData.filter(item => item.id !== deleteId); // sortir data
        localStorage.setItem('save-title', JSON.stringify(allData)); // memasukkan kembali data


        listNote.remove(); // menghapus parent 
    }
})




document.addEventListener('DOMContentLoaded', () => {
    writelist()
})


// localStorage.clear();