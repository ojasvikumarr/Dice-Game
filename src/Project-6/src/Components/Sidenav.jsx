import { Box, Heading, Icon, Text, Stack, HStack } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
export default function Sidenav() {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      links: "/",
    },
    {
      icon: FaMoneyBillTrendUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <>
      <Stack
        justify="space-between"
        boxShadow={{
          base:"none",
          lg:"lg",
        }}
        w={{
          base:"full",
          lg:"16rem",
        }}
        bg="white"
        h="100vh"
        // display={{ base: "none", lg: "flex" }}
      >
        <Box>
          <Heading textAlign="center" fontSize="20px" pt="56px" as="h1">
            @OjasviReacts
          </Heading>
          <Box mx="12px" mt="6">
            {navLinks.map((nav) => {
              return (
                <HStack
                  borderRadius={"10px"}
                  key={nav.text}
                  py="3"
                  px="4"
                  _hover={{
                    bg: "#F3F3F7",
                    color: "#171717",
                  }}
                  color="#797E82"
                >
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium">
                    {nav.text}
                  </Text>
                </HStack>
              );
            })}
          </Box>
        </Box>

        <Box mx="12px" mt="6">
          <HStack
            borderRadius={"10px"}
            key="Support"
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Box>
      </Stack>
    </>
  );
}

// 12px ---> 3 in chakra

// .stack{
//     display : flex ;
//     flex-direction : column ;
// }
// .HStack{
//     display : flex ;
//     alignItems : center ;
//
// .Text{
//     p ---> tag
// }
