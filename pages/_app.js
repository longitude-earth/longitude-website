import { ChakraProvider } from "@chakra-ui/react"
import { useEffect } from "react"
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    //set tab title 
    document.title = "Longitude"
  }, [])

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp