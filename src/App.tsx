import { Container } from "@chakra-ui/react";
import Title from "./components/title";
import ListToDo from "./components/listTodo";
import ToolsToDo from "./components/toolsTodo";
import { ITodo } from "./interface";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <Container>
      <Title />
      <ListToDo
        todos={todos}
        setTodos={setTodos}
        count={count}
        setCount={setCount}
      />
      <ToolsToDo todos={todos} setTodos={setTodos} count={count} />
    </Container>
  );
}

export default App;
