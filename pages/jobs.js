import { Box, Heading } from '@chakra-ui/react'
import * as React from 'react'
import Header from '../components/Header'
import jobs from '../public/data'
import JobSummary  from '../components/jobSummary'

export default function Jobs () {
  return (
    <Box
      height='100%'
      minHeight='100vh'
      width='100vw'
      backgroundColor='black'
    >
      <Box px="5vw" py="5vh">
        <Heading color="white"  size="2xl">
          Jobs
        </Heading>
      {
        jobs.map((job) => {
          return (
            <JobSummary job={job} />
          )
        })
      }
      </Box>
    </Box>
  )
}