import {Box , Flex , Container, useDisclosure} from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import SideDrawer from "./SideDrawer";


export default function DashBoardLayout({title , children}){
    const {isOpen , onClose , onOpen} = useDisclosure();
    
    return (
        <div>
        <Flex>
            <Box
                display={{
                    base:"none",
                    lg:"flex",
                }}
                >
        <Sidenav/>
            </Box>
        <SideDrawer isOpen={isOpen}  onClose={onClose}/>
            <Box flexGrow={1}>
            <Topnav title={title} onOpen={onOpen}/>
            <Container mt="6" maxW="70rem">
                {children}
            </Container>
            </Box>
        </Flex>
        </div>

    )
}