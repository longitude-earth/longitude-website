import { useRouter } from 'next/router'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import * as React from 'react'
import jobsData from '../../components/data'

function Job(){
  const router = useRouter()
  const { id } = router.query

  const [job, setJob] = React.useState({title: 'x', description: 'x'})
  
  React.useEffect(() => {
    const j = jobsData.find(job => job.id == id)

    if(j){
      console.log('JJJJ: ',j)
      setJob(j)
    }
  }, [id])


  return (
    <Box
      height='100vh'
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