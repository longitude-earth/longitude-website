import { Box, HStack, Button } from '@chakra-ui/react'
import * as React from 'react'

export default function Footer (){
  //svg is made with this app: https://app.haikei.app/

  return (
    <Box 
      position="absolute"
      bottom="10vh" >
    <Box  
      width="100vw"
      alignItems='center'
      display='flex'
      justifyContent='center'
      >
    <HStack spacing="5"> 
      <Button variant="ghost" color="white" fontSize="20px" fontWeight="900" _hover={{ color: "gray.300" }} onClick={()=> window.location.href = "/about"}>
        About
      </Button>
      <Button variant="ghost" color="white" fontSize="20px" fontWeight="900" _hover={{ color: "gray.300" }} onClick={()=> window.location.href = "/jobs"}>
        Jobs
      </Button>
      <Button variant="ghost" color="white" fontSize="20px" fontWeight="900" _hover={{ color: "gray.300" }} onClick={()=> window.location.href = "https://github.com/matthiasadriaens"}>
        Github
      </Button>
    </HStack>
  </Box>
  </Box>
  )
}