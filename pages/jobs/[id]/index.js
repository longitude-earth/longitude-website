import { useRouter, useEffect, useState } from 'next/router'
import { Box, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import jobsData from '../../components/data'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const job = jobsData.find((job) => job.id == id)

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
        <Heading size="2xl" mb="5">
            {job.title}
        </Heading>
        <Heading size="md"></Heading>
        <Text>
          {job.description}
        </Text>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Post