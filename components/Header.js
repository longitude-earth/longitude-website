import { Box, Image, Link } from '@chakra-ui/react'
import * as React from 'react'

export default function Header () {
  return (
    <Box
      px="5vw"
      pt="3vh">
      <Box width="200px">
        <Link href="/">
          <Image src="./logo_text_white.png" alt="Longitude logo" />
        </Link>
      </Box>
    </Box>
  )
}