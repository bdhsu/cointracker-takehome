import { Flex, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      width="100%"
      marginRight="auto"
      marginLeft="auto"
      px="4"
      py="4"
      maxWidth={{ sm: "540px", md: "720px", lg: "960px", xl: "1200px" }}
    >
      <Text as="h1" fontSize="5xl" fontWeight="bold">
        CoinTracker Takehome
      </Text>
    </Flex>
  );
}

export default Header;
