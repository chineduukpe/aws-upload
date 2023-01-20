import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css';
import '../public/static/css/style.css'

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default App;