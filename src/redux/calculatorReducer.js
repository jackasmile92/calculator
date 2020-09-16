const UPDATE_NUMBER = 'UPDATE-NUMBER';
const UPDATE_NUMBER_TEXTAREA = 'UPDATE-NUMBER-TEXT-AREA';
const CLEAR_TEXTAREA = 'CLEAR-TEXT-AREA';

let initialState = {
    NumberButtons: [
        { name: '.' },
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
    ActionButtons: [
        { name: '+' },
        { name: '-' },
        { name: '*' },
        { name: '/' }
    ],
    expression: '',
    wholeExpression:'',
    dot: false
}


const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NUMBER_TEXTAREA:
            if (action.text === '.' && state.expression === '') {
                state.expression += '0.';
                state.dot = true;
                return state;
            }
            let newText;
            if (action.text.charAt(0) === '=') {
                newText = action.text.slice(1);
            } else { newText = action.text }
            if (isNaN(newText) && newText.charAt(newText.length - 1) !== '.') { return state; } else {
                if (newText.charAt(newText.length - 1) === '.') {
                    if (state.dot === true) {
                        return state;
                    } else {
                        state.dot = true;
                    }
                }
                state.expression = newText;
                return state;
            }

        case UPDATE_NUMBER:
            if (action.text === '.') {
                if (state.dot === true) {
                    return state;
                } else {
                    state.dot = true;
                }
            }
            if (action.text === '.' && state.expression === '') {
                state.expression += '0.';
                state.dot = true;
            } else {

                state.expression += action.text;
            }

            return state;

        case CLEAR_TEXTAREA:
            state.dot = false;
            state.expression = '';
            state.wholeExpression = '';
            return state;
        default: return state;
    }

}

export const updateExpressionCreater = (text) => (
    { type: UPDATE_NUMBER, text: text });

export const updateExpressionFromTextaresCreater = (text) => (
    { type: UPDATE_NUMBER_TEXTAREA, text: text });

export const clearTextaresCreater = () => (
    { type: CLEAR_TEXTAREA});

export default calculatorReducer;