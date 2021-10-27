import { Box, Heading, Text, Link } from '@chakra-ui/react'
import * as React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export default function Jobs () {
  return (
    <Box
      height='100vh'
      width='100vw'
      backgroundColor='black'
    >
      <Header />
      <Box color='white'
              mt='5vh'
              px="5vw">
        <Heading size="2xl">
            About
        </Heading>
        <Text fontSize="2xl" mt="5">
          We are a small team of developers who love to create and build things, specialised in complex applications. <br/>
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


          <br/><br/>
          Address: <br/>
          Allerstrasse 37 <br/>
          12049 Berlin <br/>
          Germany <br/>
          VAT: DE345043936 <br/>
          <href href="mailto:matthias@longitude.earth">mail us</href>

        </Text>
      </Box>
      <Footer/>
    </Box>
  )
}