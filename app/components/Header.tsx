"use client";
import React from "react";
import { Box } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box
      borderWidth="1px"
      top="0"
      bg="purple.600"
      left="0"
      height="40px"
      width="100%"
      position="fixed"
      zIndex="900"
    >
      {" "}
      header
    </Box>
  );
};

export default Page;
