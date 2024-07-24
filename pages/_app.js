import '../styles/globals.css'
import { motion, AnimatePresence  } from "framer-motion"
import Layout from "../components/layout"
import ContextWrapper from "../components/context"
import { useEffect } from 'react'


function MyApp({ Component, pageProps, router }) {

    useEffect(() => {
      window.scrollTo(0,0)
  },[router.route])
 
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContextWrapper>
          <Layout>
              <Component {...pageProps} />
          </Layout> 
        </ContextWrapper>
      </motion.div>
  </AnimatePresence>
  
)
}

export default MyApp
