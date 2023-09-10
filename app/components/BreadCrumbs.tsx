"use client";
import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "blue.500");
  return (
      <Box
        top="80px"
        left="320px"
        width="calc(80% - 250px)"
        position="fixed"
        padding={"10px"}
        height="70px"
        bg={bg}
        opacity={"0.5"}
        boxShadow={"md"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Breadcrumb width={"30%"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Pages</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">ChatUi</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box
          padding="10px"
          width={"30%"}
          justifyContent={"end"}
          alignItems={"center"}
          height={"100%"}
          bg="white"
          opacity={"1"}
          display={"flex"}
          borderRadius={"50px"}
        >
          <Input borderRadius={"50px"} marginRight={"10px"} width="200px" />
          <FontAwesomeIcon
            onClick={toggleColorMode}
            icon={colorMode === "light" ? faSun : faMoon}
            style={{ fontSize: "28px", cursor: "pointer" }}
          />
        </Box>
      </Box>
  );
};

export default Page;
