import { createContext } from "react";
import axios from "axios";

export const EditContext = createContext()

const EditProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("@Token:User")) || ""

    const EditProduct = (productId, dadosProduct) => {
        axios.patch(`https://api-smg.herokuapp.com/api/products/${productId}/`, dadosProduct, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then((response) => console.log('Produto Editado com sucesso'))
        .catch((err) => console.log(err))
    }

    return (
        <EditContext.Provider value={{EditProduct}}>
            {children}
        </EditContext.Provider>
    )
}

export default EditProvider