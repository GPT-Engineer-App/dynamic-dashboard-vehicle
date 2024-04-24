// Complete the Index page component for Vehicle Engine & Drivability Data Analysis Dashboard
import { Box, Flex, Heading, Input, Button, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { FaFileUpload, FaChartBar } from "react-icons/fa";

const Index = () => {
  // Placeholder function to simulate file upload handling
  const handleFileUpload = (event) => {
    console.log("File uploaded:", event.target.files[0]);
    // Here you would typically handle the file, parse it and set the data for charts
  };

  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center">
        <Heading mb={5}>Vehicle Engine & Drivability Data Dashboard</Heading>
        <Input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} placeholder="Upload Excel files" size="lg" mb={3} multiple />
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" mb={5}>
          Upload Vehicle Data
        </Button>
      </Flex>
      <VStack spacing={5}>
        <SimpleGrid columns={3} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Fuel Economy
            </Heading>
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Distance Covered
            </Heading>
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Fuel Consumed
            </Heading>
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              0 to 60 Kmph Time
            </Heading>
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Boost Pressure
            </Heading>
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Coolant Temperature
            </Heading>
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;
