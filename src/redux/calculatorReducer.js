const UPDATE_NUMBER = 'UPDATE-NUMBER';
const UPDATE_NUMBER_TEXTAREA = 'UPDATE-NUMBER-TEXT-AREA';

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
    expression: ''
}


const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NUMBER_TEXTAREA:
            let newText;
            if (action.text.charAt(0) === '=') {
                newText = action.text.slice(1);
            } else { newText = action.text }
            if (isNaN(newText)) { return state; } else {
                state.expression = newText;
                return state;
            }

        case UPDATE_NUMBER:
            state.expression += action.text;
            return state;
        default: return state;
    }

}

export const updateExpressionCreater = (text) => (
    { type: UPDATE_NUMBER, text: text });

export const updateExpressionFromTextaresCreater = (text) => (
    { type: UPDATE_NUMBER_TEXTAREA, text: text });

export default calculatorReducer;