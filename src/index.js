import LocalStorageManager from './js/localStorage.js'
const log = console.log //10000 days of saved time

//getting elements
const form = document.querySelector('form')
const input = document.getElementById('addInput')
const clear = document.getElementById('clearLS')


class Task extends LocalStorageManager {
    constructor(text) {
        super('app')
        this.isDone = 0,
        this.text = text,
        this.date = Date.now(),
        this.id = Date.now().toString()
    }
}

class App extends LocalStorageManager {
    static displayItems = () => {
        const items = LocalStorageManager.state;
        items.forEach(item => App.addItemToList(item))
    }

    static addItemToList = (item) => {
        const ul = document.getElementById('itemList')
        const itemTemplate = document.getElementById('itemTemplate')
        const itemElement = itemTemplate.content.cloneNode(true);
        const checkbox = itemElement.querySelector('input')
        const label = itemElement.querySelector('label')
        label.append(item.text)
        ul.appendChild(itemElement)
    }
    constructor() {
        super('app')
        const state = this.state
    }
}
//localStorageManager state
const localStorageManager = new App('app')
const data = localStorageManager.state

let itemsArray = localStorage.getItem('app') ? data : []
// localStorage.setItem('app', JSON.stringify(itemsArray))

//count
const counterFunc = () => {
    const counter = document.getElementById('counter')
    const count = itemsArray.length
    counter.innerText = count
}
//on submit
form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = input.value
    // const item = addItem(inputValue)
    const task = new Task(inputValue)
    input.value = ''
    //itemsArray.push(item)
    console.log(task)
    App.addItemToList(task)
})

clear.addEventListener('click', () => {
    localStorage.removeItem('app')
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})
