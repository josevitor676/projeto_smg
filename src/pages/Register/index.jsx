import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Link,
    Image,
    InputLeftElement
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import estoqueRegister from "../../assets/estoquePintado.png"
import {MdOutlineDriveFileRenameOutline} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup"


export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const schema = yup.object().shape({
        nome: yup.string().required("Nome Obrigatório"),
        sobrenome: yup.string().required("Sobrenome Obrigatório"),
        email: yup.string().required("Email Obrigatório").email("Email Invalido"),
        password: yup.string().min(8, "Minimo de 8 digitos").matches(/(?=.*[A-Z])/, "Sua senha deve conter ao menos uma letra maiúscula").required("Campo Obrigatório"),
        confirmpassword: yup.string().oneOf([yup.ref("password")], "Senhas diferentes").required("Campo Obrigatório")
    })
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver:yupResolver(schema)})

    const onSubmitRegister = (data) => {
        console.log(data)
    }
    return (
        <Flex flexDirection={['column', 'column', 'row']} bg="#142850">
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg="#DAE1E7"
                flex="1">
                <Stack  mx={'auto'} maxW={'lg'}  w="100vw" display="flex" justifyContent="center" alignItems="center">
                    <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'} color="#142850">
                        Fazer Cadastro
                    </Heading>
                    </Stack>
                <Box
                    rounded={'lg'}
                    boxShadow="0px 0px 5px #142850"
                    p={6}
                    boxSizing="border-box"
                    w={["85%", "90%", "95%", "100%"]}
                    as="form"
                    onSubmit={handleSubmit(onSubmitRegister)}
                    >  
                    <Stack spacing={4}>
                        <FormControl id="nome">
                            <FormLabel fontSize={["16px", "18px", "20px"]}>Nome</FormLabel>
                            <InputGroup>
                            <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "5px"]} children={<MdOutlineDriveFileRenameOutline fontSize="25px" />}/>
                            <Input type="text" h={["35px", "40px", "45px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850'
                            _hover={{borderColor:"#142850"}} {...register("nome")}/>
                            </InputGroup>
                            <Text>{errors.nome?.message}</Text>
                        </FormControl>

                        <FormControl id="sobrenome">
                            <FormLabel fontSize={["16px", "18px", "20px"]}>Sobrenome</FormLabel>
                            <InputGroup>
                            <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "5px"]} children={<MdOutlineDriveFileRenameOutline fontSize="25px"/>}/>
                            <Input type="text" h={["35px", "40px", "45px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850'
                            _hover={{borderColor:"#142850"}} {...register("sobrenome")}/>
                            </InputGroup>
                            <Text>{errors.sobrenome?.message}</Text>
                        </FormControl>

                        <FormControl id="email">
                        <FormLabel fontSize={["16px", "18px", "20px"]}>Email</FormLabel>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "5px"]} children={<AiOutlineMail fontSize="25px"/>}/>
                        <Input type="email" h={["35px", "40px", "45px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850'_hover={{borderColor:"#142850"}} {...register("email")}/>
                        </InputGroup>
                        <Text>{errors.email?.message}</Text>
                        </FormControl>

                        <FormControl id="password" >
                        <FormLabel fontSize={["16px", "18px", "20px"]}>Senha</FormLabel>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "5px"]} children={<RiLockPasswordLine fontSize="25px"/>}/>
                            <Input type={showPassword ? 'text' : 'password'} h={["35px", "40px", "45px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} {...register("password")}/>
                            <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text>{errors.password?.message}</Text>
                        </FormControl>

                        <FormControl id="confirmpassword">
                        <FormLabel fontSize={["16px", "18px", "20px"]}>Confirmar Senha</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "5px"]} children={<RiLockPasswordLine fontSize="25px"/>}/>
                            <Input type={showPassword ? 'text' : 'password'} h={["35px", "40px", "45px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} {...register("confirmpassword")}/>
                            <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text>{errors.confirmpassword?.message}</Text>
                        </FormControl>

                        <Stack spacing={10} pt={2}>
                        <Button
                            loadingText="Submitting"
                            as="button"
                            type='submit'
                            size="lg"
                            bg={'#142850'}
                            color={'white'}
                            _hover={{
                            bg: '#142850dd',
                            }}>
                            Fazer Cadastro
                        </Button>
                        </Stack>
                        <Stack pt={6}>
                        <Text align={'center'}>
                            Já tem Cadastro? <Link color={'#142850'}>Fazer Login</Link>
                        </Text>
                        </Stack>
                    </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Flex flex="1" justifyContent="center" alignItems="center">
                <Image src={estoqueRegister} w={["0", "0", "500px", "600px"]}/>
            </Flex>
        </Flex>
    )
}