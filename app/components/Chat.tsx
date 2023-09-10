"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <Box
      width="calc(90% - 320px)"
      height="calc(100% - 170px)"
      position="absolute"
      top="100px"
      left="320px"
      bottom="0"
    >
      <FontAwesomeIcon
        icon={faMeteor}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          margin: "auto",
          fontSize: "150px",
          opacity:"0.2"
        }}
      />
      <Footer />
    </Box>
  );
};

export default Page;
