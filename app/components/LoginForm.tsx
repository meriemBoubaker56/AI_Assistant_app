"use client";
import React from "react";
import { Box, Button, Input, InputGroup } from "@chakra-ui/react";

const Page = () => {
  return (
    <Box
      height="60px"
      width="100%"
      marginTop={"30px"}
      padding={"60px 30px"}
    >
      <InputGroup display={"flex"} flexDirection={"column"}>
        <Input
          borderWidth="3px"
          height={"60px"}
          margin="10px"
          width={"calc(100% - 150px)"}
          borderRadius={"50px"}
        />
         <Input
          borderWidth="3px"
          height={"60px"}
          margin="10px"
          width={"calc(100% - 150px)"}
          borderRadius={"50px"}
        />
        <Button
          bg="purple.600"
          height={"60px"}
          margin="10px"
          width={"150px"}
          borderRadius={"50px"}
        >
          Submit
        </Button>
      </InputGroup>
    </Box>
  );
};

export default Page;
