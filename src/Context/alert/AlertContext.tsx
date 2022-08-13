import { useReducer, createContext, ReactNode } from "react";
import alertReducers from "./AlertReducers"

type AlertProviderProps = {
    children: ReactNode
}

const AlertContext = createContext({})


export const AlertProvider = ({ children }: AlertProviderProps) => {
    const intialState = null
    const [state, dispatch] = useReducer(alertReducers, intialState)

    const setAlert = (msg: string, type: string) => {
        dispatch({
            type: "SET_ALERT",
            payload: { msg, type },
        })

        setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000)
    }


    return (
        <AlertContext.Provider value={{ alert: state, setAlert }}>
            {children}
        </AlertContext.Provider >
    )


}

export default AlertContext
