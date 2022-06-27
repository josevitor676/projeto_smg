import { Menu } from "../../Components/Menu"
import {useContext, useEffect, useState} from 'react';
import {ProductContext} from "../../Provider/GetProduct"
import ProductCard from "../../Components/CardProduct";
import  { Center, Flex, Input, Text, Button } from "@chakra-ui/react";
import { FaSearch, FaBox } from "react-icons/fa";
import ProductFiltered from "../../Components/CardFIlter";
import {GiArchiveRegister} from "react-icons/gi"
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";


export const Home = ({authenticated}) => {
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
            toast("Nenhum Produto Encontrado")
            
        }
        
        setFiltered(true)
        setFilteredProduct(filtered)
    }
    
    if (!authenticated) {
        return <Redirect to="/login"/>
    }

    return (
        <Flex  bg="#DAE1E7" flexDirection="column" h="100vh">
            <Flex 
            //mt="6px" 
            p="12px"
            justifyContent={["center" ,"space-between"]} 
            borderBottom="1px solid #142850"
            flexDirection={["column", "row"]}
            alignItems="center"
            >
                <Flex alignItems="center" mb={["10px", "0px"]} mr="5px">
                    <Text marginRight="5px" color="#142850" fontFamily="Kanit, sans-serif" fontSize={["20px", "15px", "25px"]} cursor="pointer" onClick={() => {
                        setFiltered(false)
                    }}>SafeStock</Text>
                    <FaBox color="#142850"/>
                </Flex>
                <Flex as="form" mb={["10px", "0px"]}>
                    <Input
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Pesquisar por item" 
                        name="title" 
                        w={["70vw","30vw","40vw"]} 
                        h={["30px"]} 
                        fontFamily="Kanit, sans-serif"
                        borderColor="#142850"
                        focusBorderColor="#142850"
                        _hover={{borderColor:"#142850"}}
                        color="#142850"
                    /> 
                    <Button
                        borderRadius="5px"
                        ml="2"
                        w="30px"
                        h={["30px"]}
                        fontSize="2xl"
                        bg="#142850"
                        _hover={{bg: "#142850c0"}}
                        onClick={showProduct}
                        >
                        <FaSearch color="#ffff" fontSize="25px"/>
                    </Button>
                </Flex>
                <Menu/>
            </Flex>
            {product.length === 0 ? 
                <Flex justifyContent="center" alignItems="center" mt={["80px" ,"130px"]} flexDirection="column">
                    <Text 
                    w={["300px", "400px","600px"]} 
                    textAlign="center" 
                    fontSize={["18px", "20px","28px"]} 
                    mb="10px"
                    color="#142850"
                    fontWeight="bold"
                    fontFamily="Poppins, sans-serif"
                    >
                        No momento você não tem nenhum produto cadastro
                    </Text>
                    <GiArchiveRegister fontSize="200px" color="#142850"/>
                </Flex>
                :
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
            }
            
        </Flex>
    )
}