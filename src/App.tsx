import { Container } from "@chakra-ui/react";
import Title from "./title";
import ListToDo from "./list-todo";
import ToolsToDo from "./tools-todo";

function App() {
  return (
    <Container>
      <Title />
      <ListToDo />
      <ToolsToDo />
    </Container>
  );
}

export default App;
