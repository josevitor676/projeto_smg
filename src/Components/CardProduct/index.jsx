import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react"
import { ExcluirContext } from "../../Provider/Excluir"
import { useContext } from "react"
import EditarModal from "../ModalEditar"

const ProductCard = ({dadosProducts}) => {
    const {ExcluirProduct} = useContext(ExcluirContext)
    
    const {
        name,
        description, 
        category, 
        id, 
        which_store, 
        price_paid, 
        price_to_sell, 
        quantity, 
        purchase_data
    } = dadosProducts


    return (
        <Box 
        as="li" 
        id={id} 
        border="1px solid black" 
        borderRadius="5px" 
        w="auto"
        h="340px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mt="20px"
        ml="20px"
        p="5px"
        >
            <Text w="300px">{name}</Text>
            <Text w="300px">{description}</Text>
            <Text>{category}</Text>
            <Text>{which_store}</Text>
            <Text>{price_paid.toFixed(2)}</Text>
            <Text>{price_to_sell.toFixed(2)}</Text>
            <Text>{quantity}</Text>
            <Text>{purchase_data}</Text>

            <ButtonGroup>
                <EditarModal idProduct={id}/>
                <Button onClick={() => {
                  ExcluirProduct(id) 
                }}>Excluir</Button>
            </ButtonGroup>
        </Box>
    )
}

export default ProductCard