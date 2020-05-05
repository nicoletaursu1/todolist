class LocalStorageManager{
    field;
    _state=[{
        isDone: 0, 
        text: 'To buy some milk', 
        date: '14.07.2020', 
        id: '123' 
    }]

    constructor(field){
        this.field=field
    }
    
    get state(){
        this._state=JSON.parse(localStorage.getItem('app'));
        return this._state
    }

    set state(state){
        this._state=state
        localStorage.setItem('app', JSON.stringify(this._state))
    }

    
}

export default LocalStorageManager