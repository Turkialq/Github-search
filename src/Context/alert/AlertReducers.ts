import { ReactNode } from "react"

const alertReducers = (state: any, action: any) => {
    switch (action.type) {
        case "SET_ALERT":
            return action.payload

        case "REMOVE_ALERT":
            return null

        default:
            return state
    }


}

export default alertReducers