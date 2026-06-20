const addlisthead = document.getElementById('addListHead');
const addlistmain = document.querySelectorAll('.add-list');
const list = document.getElementById('list');

// addlisthead.forEach(click => click.addEventListener('click', () => {
//     if (list.style.display = 'none') {
//         list.style.display = 'block'
//     }
// }))
// addlistmain.forEach(click => click.addEventListener('click', () => {
    
// }))


addlisthead.addEventListener('click', () => {
    list.classList.toggle('bang')
    console.log('hello world')
})

