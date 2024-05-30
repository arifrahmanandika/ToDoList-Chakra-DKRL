import { Container } from "@chakra-ui/react";
import Title from "./compinents/title";
import ListToDo from "./compinents/listTodo";
import ToolsToDo from "./compinents/toolsTodo";

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
