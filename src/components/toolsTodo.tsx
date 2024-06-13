import { Button, Container, Input, Text } from "@chakra-ui/react";
import { ITodo } from "../interface";
import React, { useEffect, useRef, useState } from "react";

function ToolsToDo({
  todos,
  setTodos,
  count,
}: {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  count: number;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  function handleOnClick() {
    const inputTrim = input.trim();
    if (inputTrim.length > 0) {
      let isDup = false;
      todos.forEach((item) => {
        if (item.content.toLowerCase() == inputTrim.toLowerCase()) {
          isDup = true;
          alert(`Laah.. ${inputTrim} sudah ada di List!!!`);
        }
      });

      if (!isDup) {
        setTodos([...todos, { content: inputTrim, isChecked: false }]);
      }
    } else {
      alert("Please Enter a Valid Input!!!");
    }

    if (inputRef.current !== null) {
      inputRef.current.value = "";
    }
    inputRef.current?.focus();
  }

  return (
    <Container>
      <Text color="white" align="center" mb={2}>
        Done : {count}
      </Text>

      <Input
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        color="white"
        variant="outline"
        placeholder="Write ToDo..."
      />
      <Button onClick={handleOnClick} colorScheme="blue" size="sm" mt={2}>
        Add
      </Button>
    </Container>
  );
}

export default ToolsToDo;
