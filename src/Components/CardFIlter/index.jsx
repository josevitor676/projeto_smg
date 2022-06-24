import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react"
import { BiArrowBack } from "react-icons/bi"
import { ExcluirContext } from "../../Provider/Excluir"
import { useContext } from "react"
const ProductFiltered = ({dadosProducts, setFiltered, setInput}) => {

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

    console.log(setInput)

    const backProduct = () => {
        setFiltered(false)
        setInput("")
    }

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
            <Button w="20px" h="20px" onClick={backProduct}>
                <BiArrowBack />
            </Button>
            <Text w="300px">{name}</Text>
            <Text w="300px">{description}</Text>
            <Text>{category}</Text>
            <Text>{which_store}</Text>
            <Text>{price_paid.toFixed(2)}</Text>
            <Text>{price_to_sell.toFixed(2)}</Text>
            <Text>{quantity}</Text>
            <Text>{purchase_data}</Text>

            <ButtonGroup>
                <Button>Editar</Button>
                <Button onClick={() => {
                    ExcluirProduct(id)
                }}>Excluir</Button>
            </ButtonGroup>
        </Box>
    )
}

export default ProductFiltered;