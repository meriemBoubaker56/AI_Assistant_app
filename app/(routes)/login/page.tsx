"use client";
import React from "react";
import SideCard from "../../components/SideCard";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumbs";
import LoginForm from "../../components/LoginForm";
import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
  const bg = useColorModeValue("gray.50", "blue.800");
  return (
    <>
      <Header />
      <Box height={"100vh"} width="100vw" bg={bg} >
        <LoginForm/>
      </Box>
    </>
  );
};

export default Page;
