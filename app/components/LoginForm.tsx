import React, { useState, useEffect } from "react";
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
import { useRouter } from "next/router";
import { login } from "../lib/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, isLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    isLoading(true);
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const data = await login(body);
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
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
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
            <Link href="/register">Sign Up</Link>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
