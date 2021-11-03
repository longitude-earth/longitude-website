import { Box, Heading, Text, Button } from '@chakra-ui/react'
import * as React from 'react'
import Header from '../components/Header'

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
        <Heading size="xl">
            About
        </Heading>
        <Text fontSize="lg" mt="5">
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

          <Text>Technologies we use</Text>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Gatsby</li>
          </ul>
        </Text>

        <Box mt="15">
          <Text fontSize="xl">Address:</Text>
          Allerstrasse 37 <br/>
          12049 Berlin <br/>
          Germany <br/>
          VAT: DE345043936 <br/>
          <Button mt="10" backgroundColor="white" color="black" fontSize="20px" fontWeight="900" _hover={{ backgroundColor: "gray.300" }} onClick={()=> window.location.href = "mailto:matthias@longitude.earth"}>Contact</Button>
        </Box>
      </Box>
    </Box>
  )
}