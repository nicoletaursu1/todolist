
class LocalStorageManager{
    _state = []
    keyName
    
    constructor(key){
        this.keyName=key
    }
    
    get state(){
        this._state=localStorage.getItem('app')
            ? JSON.parse(localStorage.getItem('app'))
            : []
        return this._state
    }

    set state(state){
        this._state=state
        localStorage.setItem('app', JSON.stringify(this._state))
    }

    
}
export default LocalStorageManager