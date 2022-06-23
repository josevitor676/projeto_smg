import { Menu } from "../../Components/Menu"
import {useContext, useEffect} from 'react';
import {ProductContext} from "../../Provider/GetProduct"

export const Home = () => {
    const {product, getProducts} = useContext(ProductContext)

    useEffect(()=> {
        getProducts()
    }, [product])

    return (
        <>
            Home
            <Menu/>
        </>
    )
}