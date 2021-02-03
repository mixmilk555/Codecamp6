const initialState = {
    count: 0,
    arr: [],
    arrObj: [],
    textName: "",
    textEmail: ""
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return { ...state, count: state.count + 1 };
        case "DECREASE":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        case "ADD_NUM":
            return { ...state, arr: [...state.arr, action.num] }
        case "ADD_PERSON":
            return { ...state, arrObj: [...state.arrObj, { name: "John" }] }
        case "ADD_HISTORY":
            return {
                ...state, arrObj: [...state.arrObj, { name: action.name, email: action.email }]
                , textName: "", textEmail: ""
            }
        case "TEXT_NAME":
            return { ...state, textName: action.textName }
        case "TEXT_EMAIL":
            return { ...state, textEmail: action.textEmail }
        default:
            return state
    }
}

export default reducer