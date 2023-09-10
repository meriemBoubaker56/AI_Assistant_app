"use client";
import React from "react";
import SideCard from "../../components/SideCard";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumbs";
import Chat from "../../components/Chat";
import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
  const bg = useColorModeValue("gray.50", "blue.800");
  return (
    <>
      <Header />
      <Box className="chat" bg={bg}>
        <SideCard />
        <Breadcrumb />
        <Chat />
      </Box>
    </>
  );
};

export default Page;
