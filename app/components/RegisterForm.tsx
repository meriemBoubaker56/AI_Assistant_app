import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  VStack,
} from "@chakra-ui/react";
import { register } from "../lib/authAction";
import { validator } from 'validator';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, isLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    isLoading(true);
    e.preventDefault();
    const body = {
      name:e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const data = await register(body);
    // if (data.ok) {
    //   const userObj = await res.json();
    //   // mutate(userObj);
    // } else {
    //   isLoading(false);
    //   setErrorMsg("Incorrect username or password. Try again!");
    // }
  };

  return (
    <Center height="100vh">
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Register
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="Name"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Submit
            </Button>
            <h3>You have an account ?</h3>
            <Link href="/login">Login</Link>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default Register;
