import {Box, VStack, Input, Text, Heading, Button, Center} from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

function Reservation() {
    
    return(

    <Box width='100%' bg='#495E57' display='flex' flexDirection='column' alignItems='center' gap='30px' padding='10px' id='reservation-section'>

        <Heading as='h2' size='2xl'color='#F4CE14'>Reserve a Table</Heading>

        <Box display='flex' alignItems='flex-start' gap='10px' color='white'>

            <VStack display='flex' alignItems='flex-start' border='1px solid #EDEFEE' borderRadius='10px' padding='10px'>                
                <Heading as='h3' size='lg' color='white'>Personal Data</Heading>
                <Text>Full Name*</Text>            
                <Input type='text' placeholder='First Name' size='md'></Input>
                <Text>E-mail*</Text>
                <Input type='text' placeholder='E-mail' size='md' ></Input>
                <Text>Phone Number*</Text>
                <Input type='tel' placeholder='Phone Number' size='md' ></Input>
            </VStack>

            <VStack display='flex' alignItems='flex-start'border='1px solid #EDEFEE' borderRadius='10px' padding='10px'>
                <Heading as='h2' size='lg' color='white'>Booked</Heading>
                <Text>Date*</Text>               
                <Input type='date' placeholder='Date*' size='md' ></Input>
                <Text>Time*</Text>
                <Input type='time' placeholder='Time*' size='md' ></Input>
                <Text>How Many People?*</Text>
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>               
            </VStack>

        </Box>

        <Button bg='#F4CE14'>Confirm Reservation</Button>

    </Box>  
 
    )
}

export default Reservation