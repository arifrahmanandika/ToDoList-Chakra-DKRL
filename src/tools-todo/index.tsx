import { Button, Center, Container, Input, Text } from "@chakra-ui/react";

function ToolsToDo() {
  return (
    <Container>
      <Text color="white" align="center" mb={2}>
        Done : 0
      </Text>
      <Input color="white" variant="outline" placeholder="Write ToDo..." />
      <Button colorScheme="blue" size="sm" mt={2}>
        Add
      </Button>
    </Container>
  );
}
export default ToolsToDo;
