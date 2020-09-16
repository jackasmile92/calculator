const UPDATE_NUMBER = 'UPDATE-NUMBER';
const UPDATE_NUMBER_TEXTAREA = 'UPDATE-NUMBER-TEXT-AREA';
const CLEAR_TEXTAREA = 'CLEAR-TEXT-AREA';
const ACTION_BUTTON = 'ACTION_BUTTON';
const SOLVE = 'SOLVE';
const DELETE_LAST_SYMBOL = 'DELETE-LAST-SYMBOL';

let actions = ['+', '-', '*', '/'];

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
    wholeExpression: '',
    dot: false,
    isLastCharAction: false
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
                newText = action.text.substring(state.wholeExpression.length, action.text.length).slice(1);
            } else { newText = action.text.substring(state.wholeExpression.length, action.text.length) }

            if (isNaN(newText) && newText.charAt(newText.length - 1) !== '.') { return state; } else {
                if (newText.charAt(0) === '0' && newText.length > 1 ){
                    newText = newText.slice(1);
                }
                if (newText.charAt(newText.length - 1) === '.') {
                    if (state.dot === true) {
                        return state;
                    } else {
                        state.dot = true;
                    }
                }
                state.expression = newText;
                state.isLastCharAction = false;
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
                if (state.expression === '0') {
                    state.expression = action.text;
                } else {
                    state.expression += action.text;
                }
                state.isLastCharAction = false;
            }
            return state;

        case CLEAR_TEXTAREA:
            state.expression = '';
            state.wholeExpression = '';
            state.dot = false;
            state.isLastCharAction = false;

            return state;
        case ACTION_BUTTON:
            if (state.expression + state.wholeExpression !== '') {
                if (state.isLastCharAction === false) {
                    state.wholeExpression += state.expression + action.text;
                    state.expression = '';
                    state.isLastCharAction = true;
                } else {
                    state.wholeExpression = state.wholeExpression.slice(0, state.wholeExpression.length - 1);
                    state.wholeExpression += action.text;
                }
                state.dot = false;
            }
            return state;
        case SOLVE:
            if (state.expression + state.wholeExpression !== '') {

                let expression = state.wholeExpression + state.expression;
                if (actions.includes(expression.charAt(expression.length - 1))) {
                    expression = expression.slice(0, expression.length - 1);
                }

                expression = eval(expression).toString();
                state.wholeExpression = '';
                state.dot = false;
                state.isLastCharAction = false;
                state.expression = expression;
            }
            return state;
        case DELETE_LAST_SYMBOL:
            if (state.expression + state.wholeExpression !== '') {
                if (state.expression === '') {
                    if (state.isLastCharAction === true) {
                        state.isLastCharAction = false;
                    }

                    if (state.wholeExpression.charAt(state.wholeExpression.length - 1) === '.') {
                        state.dot = false;
                    }
                    state.wholeExpression = state.wholeExpression.slice(0, state.wholeExpression.length - 1);

                } else {
                    if (state.expression.charAt(state.expression.length - 1) === '.') {
                        state.dot = false;
                    }
                    state.expression = state.expression.slice(0, state.expression.length - 1);

                }
            }
            return state;
        default: return state;
    }

}

export const updateExpressionCreater = (text) => (
    { type: UPDATE_NUMBER, text: text });

export const updateExpressionFromTextaresCreater = (text) => (
    { type: UPDATE_NUMBER_TEXTAREA, text: text });

export const clearTextaresCreater = () => (
    { type: CLEAR_TEXTAREA });

export const actionButtonPressed = (text) => (
    { type: ACTION_BUTTON, text: text }
)

export const solveButtonPressed = () => (
    { type: SOLVE }
);

export const deletePreviousSymbol = () => (
    { type: DELETE_LAST_SYMBOL }
)

export default calculatorReducer;