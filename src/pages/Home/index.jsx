import { Menu } from "../../Components/Menu";
import  { Center, Flex, Input, Text } from "@chakra-ui/react";
import { FaSearch, FaBox } from "react-icons/fa";

export const Home = () => {
    return (
        <>
            <Flex mt="6px" paddingX={['4', '8']} paddingY="2" justifyContent="space-between" borderBottom="1px solid black">

                <Flex alignItems="center">
                    <Text marginRight="5px" fontFamily="Kanit, sans-serif" fontSize="20px">SafeStock</Text>
                    <FaBox />
                </Flex>
                <Flex as="form">
                    <Input placeholder="Pesquisar por item" name="title" w="35vw" h="25px" fontFamily="Kanit, sans-serif"/> 
                    <Center
                        borderRadius="5px"
                        as="button"
                        ml="2"
                        w="35px"
                        h="25px"
                        fontSize="2xl"
                        bg="rgba(66, 153, 225, 0.871)"
                        _hover={{bg: "#4299e1ca"}}
                        >
                        <FaSearch color="#ffff" fontSize="12px"/>
                    </Center>
                </Flex>
                <Menu/>
            </Flex>
        </>
    )
}