import './Header.css'
import {
    Center
  } from '@chakra-ui/react';

export const Header = () => {
    return (
        <div className='header'>
            <Center color='white'  paddingBottom='3px' fontSize='30px' >
            <h1>  <a href="index.html"> Dio Bank</a>  </h1>
            </Center>
        </div>
    )
}