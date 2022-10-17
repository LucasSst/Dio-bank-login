import { login } from "../../services/login"
import {
    Heading
  } from '@chakra-ui/react';

export const Button = () =>{
    return (
        <button onClick={login}>
            <Heading size= 'sm' backgroundColor='white' p='15px' borderRadius='25px' m='5px'>
                Entrar
            </Heading>    
        </button>
    )
}