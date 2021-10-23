import { Box, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
import { Feature } from './components/Feature'

export default function Home () {

  return (
    <Box
      height='100vh'
      width='100vw'
      backgroundColor='black'
      alignItems='center'
      display='flex'
      justifyContent='center'
    >
      <Box color='white'>
        <Heading size="3xl">
          Digital products studio
        </Heading>
        <Heading mt="2">in Berlin.</Heading>
      </Box>
    </Box>
  )
}