import { ChakraProvider } from "@chakra-ui/react"
import { useEffect } from "react"
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    //set tab title 
    document.title = "Longitude"
    document.head.innerHTML = `    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BZRGD2923N"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-BZRGD2923N');
    </script>`
  }, [])

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp