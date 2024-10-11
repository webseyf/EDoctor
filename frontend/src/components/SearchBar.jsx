import React, { useState } from 'react';
import {
  Input,
  Button,
  Select,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSearch = () => {
    // Handle search logic here
    console.log('Searching for:', searchTerm, location, date);
  };

  return (
    <Box
      bg="blue.500"
      color="white"
      p={8}
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
      my={5}
    >
      <Heading as="h2" size="lg" mb={4}>
        Find Your Doctor
      </Heading>
      <Flex
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        direction={useBreakpointValue({ base: 'column', md: 'row' })}
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        <Box flex="1">
          <FormControl>
            <FormLabel htmlFor="search">Specialty/Disease</FormLabel>
            <Input
              id="search"
              type="text"
              placeholder="Enter specialty or disease"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Select
              id="location"
              placeholder="Select location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
            </Select>
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <FormLabel htmlFor="date">Appointment Date</FormLabel>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="MMMM d, yyyy"
              className="react-datepicker"
              placeholderText="Select date"
            />
          </FormControl>
        </Box>
        <Box flex="1">
          <FormControl>
            <FormLabel htmlFor="doctor-clinic">Clinic/Doctor Name</FormLabel>
            <Input
              id="doctor-clinic"
              type="text"
              placeholder="Enter clinic or doctor name"
            />
          </FormControl>
        </Box>
        <Button colorScheme="orange" type="submit">
          Search
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchBar;
