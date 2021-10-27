import { Box, Heading } from "@chakra-ui/react";
import * as React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Box height="100vh" width="100vw" backgroundColor="black">
      <Header />
      <Box
        mt="25vh"
        px="5vw"
        color="white"
        alignItems="center"
        display="flex"
        justifyContent="center"
      >
    <Box>
          <Heading size="3xl">Digital product studio</Heading>
          <Heading mt="4" size="md">
            in Berlin.
          </Heading>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
}
