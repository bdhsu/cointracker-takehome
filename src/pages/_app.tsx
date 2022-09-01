import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  // Persistent Layout as per https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
  const getLayout = Component["getLayout"] || ((page) => page);

  return (
    <div>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
