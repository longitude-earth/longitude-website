import { Box, Heading, Link, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import jobsData from './components/data'
import JobSummary  from './components/jobSummary'

export default function Jobs () {
  return (
    <Box
      height='100vh'
      width='100vw'
      backgroundColor='black'
    >
      <Header />
      <Box
        px="5vw">
        <Heading color="white" mt='5vh' size="2xl" mb="50">
          Jobs
        </Heading>
      {
        jobsData.map((job) => {
          return (
            <JobSummary job={job} />
          )
        })
      }
      </Box>
    </Box>
  )
}