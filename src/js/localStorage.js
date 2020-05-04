class LocalStorageManager{
    field;
    state;

    constructor(field){
        this.field=field
    }
    
    saveState(newState){
        this.state=newState
    }

    getState(){
        return this.state
    }
    
}

export default LocalStorageManager