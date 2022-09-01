import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

import { getLayout } from "components/Layout";

function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/wallets");
  }, [router]);

  return null;
}

Index.getLayout = (page) => getLayout(page);

export default Index;
