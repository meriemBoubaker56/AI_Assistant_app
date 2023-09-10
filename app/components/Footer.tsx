"use client";
import React from "react";
import { Box, Button, Input, InputGroup } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box
      bottom="0"
      left="0"
      height="60px"
      width="100%"
      position="absolute"
      zIndex="900"
      padding={"10px"}
    >
      <InputGroup>
        <Input
          borderWidth="3px"
          height={"50px"}
          margin="10px"
          width={"calc(90% - 150px)"}
          borderRadius={"50px"}
        />
        <Button
          bg="purple.600"
          height={"50px"}
          margin="10px"
          width={"130px"}
          borderRadius={"50px"}
        >
          Submit
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Page;
