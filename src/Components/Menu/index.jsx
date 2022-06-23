import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Box,
    Stack,
    FormControl,
    FormLabel,
    InputGroup,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup"

export const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        description: yup.string().required("Campo Obrigatório"),
        category: yup.string().required("Campo Obrigatório"),
        which_store: yup.string().required("Campo Obrigatório"),
        price_paid: yup.string().required("Campo Obrigatório"),
        price_to_sell: yup.string().required("Campo Obrigatório"),
        quantity: yup.string().required("Campo Obrigatório"),
        purchase_data: yup.string().required("Campo Obrigatório"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: yupResolver(schema)})

    const onSubmitAdd = (data) => {
        console.log(data)
    }

    return (
        <>
        <Button ref={btnRef} onClick={onOpen} p="6px" h="25px" fontSize="10px" color="#ffff" bg="#4299e1de" _hover={{bg: "#4299e1ca"}} fontFamily="Kanit, sans-serif">
            Adicionar novo Produto
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontFamily="Kanit, sans-serif">Adicionar Produto</DrawerHeader>

            <DrawerBody
            sx={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                  borderRadius: '8px',
                  backgroundColor: `red`,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: `blue`,
                  borderRadius: '8px',
                },
              }}
            >
                <Box
                as='form'
                w="100%"
                onSubmit={handleSubmit(onSubmitAdd)}
                >
                    <Stack fontFamily="Kanit, sans-serif">
                        <FormControl id='name'>
                            <FormLabel >Nome Produto</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Nome do produto' {...register("name")}/>
                            </InputGroup>
                            <Text>{errors.name?.message}</Text>
                        </FormControl>

                        <FormControl id='description'>
                            <FormLabel>Descrição</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Descrição do produto' {...register("description")}/>
                            </InputGroup>
                            <Text>{errors.description?.message}</Text>
                        </FormControl>

                        <FormControl id='category'>
                            <FormLabel>Categoria</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Categoria do produto' {...register("category")}/>
                            </InputGroup>
                            <Text>{errors.category?.message}</Text>
                        </FormControl>

                        <FormControl id='which_store'>
                            <FormLabel>Onde Comprou?</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Nome da loja' {...register("which_store")}/>
                            </InputGroup>
                            <Text>{errors.which_store?.message}</Text>
                        </FormControl>

                        <FormControl id='price_paid'>
                            <FormLabel>Quanto Pagou?</FormLabel>
                            <InputGroup>
                                <Input type="number" placeholder='Preço que pagou' {...register("price_paid")}/>
                            </InputGroup>
                            <Text>{errors.price_paid?.message}</Text>
                        </FormControl>

                        <FormControl id='price_to_sell'>
                            <FormLabel>Por Quanto vai Vender?</FormLabel>
                            <InputGroup>
                                <Input type="number" placeholder='Preço que vai vender' {...register("price_to_sell")}/>
                            </InputGroup>
                            <Text>{errors.price_to_sell?.message}</Text>
                        </FormControl>

                        <FormControl id='quantity'>
                            <FormLabel>Quantidade</FormLabel>
                            <InputGroup>
                                <Input type="number" placeholder='Quantidade de produto' {...register("quantity")}/>
                            </InputGroup>
                            <Text>{errors.quantity?.message}</Text>
                        </FormControl>

                        <FormControl id='purchase_data'>
                            <FormLabel>Data que Comprou</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Ex: Ano/Mês/Dia' {...register("purchase_data")}/>
                            </InputGroup>
                            <Text>{errors.purchase_data?.message}</Text>
                        </FormControl>

                        <Stack spacing={4} pt="2">
                            <Button 
                            colorScheme="blue"
                            loadingText="Submitting"
                            as="button"
                            type='submit'
                            >
                                Cadastrar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </DrawerBody>

            </DrawerContent>
        </Drawer>
        </>
    )
}