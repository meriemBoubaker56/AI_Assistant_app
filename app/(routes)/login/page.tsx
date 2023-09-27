"use client";
import React from "react";
import LoginForm from "../../components/LoginForm";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
  const bg = useColorModeValue("gray.50", "blue.800");
  return (
    <>
      <Box height={"100vh"} width="100vw" bg={bg}>
        <LoginForm />
      </Box>
    </>
  );
};

export default Page;
