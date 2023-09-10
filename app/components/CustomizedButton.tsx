import React from 'react';
import {Button} from "@chakra-ui/react"
const CustomizedButton = () => {
    return (
        <Button
        bg="purple.600"
        height={"60px"}
        margin="10px"
        width={"150px"}
        borderRadius={"50px"}
      >
        Submit
      </Button>
    );
};

export default CustomizedButton;