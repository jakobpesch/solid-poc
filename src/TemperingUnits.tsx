import { useNavigate } from "@solidjs/router";
import { For, type Component } from "solid-js";
import { css } from "../styled-system/css";
import { Box, Container, HStack } from "../styled-system/jsx";

const TemperingUnits: Component = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box>TemperingUnits</Box>
      <HStack>
        <For each={["1", "2", "3"]}>
          {(item) => (
            <button
              class={css({ paddingX: "2", bg: "gray.200" })}
              onClick={() => {
                navigate(item);
              }}
            >
              Machine {item}
            </button>
          )}
        </For>
      </HStack>
    </Container>
  );
};

export default TemperingUnits;
