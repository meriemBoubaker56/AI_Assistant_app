"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Box
      top="50px"
      left="0"
      right="0"
      bottom="0"
      overflow="scroll"
      minHeight="100%"
      width="320px"
      position="fixed"
      padding="10px"
    >
      <Card height="100%" width="100%" boxShadow='xl'>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">View here</Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Page;
