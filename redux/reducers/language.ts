const initialState = {
    language: 'ru',
}

const language = (state = initialState, action: any) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            const newLanguage = state.language === 'en' ? 'ru' : 'en'
            return {
                ...state,
                language: newLanguage
            }
        default:
            return state
    }
}

export default language