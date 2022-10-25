import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Fonts from "../components/font";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforEnter initial={true}>
          <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
