import LocalStorageManager from './js/localStorage.js'

class App extends LocalStorageManager{
    constructor(){
        super('app')
        this.saveState([{
            isDone: 0, 
            text: 'To buy some milk', 
            date: '14.07.2020', 
            id: '123' 
        }])
        
    }

    render(){
        
    }

}
const localStorageManager= new App('app')
console.log(localStorageManager.state)
localStorageManager.state = [{ isDone: 1, text: 'To buy some milk with cookies', date: '0586873456', id: 'jfeiuwfwef' }]
console.log(localStorageManager.state)



// function User({fn, ln}){
//     secondName="Human";
//     getName=()=>{
//         console.log('name: '+this.name+'\nsecond name: ' +this.secondName)
//     }
//     this.firstName=fn;
//     this.lastName=ln;
//     getFullName=()=>{
//         console.log(this.firstName+this.lastName)
//     }
//     this.fullName = `${this.firstName} ${this.lastName}`;
//     this.getFullName = () => console.log(this.fullName);
// }
// User.getName()

// const user=new User({fn: 'Firstname', ln: 'LastName'})
// user.getFullName()
// user.getName()