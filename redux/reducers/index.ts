import {combineReducers} from "redux"
import language from './language'

export const rootReducer = combineReducers({
    language
})

export type RootState = ReturnType<typeof rootReducer>