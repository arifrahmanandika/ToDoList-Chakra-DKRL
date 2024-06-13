import {
  Container,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import { ITodo } from "../interface";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";

function ListToDo({
  todos,
  setTodos,
  count,
  setCount,
}: {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<ITodo>>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const checked = (todo: ITodo) => {
    if (todo.isChecked) {
      todo.isChecked = false;
      setCount(count - 1);
    } else {
      todo.isChecked = true;
      setCount(count + 1);
    }
  };

  const deleteTodo = (todo: ITodo) => {
    setTodos(todos.filter((t) => t.content !== todo.content));
    todo.isChecked && setCount(count - 1);
  };
  return (
    <Container mb="1em">
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 2]} direction={["column"]}>
          <Box>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Checkbox
                    isChecked={todo.isChecked}
                    onChange={() => checked(todo)}
                    size="sm"
                    color="white"
                  >
                    {todo.isChecked ? (
                      <Text textDecoration={"line-through"}>
                        {todo.content}
                      </Text>
                    ) : (
                      <Text>{todo.content}</Text>
                    )}
                  </Checkbox>

                  <Box
                    onClick={() => deleteTodo(todo)}
                    ml="auto"
                    bg="transparent"
                    border="1px solid white"
                    borderRadius="md"
                    paddingTop={0.3}
                    paddingBottom={1}
                    px={1}
                    _hover={{ border: "1px solid red" }}
                    _active={{ border: "1px solid black" }}
                  >
                    <DeleteIcon color="white" boxSize={4} />
                  </Box>
                </Stack>
              ))}
          </Box>
        </Stack>
      </CheckboxGroup>
    </Container>
  );
}

export default ListToDo;
