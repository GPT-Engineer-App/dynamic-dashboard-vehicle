// Complete the Index page component for Vehicle Engine & Drivability Data Analysis Dashboard
import { Box, Flex, Heading, Input, Button, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

import { FaFileUpload, FaChartBar } from "react-icons/fa";

const Index = () => {
  // Placeholder function to simulate file upload handling

  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("File uploaded:", file);
    setUploadedFileName(file.name);
    localStorage.setItem("uploadedFiles", JSON.stringify([...JSON.parse(localStorage.getItem("uploadedFiles") || "[]"), file.name]));
  };

  return (
    <Box p={5}>
      <Flex direction="column" align="center" justify="center">
        <Heading mb={5}>Vehicle Engine & Drivability Data Dashboard</Heading>
        <Input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} placeholder="Upload Excel files" size="lg" mb={3} multiple />
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" mb={3}>
          Upload Vehicle Data
        </Button>
        {uploadedFileName && (
          <>
            <Text>Your uploaded file: {uploadedFileName}</Text>
            <Button as="a" href="/uploaded-files" colorScheme="teal" mt={4}>
              View Uploaded Files
            </Button>
          </>
        )}
      </Flex>
      <VStack spacing={5}>
        <SimpleGrid columns={3} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Fuel Economy
            </Heading>
            <FaChartBar size="3em" />
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Distance Covered
            </Heading>
            <FaChartBar size="3em" />
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Fuel Consumed
            </Heading>
            <FaChartBar size="3em" />
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              0 to 60 Kmph Time
            </Heading>
            <FaChartBar size="3em" />
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Boost Pressure
            </Heading>
            <FaChartBar size="3em" />
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading size="md" mb={3}>
              Coolant Temperature
            </Heading>
            <FaChartBar size="3em" />
            <FaChartBar size="3em" />
            <Text mt={2}>Chart Placeholder</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;
