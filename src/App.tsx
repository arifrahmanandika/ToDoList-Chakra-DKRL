import { Container } from "@chakra-ui/react";
import Title from "./components/title";
import ListToDo from "./components/listTodo";
import ToolsToDo from "./components/toolsTodo";

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
