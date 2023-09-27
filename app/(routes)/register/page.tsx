"use client";
import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Box,useColorModeValue } from "@chakra-ui/react";

const Page = () => {
  const bg = useColorModeValue("gray.50", "blue.800");
  return (
    <>
      <Box height={"100vh"} width="100vw" bg={bg} >
        <RegisterForm/>
      </Box>
    </>
  );
};

export default Page;
