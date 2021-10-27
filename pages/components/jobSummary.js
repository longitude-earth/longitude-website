//react function that export the jobs summary component
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import * as React from 'react'

export default function JobSummary ({job}) {
  const {title, location, summary, id} = job

  console.log(job, title)

  return (
    <Box color="white" py="5" mt="5">
        <Link href={`/jobs/${id}`}  _hover={{color: 'gray.300'}}>
          <Heading size="lg">{title}</Heading>
        </Link>
        <Text>{location}</Text>
        <Box>{summary}</Box>
    </Box>
  )
}

