let initialState ={
    NumberButtons: [
        {name:'0'},
        {name:'1'},
        {name:'2'},
        {name:'3'},
        {name:'4'},
        {name:'5'},
        {name:'6'},
        {name:'7'},
        {name:'8'},
        {name:'9'}
    ]
}


const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }

}

export default calculatorReducer;