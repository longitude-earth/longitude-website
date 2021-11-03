import { useRouter } from 'next/router'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import * as React from 'react'
import jobs from '../../../public/data'

function Job(){
  const router = useRouter()
  const { id } = router.query

  const [job, setJob] = React.useState({title: 'x', description: 'x'})
  
  React.useEffect(() => {
    const j = jobs.find(job => job.id == id)

    if(j){
      setJob(j)
    }
  }, [id])


  return (
    <Box
      height='100%'
      minHeight='100vh'
      width='100vw'
      backgroundColor='black'
    >
      <Box color='white'
              p="5vw">
        <Heading size="2xl" mb="5">
            {job.title}
        </Heading>
        {job.location}<br/><br/>
        <Heading size="md"></Heading>
        <Text fontSize="lg" style={{whiteSpace: 'pre-line'}}>
          {job.description}
        </Text>
        <Button mt="10" backgroundColor="white" color="black" fontSize="20px" fontWeight="900" _hover={{ backgroundColor: "gray.300" }} onClick={()=> window.location.href = "mailto:matthias@longitude.earth"}>Apply</Button>
      </Box>
    </Box>
  )
}

export default Job