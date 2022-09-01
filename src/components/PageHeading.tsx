import { Box, Flex, Text } from "@chakra-ui/react";

type PageHeadingProps = {
  title: string | JSX.Element;
  description?: string;
  rightComponent?: JSX.Element | null;
};

function PageHeading({ title, description, rightComponent }: PageHeadingProps) {
  return (
    <Flex
      flexDir={{ base: "column", sm: "row" }}
      align={{ sm: "center" }}
      justify={{ sm: "space-between" }}
      mb={{ base: "4", sm: "0" }}
    >
      <Box>
        <Flex align="center">
          <Text as="h1" fontSize="lg" fontWeight="bold">
            {title}
          </Text>
        </Flex>

        {description && (
          <>
            <Text fontSize="sm" as="h2">
              {description}
            </Text>
          </>
        )}
      </Box>

      {rightComponent && rightComponent}
    </Flex>
  );
}

export default PageHeading;
