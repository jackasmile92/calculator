const UPDATE_NUMBER = 'UPDATE-NUMBER';

let initialState = {
    NumberButtons: [
        { name: '0' },
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
        { name: '6' },
        { name: '7' },
        { name: '8' },
        { name: '9' }
    ],
    expression: '0'
}


const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NUMBER:
            state.expression += action.text;
            return state;
        default: return state;
    }

}

export const updateExpressionCreater = (text) => (
    { type: UPDATE_NUMBER, text: text });

export default calculatorReducer;