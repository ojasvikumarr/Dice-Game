import {
  Flex,
  Container,
  Heading,
  MenuItem,
  MenuList,
  Menu,
  Button,
  MenuButton,
  HStack,
  Box,
  Icon,

} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";

export default function Topnav({title , onOpen}) {
  return (
    <>
      <Box px="4" bg="white">
        <HStack
          h="16"
          justify="space-between"
          maxW="70rem"
          mx="auto"
        >
            <Icon as={CgMenuGridR} fontSize={"24px"} onClick={onOpen} display={{
                base:"block",
                lg:"none",
            }}/>
          <Heading fontSize="28px" fontWeight={"medium"}>{title}</Heading>
          <Menu>
            <MenuButton>
                <Icon as={CiUser} fontSize="24px">
                </Icon>
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </>
  );
}
