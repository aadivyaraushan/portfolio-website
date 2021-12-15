import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false };

const ThemeReducer = (state, action) => {
    if(action.type === "TOGGLE")
    {
        return {darkMode: !state.darkMode}
    }
    else
    {
        return state;
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
