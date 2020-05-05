// Write your code right here)
// import './index.sass';

//  const template1 = document.getElementById('h1-template');
//  const app = document.getElementById('app');
//  const changed = template1.content.cloneNode(true);

//  app.appendChild(changed);

//////////////it's a mess now, it will get better :D
//counter in development now
import LocalStorageManager from './js/localStorage.js'

class App extends LocalStorageManager {
    constructor() {
        super('app')
        const state = this.state
    }
    render() {

    }

}
//getting elements
const form = document.querySelector('form')
const ul = document.getElementById('itemList')
const input = document.getElementById('addInput')
const clear = document.getElementById('clearLS')

//local storage
const data = JSON.parse(localStorage.getItem('items'))
let itemsArray = localStorage.getItem('items') ? data : []
localStorage.setItem('items', JSON.stringify(itemsArray))

//localStorageManager state
const localStorageManager = new App('app')
console.log(localStorageManager.state)
localStorageManager.state = [{ isDone: 1, text: 'To buy some milk with cookies', date: '0586873456', id: 'jfeiuwfwef' }]
console.log(localStorageManager.state)

//counter function
// const createCounter=()=>{
//     let i=0;
//    return ()=>{
//        return i++
//     }
// } 

//active tasks
const counter=document.getElementById('counter')
counter.innerHTML=createCounter()()


const addListItem = (text) => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(text))

    const removeBtn=document.createElement('i')
    const updateBtn=document.createElement('i')
    removeBtn.className="fa fa-times remove"
    updateBtn.className="fa fa-pencil update"
    li.appendChild(removeBtn)
    li.appendChild(updateBtn)
    ul.appendChild(li)
}
//remove item
ul.addEventListener('click', e=>{
    if(e.target.classList.contains('remove')){
        var li = e.target.parentElement
        ul.removeChild(li)
        localStorage.removeItem('items')
    }
})

//on submit
form.addEventListener('submit', event => {
    event.preventDefault()
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    addListItem(input.value)
    input.value=''

})

console.log(data)

data.forEach(item => {
    addListItem(item)
})


clear.addEventListener('click', () => {
    localStorage.removeItem('items')
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    itemsArray=[]
})
