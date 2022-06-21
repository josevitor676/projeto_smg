import { createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const RegisterContext = createContext()

const RegisterProvider = ({children}) => {
    const history = useHistory()
    const sendRegister = (dataRegister) => {
        axios
        .post("https://api-smg.herokuapp.com/api/accounts/", dataRegister)
        .then((response) => {
            localStorage.setItem("@infoUser", JSON.stringify(response.data))
            history.push("/login")
        })
        .catch((err) => console.log(err))
    }

    return (
        <RegisterContext.Provider value={{sendRegister}}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterProvider