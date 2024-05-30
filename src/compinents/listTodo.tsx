import {
  Container,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function ListToDo() {
  let item_list = ["Tlp Kang Cuci AC", "Share Jadwal DepMus!"];
  return (
    <Container mb="1em">
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 2]} direction={["column"]}>
          /**ini batas list */
          <Box>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Checkbox size="sm" color="white">
                <Text>{item_list[0]}</Text>
              </Checkbox>
              <Box
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
          </Box>
          /**ini batas list */
          <Box>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Checkbox size="sm" color="white">
                <Text>{item_list[1]}</Text>
              </Checkbox>
              <Box
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
          </Box>
        </Stack>
      </CheckboxGroup>
    </Container>
  );
}

export default ListToDo;
