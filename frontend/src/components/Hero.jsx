import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import SearchBar from './SearchBar';

function Hero() {
  return (
    <Box
      bgImage="url('/path/to/your/hero-image.jpg')" // Replace with your image path
      bgSize="cover"
      bgPosition="center"
      py={20}
      textAlign="center"
      color="white"
    >
      <Container>
        <Heading as="h1" size="2xl" mb={6}>
          Welcome to EDoctor
        </Heading>
        <SearchBar />
      </Container>
    </Box>
  );
}

export default Hero;
