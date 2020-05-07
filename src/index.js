/*small adjustments, ti doesnt display the items yet, im figuring out how
the template tag works. Added id's, removed the 'field' and added the key 'app',
I set the counter to be the length of the array for now.
*/
import LocalStorageManager from './js/localStorage.js'
const log = console.log //10000 days of saved time

//getting elements
const form = document.querySelector('form')
const ul = document.getElementById('itemList')
const input = document.getElementById('addInput')
const clear = document.getElementById('clearLS')
const itemTemplate = document.getElementById('itemTemplate')

class App extends LocalStorageManager {
    constructor() {
        super('app')
        const state = this.state
    }
    render() {
        counterFunc()
        displayItems()
    }

}

//localStorageManager state
const localStorageManager = new App('app')
const data = localStorageManager.state
log(localStorageManager.state) //[{...},{...}]

let itemsArray = localStorage.getItem('app') ? data : []
localStorage.setItem('app', JSON.stringify(itemsArray))

const displayItems = (data) => {
    data.forEach(item => {
        const itemElement = document.importNode(itemTemplate.content, true)
        const checkbox = itemElement.querySelector('input')
        const label = itemElement.querySelector('label')
        checkbox.id = item.id
        checkbox.checked = item.isDone
        label.htmlFor = item.id
        label.append(item.text)
        ul.appendChild(itemElement)
    }
    )
}

//count
const counterFunc = () => {
    const counter = document.getElementById('counter')
    const count = itemsArray.length
    counter.innerText = count
}

// //remove item
// ul.addEventListener('click', event => {
//     if (event.target.classList.contains('remove')) {
//         const selectedItem = itemsArray.find(item => item.id === event.target.id)
//          ...
//     }
// })

const save = () => {
    localStorage.setItem('app', JSON.stringify(itemsArray))
}

//on submit
form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = input.value
    const item = addItem(inputValue)
    input.value = ''
    itemsArray.push(item)
    save()

})

//item default state
const addItem = (text) => {
    return { isDone: 0, text: text, createdAt: Date.now(), id: Date.now().toString() }
}

clear.addEventListener('click', () => {
    localStorage.removeItem('app')
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})

data.forEach(item => {
    addItem(item);
});
