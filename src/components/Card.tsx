
import { Button } from './Button/Button';
import {
    Box,
    Center,
    Container,
    ChakraProvider,
    Heading, 
    Input
  } from '@chakra-ui/react';



  
export const Card = () => {
    return (
        <ChakraProvider>
            <Box bg='#bfc8c9' minHeight='100vh' color='#2eccdb'>
                <Container maxW='container.sm' padding='25px'>
                    <Box background='#6a9da6' padding='5' borderRadius='5px' boxShadow='1px 1px 5px #195157'>
                        <Center>
                            <Heading textShadow='1px 1px 3px #3f676b' as='h1' fontSize="xl" color='#2eccdb'>
                                <h1>Faça o login</h1>
                            </Heading>
                        </Center>
                        <Input boxShadow='1px 1px 2px #3f676b' m='1' placeholder="Email" />
                        <Input boxShadow='1px 1px 2px #3f676b' m='1' placeholder="password" />
                        <Center>
                            <Button></Button>
                        </Center>
                    </Box>
                </Container>
            </Box>
        </ChakraProvider >
    )
}