const addlisthead = document.getElementById('addListHead');
const addlistmain = document.getElementById('add-list');
const list = document.getElementById('list');
const addList = document.getElementById('addList');
const cancelList = document.getElementById('delete');
const plusList = document.getElementById('plus');
const mainList = document.getElementById('main-list');
const addButton = document.getElementById('list-button');
const containerList = document.getElementById('list container')

addlisthead.addEventListener('click', () => {
    list.classList.toggle('bang');
    addList.classList.toggle('hidden');
});
plusList.addEventListener('click', () => {
    list.classList.toggle('bang');
    addList.classList.toggle('hidden');
    console.log('hello world');
});
cancelList.addEventListener('click', () => {
    list.classList.remove('bang');
    addList.classList.remove('hidden');
}); 

addButton.addEventListener('click', () => {
    const resaultForm = {
        title : document.getElementById('title-list').value,
        teks : document.getElementById('large').value
    };
    localStorage.setItem('save-title', JSON.stringify(resaultForm));
});

function writelist () {
    const getData = JSON.parse(localStorage.getItem('save-title'));
    if(getData === 0) {
        addList.classList.remove('hidden');
    } else {
        containerList.innerHTML = `
        <div class="list-note">
            <div class="note">
                <h2>
            </div>
        </div>`
    }
    console.log(getdata);
}
writelist()

    
// localStorage.clear();