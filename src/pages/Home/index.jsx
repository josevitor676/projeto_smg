import { Menu } from "../../Components/Menu"
import {useContext, useEffect, useState} from 'react';
import {ProductContext} from "../../Provider/GetProduct"
import ProductCard from "../../Components/CardProduct";
import  { Center, Flex, Input, Text, Button } from "@chakra-ui/react";
import { FaSearch, FaBox } from "react-icons/fa";
import ProductFiltered from "../../Components/CardFIlter";

export const Home = () => {
    const {product, getProducts} = useContext(ProductContext)
    const [ input, setInput ] = useState("");
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [ filtered, setFiltered ] = useState(false);

    
    useEffect(()=> {
        getProducts()
    }, [product])
    
    
    const showProduct = () => {

        const nameProduct = input.toLowerCase()

        const filtered = product.filter(item => item.name === nameProduct);
        
        if(filtered.length === 0) {
            console.log("Nenhum produto encontrado")
        }
        
        setFiltered(true)
        setFilteredProduct(filtered)
    }
    

    return (
        <>
            <Flex mt="6px" paddingX={['4', '8']} paddingY="2" justifyContent="space-between" borderBottom="1px solid black">

                <Flex alignItems="center">
                    <Text marginRight="5px" fontFamily="Kanit, sans-serif" fontSize="20px" cursor="pointer" onClick={() => {
                        setFiltered(false)
                    }}>SafeStock</Text>
                    <FaBox />
                </Flex>
                <Flex as="form">
                    <Input
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Pesquisar por item" 
                        name="title" 
                        w="35vw" 
                        h="25px" 
                        fontFamily="Kanit, sans-serif"
                    /> 
                    <Button
                        borderRadius="5px"
                        ml="2"
                        w="30px"
                        h="25px"
                        fontSize="2xl"
                        bg="rgba(66, 153, 225, 0.871)"
                        _hover={{bg: "#4299e1ca"}}
                        onClick={showProduct}
                        >
                        <FaSearch color="#ffff" fontSize="25px"/>
                    </Button>
                </Flex>
                <Menu/>
            </Flex>
            <Flex width="100%" flexDirection={["column", "row", "row", "row"]} flexWrap="wrap" >
                {
                    filtered ?
                    filteredProduct.map((data) => (
                        <ProductFiltered key={data.id} dadosProducts={data} setFiltered={setFiltered} setInput={setInput} />
                    ))
                    :
                    product.map((data) => (
                    <ProductCard key={data.id} dadosProducts={data}/>
                    ))
                }
            </Flex>
        </>
    )
}