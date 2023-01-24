import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import '@aws-amplify/ui-react/styles.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
