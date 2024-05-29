import {
  Container,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function ListToDo() {
  return (
    <Container mb="1em">
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]} direction={["column"]}>
          <Stack direction="row">
            <Checkbox size="sm" color="white">
              Share Jadwal DepMus
            </Checkbox>
            <Box
              as="button"
              borderRadius="md"
              borderColor="white"
              bg="tomato"
              color="gray.500"
              px={4}
              h={8}
            >
              <DeleteIcon color="white" />
            </Box>
          </Stack>
          <Stack direction="row">
            <Checkbox size="sm" color="white">
              Kondangan ke Ricky Ciencien
            </Checkbox>
            <DeleteIcon color="white" />
          </Stack>
          <Stack direction="row">
            <Checkbox size="sm" color="white">
              Grand Opening NSO
            </Checkbox>
            <DeleteIcon color="white" />
          </Stack>
          <Stack direction="row">
            <Checkbox as="del" size="sm" color="white">
              Tlp Wahyu
            </Checkbox>
            <DeleteIcon color="white" />
          </Stack>
          <Stack direction="row">
            <Checkbox size="sm" color="white">
              Tlp Kang Cuci AC
            </Checkbox>
            <DeleteIcon color="red" />
          </Stack>
        </Stack>
      </CheckboxGroup>
    </Container>
  );
}

export default ListToDo;
