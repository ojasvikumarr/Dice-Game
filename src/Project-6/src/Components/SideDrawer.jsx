import {
    Button ,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import React from "react"
import Sidenav from "./Sidenav";
export default function SideDrawer( { isOpen , onClose}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Sidenav/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
