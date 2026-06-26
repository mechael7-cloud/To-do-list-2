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
    addList.classList.toggle('hidden');
});
// plusList.addEventListener('click', () => {
//     list.classList.toggle('bang');
//     addList.classList.toggle('hidden');
//     console.log('hello world');
// });
cancelList.addEventListener('click', () => {
    list.classList.remove('bang');
    addList.classList.remove('hidden');

});

addButton.addEventListener('click', () => {
    listCard.push({
        title: document.getElementById('title-list').value,
        teks: document.getElementById('large').value
    });
    localStorage.setItem('save-title', JSON.stringify(listCard));
});

const getData = JSON.parse(localStorage.getItem('save-title')) || [];


function writelist() {
    const getData = JSON.parse(localStorage.getItem('save-title'));
    if (!getData || getData.lenght === 0) {
        addList.classList.remove('hidden');
    } else {
        containerList.innerHTML = getData.map(listData =>
        `<div class="list-note">
                    <div class="head-note">                
                        <h2>${listData.title}</h2>
                        <p>X</p>
                    </div>
                    <p>${listData.teks}</p>
        </div>`
        ).join('')
    }
}
document.addEventListener('DOMContentLoaded', () => {
    writelist()
})


// localStorage.clear();