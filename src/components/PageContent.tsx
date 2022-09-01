import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

const PageContent = forwardRef<BoxProps, "div">((props, ref) => (
  <Box
    width="100%"
    marginRight="auto"
    marginLeft="auto"
    px="4"
    pb="16"
    maxWidth={{ sm: "540px", md: "720px", lg: "960px", xl: "1200px" }}
    ref={ref}
    {...props}
  />
));

export default PageContent;
