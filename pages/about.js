import { Box, Heading, Text, Button } from '@chakra-ui/react'
import * as React from 'react'
import Header from '../components/Header'

export default function Jobs () {
  return (
    <Box
      height='100%'
      minHeight='100vh'
      width='100vw'
      backgroundColor='black'
    >
      <Box color='white'
              px="5vw"
              py="5vh">
        <Heading size="2xl">
            About
        </Heading>
        <Text fontSize="xl" mt="5">
          We are a small team of developers who love to create and build things, especially complex applications. <br/>
          <br/>
          Services we offer:
          <br/>
          - Full stack development
          <br/>
          - API development
          <br/>
          - Data analytics and visualisation
          <br/>
          - Database design 
          <br/>
          - Basic data science
          <br/>
        </Text>

        <Box mt="35">
          <Text fontSize="xl">Address:</Text>
          <Text fontSize="xl">
          Allerstrasse 37 <br/>
          12049 Berlin <br/>
          Germany <br/>
          VAT: DE345043936 <br/>
          </Text>
          <Button mt="10" backgroundColor="white" color="black" fontSize="20px" fontWeight="900" _hover={{ backgroundColor: "gray.300" }} onClick={()=> window.location.href = "mailto:matthias@longitude.earth"}>Contact</Button>
        </Box>
      </Box>
    </Box>
  )
}