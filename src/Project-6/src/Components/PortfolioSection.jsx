import { Flex, Button, Icon, HStack, Stack, Text, Tag } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import React from "react";
import { PiCurrencyBtc } from "react-icons/pi";
import { PiCurrencyInrLight } from "react-icons/pi";
import { CiSaveDown1 } from "react-icons/ci";
import { CiSaveUp1 } from "react-icons/ci";

export default function PortfolioSection() {
  return (
    <>
      <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        lg: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>


        <HStack>
          <Button
            color="white"
            bg="#5F00D9"
            _hover={{ color: "#5F00D9", bg: "white" }}
          >
            <Icon as={CiSaveDown1} />
            &nbsp;Deposit
          </Button>
          <Button
            color="white"
            bg="#5F00D9"
            _hover={{ color: "#5F00D9", bg: "white" }}
          >
            <Icon as={CiSaveUp1} />
            &nbsp;Withdrawal
          </Button>
        </HStack>
      </HStack>
      {/* <HStack>
            <Stack>
                <HStack>
                    <Text> Wallet Balance </Text>
                </HStack>
            </Stack>
        </HStack> */}
    </>
  );
}
